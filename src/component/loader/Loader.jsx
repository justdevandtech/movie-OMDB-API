import React from 'react'
import { Spinner } from 'react-bootstrap';

export const Loader = () => {
  return (
    <div className='d-flex mx-auto'>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
}
