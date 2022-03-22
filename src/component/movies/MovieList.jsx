import React, {useEffect} from 'react'
import { FormControl, InputGroup } from "react-bootstrap";
import { Movie } from "./Movie";
import axios from 'axios';

const apiurl = `${process.env.REACT_APP_API_KEY}`;

export const MovieList = () => {
  const [movies, setMovies] = React.useState([]);
    const [search, setSearch] = React.useState("batman");

  //fetch data from api
  const fetchData = async () => {
    try {
        const result = await axios.get(`${apiurl}${search}`);
        setMovies(result.data.Search);
    } catch (error) {
      console.log(error);
    }
    };


    useEffect(() => {
        fetchData();
    }, []);

    console.log(movies);
    
  return (
    <>
      <InputGroup className='mt-5 container'>
        <FormControl
          placeholder='Search for a movie'
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
          onBlur={() => {
            alert("Sorry, search function not working🤦‍♂️😢. Please try again.");
          }}
        />
      </InputGroup>
      <Movie movies={movies} />
    </>
  );
}
