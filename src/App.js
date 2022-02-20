import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Favorite from './components/Favorite/Favorite'
import ErrorPage from './components/ErrorPage/ErrorPage'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
       <NavBar />
       <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
       </Container>
    </main>
 );
};

export default App;
