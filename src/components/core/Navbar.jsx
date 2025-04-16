import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "./CartContext";

export default function Navbar() {
    const {cart} = useCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="shop-logo">
                    <NavLink to="/" activeClassName="active">
                        <FontAwesomeIcon icon="fa-solid fa-plus-minus" className="shop-logo-icon"/>
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                        <div className="shop-name">
                            <p>普通</p>
                            <p>商品</p>
                        </div></NavLink>
                </div>
                <div className="nav-links">
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/shop" activeClassName="active">Shop</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>

                </div>
                <div className="nav-links">
                    <NavLink to="/cart" activeClassName="active">
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}