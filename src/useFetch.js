import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null); // passing the blog to the blogs-list component 
    const [isLoading , setIsLoading ] = useState(true); 
    const [error , setError ] = useState(null);

    useEffect(() => { // runs every time there is a rerender 
        const abortCont  = new AbortController(); 
        setTimeout(() => {
            // good place for fetching data  
        fetch(url, { signal: abortCont.signal }) 
            .then(res => {
                if (!res.ok){
                    throw Error('could not fetch the data for that resource'); // to catch the error in the catch block
                }
                return res.json();
            })
            .then(data => {
                setData(data); // it fires once so we don't have an infinite loop
                setIsLoading(false); // to stop the loading
                setError(null); 
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setIsLoading(false); 
                    setError(err.message);
                }
            })
        }, 500);

        return () => {
            abortCont.abort(); 
        } // this is a cleanup function that runs when the component is unmounted
    }, [url]); // runs after specific render ([] for the first render)

    return { data, isLoading, error }; 
}


export default useFetch; // exporting the custom hook 
