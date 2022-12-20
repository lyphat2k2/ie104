import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import CartPage from './pages/shop/Cart';
import PcShop from './pages/shop/PcShop';
import ConsoleShop from './pages/shop/ConsoleShop';
import MobileShop from './pages/shop/MobileShop';
import TvDisplaysShop from './pages/shop/TvDisplaysShop';
import AudioShop from './pages/shop/AudioShop';
import AccessoriesShop from './pages/shop/AccessoriesShop';
import Products from './pages/shop/Products';
import ErrorPage from './pages/ErrorPage';
import './App.css';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
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
                element={<AccessoriesShop />}
            />

            <Route
                path="shop/products/:idproduct/:menuchoice"
                element={<Products />}
            />

            <Route
                path="/support"
                element={<ErrorPage />}
            />

            <Route
                path="/store"
                element={<Store />}
            />

            <Route
                path="/shop/cart"
                element={<CartPage />}
            />
        </Routes>
    );
}

export default App;
