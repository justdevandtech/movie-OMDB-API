import React, {useEffect} from 'react'
import { Movie } from "./Movie";
import axios from 'axios';

const apiurl = process.env.REACT_APP_API_KEY;

export const MovieList = () => {
  const [movies, setMovies] = React.useState([]);

  //fetch data from api
  const fetchData = async () => {
    try {
        const result = await axios.get(apiurl);
        setMovies(result.data.Episodes);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(movies);
  return (
    <>
      <Movie movies={movies}/>
    </>
  );
}
