import React from 'react'
import { Card } from 'react-bootstrap';
import { Loader } from '../loader/Loader';
import './movie.css'
import Slider from "react-slick";



export const Movie = ({movies}) => {

    // filter and map movies by 
    const filteredMovies = movies.map(movie => {
        return (
          <div className='cards d-flex align-items-center'>
            <Card key={movie.imdbID}>
              <Card.Body>
                <Card.Text>Title: {movie.Title}</Card.Text>
                <Card.Text>Year: {movie.Year}</Card.Text>
                <Card.Text>Type: {movie.Type}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
    })                                          

    // settings for slider
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
      };

      if (movies.length === 0) {
        return <Loader />;
      }
  return (
    <div className='container-fluid mt-3'>
      <div className='movies-container'>
        <br />
        <span className='text-muted ms-5 fw-bold'>Movies</span>
        <Slider {...settings}>{filteredMovies}</Slider>
      </div>
    </div>
  );
}
