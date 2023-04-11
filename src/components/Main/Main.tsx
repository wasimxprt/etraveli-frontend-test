import React, { useEffect } from 'react';
import axios from "axios";
import MovieList from '../Movies/MovieList';
import MovieDetails from '../Movies/MovieDetails';

import Spinner from '../Spinner/Spinner';
import MoviesList from '../../interfaces';
import InputText from '../Shared/InputText';

const movieEndpoint = "https://swapi.dev/api/films/?format=json";

interface IUser {
    title: string,
    opening_crawl: string,
    director: string,
}

export default function Main(props: any) {

    const [originalArray, setOriginalArray] = React.useState<MoviesList[]>([]);
    const [movies, setMovies] = React.useState<MoviesList[]>([]);
    const [selectedMovie, setSelectedMovie] = React.useState<IUser | undefined>();
    const [searchValue, setSearchValue] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");


    React.useEffect(() => {
        setLoading(true);
        setHasError(false);


        axios.get(movieEndpoint).then((response) => {
            setMovies(response.data.results);
            setOriginalArray(response.data.results);
            setLoading(false);

        }).catch((error) => {
            setHasError(true);
            setLoading(false);
            setErrorMsg(error.code + " : " + error.message)
        });
    }, []);

    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {

        const searchString: string = e.currentTarget.value;

        let filteredMovies = originalArray.filter((movie) => {

            return (movie.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
        });

        setSearchValue(searchString);
        setMovies(filteredMovies);
    }


    const sortBy = (arg0: string) => {

    }

    return (
        <>
            {loading ? <Spinner /> : hasError ? <div className="alert alert-danger" role="alert">{`Something went wrong!!.... ${errorMsg}`}</div> :
                <div className='container-fluid'>
                    <div className="row">
                        <form className="row g-3 mb-5">
                            <div className="col-auto">

                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sort by...
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" onClick={() => sortBy('year')}>Year</a>
                                        <a className="dropdown-item" onClick={() => sortBy('episode')}>Episode</a>
                                    </div>
                                </div>
                                {/* <button type="button" onClick={() => console.log("sort")} className="btn btn-primary mb-3">Sort by...</button> */}
                            </div>
                            <div className="col">
                                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                                <InputText id="search-input" searchValue={searchValue} onChangeHandler={onChangeHandler} placeholder={"Type to search..."} />                                
                            </div>
                        </form>
                    </div>

                    <div className="row">
                        <div className="col">
                            <MovieList movies={movies} onClick={(movie: any) => { setSelectedMovie(movie) }} />
                        </div>
                        <div className="col">
                            {selectedMovie ? <MovieDetails title={selectedMovie?.title} details={selectedMovie?.opening_crawl} director={selectedMovie?.director} /> : <div className="alert alert-info" role="alert">
                                Please select a movie from left panel...
                            </div>}
                        </div>
                    </div>
                </div>}
        </>

    )
}
