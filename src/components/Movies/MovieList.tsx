import React from 'react';
import MoviesList from '../../interfaces';
import StarRating from '../StarRating/StarRating';

interface MovieListProps {
    movies: MoviesList[];
    onClick: (movie: Object) => void
}

const MovieList: React.FC<MovieListProps> = ({ movies, onClick }: MovieListProps) => {

    return (
        <>
            <div className="list-group" id="list-tab" role="tablist">
                {movies && movies.map((movie, index) => (
                    <a key={`${movie.created}-${index}`} onClick={() => onClick(movie)} className="list-group-item list-group-item-action" data-toggle="list" role="tab" aria-controls="">
                        <span>{movie.title}</span>
                        <StarRating rating={index+2} style={{marginLeft:"auto", paddingRight:"62px"}} />
                        <span>{movie.release_date}</span>
                    </a>
                ))}
            </div>
        </>
    );
}

export default MovieList;
