import logo from './assets/img/logo.svg'
import {Link} from "react-router";
import cart from "./assets/img/cart.svg";

type Props = {
    cartCount: number;
}

export const Header = ({cartCount}: Props) => {
    return (
        <div className="header">
            <Link to={"/"}>
                <img src={logo} alt="arrowBack"/>
            </Link>
            <div className={"cart-container"}>
                <img src={cart} alt="cart" className={"cart"}/>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>

        </div>
    )
}
