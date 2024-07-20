import BlogList from './blogsList';
import useFetch from './useFetch';

const Home = () => {

    const { data:blogs ,  isLoading , error } = useFetch('http://localhost:8000/blogs'); // fetching the data from the server
    
    return ( 
        <div className="home">
            {isLoading &&  <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title={'katia'} ></BlogList>} {/**conditional templating  */}
            {error && <div>{error}</div>}
        </div>
    );

}

export default Home;