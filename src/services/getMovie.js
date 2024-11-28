import { useEffect, useState } from "react"

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_API_KEY}`;

const getMovie = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({show: false, msg: ''});
    const [data, setData] = useState({Search: []})

    const fetchMovies = async (url)=>{
        setIsLoading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            if(data.Response === 'True'){
                setData(data.Search || data);
                setError({show: false, msg: ''})
            } else {
                setError({show: true, msg: data.Error})
            }
            setIsLoading(false);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchMovies(`${API_ENDPOINT}${urlParams}`)
    },[urlParams])
    return {isLoading, error, data}
}

export default getMovie