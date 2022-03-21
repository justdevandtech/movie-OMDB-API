import React from 'react'
import {Form } from "react-bootstrap";

export const SearchBar = () => {
    const [search, setSearch] = React.useState('');

    
    React.useEffect(() => {
        localStorage.setItem('search', search);
    }, [search]);
  return (
    <div className='container mt-4'>
      <Form>
        <Form.Group className='' controlId='exampleForm.ControlInput1'>
          <Form.Label>Search</Form.Label>
          <Form.Control value={search} type='text' placeholder='search for a movie' onChange={e => setSearch(e.target.value)}/>
        </Form.Group>
      </Form>
    </div>
  );
}
