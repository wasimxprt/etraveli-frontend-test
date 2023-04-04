import React from 'react';
import Movie from '../interfaces';
import axios from "axios";
import StarRating from './StarRating';
import Spinner from './Spinner';

interface MovieProps {
    title?: string,
    details?: string,
    director?: string,
}


const MovieDetails: React.FC<MovieProps> = ({ title, details, director }: MovieProps) => {

    const [poster, setPoster] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        setLoading(true);

        const url = `http://www.omdbapi.com/?s=${title}&apikey=263d22d8`;

        axios.get(url).then((response) => {
            if (response.data && response.data.Response == "True") {
                setPoster(response.data.Search[0].Poster);
                setLoading(false);
            }

        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, [title]);
    return (
        <>
            {loading ? <Spinner /> : <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={poster} className="img-fluid rounded-start" alt={title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"> {title}</h5>
                            <p className="card-text">{details}</p>
                            <p className="card-text"><small className="text-muted">Directed by: {director}</small></p>
                            <p className="card-text">Average rating: <StarRating rating="7" /></p>
                        </div>
                    </div>

                </div>
            </div>}
        </>
    );
}

export default MovieDetails;
