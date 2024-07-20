import {  useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [ title , setTitle ] = useState('katia');
    const [ content , setContent ] = useState('katia');
    const [ author , setAuthor ] = useState('tarek');
    const [ isLoading , setIsLoading ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault(); // preventing the page from being refreshed 
        const blog  = {
            title: title,
            content: content,
            author: author,
        }

        
        // making a post request 
        fetch('http://localhost:8000/blogs', {
            method: 'POST', // the method 
            headers: { "Content-Type": "application/json" }, // the type of content 
            body: JSON.stringify(blog) // the data 
        }).then(() => {
            setIsLoading(false);
            console.log('new blog added');
            // history.go(1); //-1 for going a step back, 1 stays at the same route 
            history.push('/');
        }).catch(err => {
            setIsLoading(false);
            console.log(err);
        })

        
        
        


       
    };

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <label>Blog body:</label>
                <textarea  
                    required
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                ></textarea>
                <label>Blog author</label>
                <select 
                    value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                >
                    <option value="tarek">tarek</option>
                    <option value="katia">katia</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;