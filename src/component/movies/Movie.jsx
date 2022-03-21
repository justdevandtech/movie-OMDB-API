import React from 'react'
import { Card } from 'react-bootstrap';
import { Loader } from '../loader/Loader';
import './movie.css'



export const Movie = ({movies}) => {

    // filter and map movies by 
    const filteredMovies = movies.filter(movie => {
        if (localStorage.getItem('search')) {
            return movie.Title.toLowerCase().includes(
              localStorage.getItem("search").toLowerCase()
            );
        } else {
            return movie
        }
    }).map(movie => {
        return (
             <Card
            style={{
              width: "100%",
              height: "150px",
              backgroundColor: "#000000",
              color: "#FFFFFF",
            }}
            key={movie.imdbID}
          >
            <Card.Body>
              <Card.Text>{movie.Title}</Card.Text>
            </Card.Body>
          </Card>
        )
    });

    // run filtermovies if localstorage get updated
   React.useEffect(() => {
     function checkUserData() {
       const item = localStorage.getItem("userData");

       if (item) {
         filteredMovies(item);
       }
     }

     window.addEventListener("storage", checkUserData);

     return () => {
       window.removeEventListener("storage", checkUserData);
     };
   }, []);

   

  return (
    <div className='container mt-3'>
      <div className='movies-container'>
        <br />
        <span className='text-muted ms-5 fw-bold'>Movies</span>
        <div className='movie-card pt-0 mt-0'>
          {movies.length > 0 ? filteredMovies : <Loader />}
        </div>
      </div>
    </div>
  );
}
