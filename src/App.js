import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import CartPage from './pages/shop/Cart';
import PcShop from './pages/shop/PcShop';
import ConsoleShop from './pages/shop/ConsoleShop';
import MobileShop from './pages/shop/MobileShop';
import TvDisplaysShop from './pages/shop/TvDisplaysShop';
import AudioShop from './pages/shop/AudioShop';
import Products from './pages/shop/Products';
import './App.css';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Homepage />}
            />

            <Route
                path="shop/pc"
                element={<PcShop />}
            />

            <Route
                path="shop/console"
                element={<ConsoleShop />}
            />

            <Route
                path="shop/mobile"
                element={<MobileShop />}
            />

            <Route
                path="shop/tv-displays"
                element={<TvDisplaysShop />}
            />

            <Route
                path="shop/audio"
                element={<AudioShop />}
            />

            <Route
                path="shop/accessories/all"
                element={<Navbar />}
            />

            <Route
                path="shop/products/:idproduct"
                element={<Products />}
            />

            <Route
                path="shop/products/:idproduct/:menuchoice"
                element={<Products />}
            />

            <Route
                path="/support"
                element={<Navbar />}
            />

            <Route
                path="/store"
                element={<Navbar />}
            />

            <Route
                path="/shop/cart"
                element={<CartPage />}
            />
        </Routes>
    );
}

export default App;
