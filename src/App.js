import './App.css';
import { Header } from './component/header/Header';
import { MovieList } from './component/movies/MovieList';
import { Container } from 'react-bootstrap';
import { SearchBar } from './component/SearchBar';

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <MovieList />
      </Container>
    </>
  );
}

export default App;
