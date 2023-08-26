import BlogList from './blogList';
import useApi from './useApi';


const Home = () => {

    const {data : blogs, isPending, error} = useApi('http://localhost:3000/movie') 


    return(  
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>loading...</div>}
            {blogs && < BlogList blogs = {blogs} title = "All blogs" />}
        </div>
    );
}
 
export default Home;