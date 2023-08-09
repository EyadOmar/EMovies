import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Details from './pages/details/Details';
import Catalog from './pages/Catalog';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/:category/:id" Component={Details} />
        <Route path="/:category/search/:searchTerm" Component={Catalog} />
        <Route path="/:category" Component={Catalog} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
