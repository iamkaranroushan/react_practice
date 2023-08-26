import { useParams } from "react-router";
import useApi from "./useApi";
import { useNavigate } from "react-router";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog , isPending, error} = useApi('http://localhost:3000/movie/'+id)
    const navigate =  useNavigate();


    const handleClick =()=>{
        fetch('http://localhost:3000/movie/' + blog.id , {
            method: 'DELETE'
        }).then(()=>{
            console.log("deleted ")
            navigate('/')
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading.......</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
            
        </div>
     );
}
 
export default BlogDetails;