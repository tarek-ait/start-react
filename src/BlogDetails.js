import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();
    const history = useHistory();
    const { data:blog ,  isLoading , error } = useFetch('http://localhost:8000/blogs/' + id); // fetching the data from the server
    
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    


    
   

    return ( 
        <div className="blog-details">
            {isLoading &&  <div> Loading... </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.content}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;