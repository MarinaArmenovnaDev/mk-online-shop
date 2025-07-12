import './App.css'
import {Header} from "./Header.tsx";
import {BestSellers} from "./BestSellers.tsx";
import {Route, Routes} from "react-router";
import {Product} from "./Product.tsx";
import {useState} from "react";

function App() {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(prev => prev + 1);
    };

    return (
        <div className={"appContainer"}>
            <Header  cartCount={cartCount}/>
            <Routes>
                <Route path={"/"} element={<BestSellers/>}/>
                <Route path="/product/:productId" element={<Product addToCart={addToCart}/>} />
            </Routes>

        </div>
    )
}

export default App
