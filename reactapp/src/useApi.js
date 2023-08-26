import { useEffect, useState } from "react";

const useApi=(url)=>{

    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
    


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res=>{
                    if(!res.ok){
                        throw Error("couldnot fetch the data for the resource")
                    }
                    return res.json();
                })
                .then(data=>{
                    setData(data);
                    setisPending(false);
                    setError(null);
                })
                .catch(err => {
                    setisPending(false);
                    setError(err.message);
                })
        }, 1000);
            
    }, [url])

    return {data, isPending, error}
}


export default useApi