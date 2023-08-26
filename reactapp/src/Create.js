import {useState} from 'react';
import { useNavigate } from 'react-router';
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Karan');
    const [isPending, setIsPending] = useState(false);
    const navigate= useNavigate();

    const handleSubmit = (e) =>{
        setIsPending(true);
        e.preventDefault();
        const blog = { title, body, author}
        
        fetch( 'http://localhost:3000/movie',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{

            console.log("new blog added")
            setIsPending(false)
        })
        navigate("/")

        
    }


    return ( 
        <div className = "create">
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)} 
                >    
                </textarea>
                <label>blog author</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value = "karan">Karan</option>
                    <option value = "Roushan">Roushan</option>
                </select>
                {!isPending && <button >add new </button>}
                {isPending && <button disabled >adding</button>}
                
            </form>
        </div>
     );
}
 
export default Create   ;