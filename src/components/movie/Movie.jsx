import { useParams, Link } from "react-router-dom";
import getMovie from "../../services/getMovie";
const Movie = ()=> {
    const {id} = useParams();
    const {isLoading, error, data: movie} = getMovie(`&i=${id}`);
    if(isLoading){
        return <div className="loading"></div>
    }
    if(error.show){
        return <div className="page-error">
            <h1>{error.msg}</h1>
            <Link to="/" className="btn">back</Link>
        </div>
    }

    const {Poster: poster, Title: title, Plot: plot, Year: year} = movie;
    return(
        <section className="single-movie">
            <img src={poster} alt={title} />
            <p>{plot}</p>
            <h4>{year}</h4>
            <Link to="/" className="btn">back</Link>
        </section>
    )
}

export default Movie