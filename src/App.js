import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Details from './pages/Details';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />

    </Routes>
    </div>
  );
}

export default App;
