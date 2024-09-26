import { Link, NavLink } from "react-router-dom";

import './Header.scss';


export const Header = () => {

    return (
        <>
            <header className="header">
                <div className="container">
                    <Link to="/" className="header__logo">StartUp</Link>
                    <nav className="header__nav">
                        <NavLink to="/" className="header__link">Home</NavLink>
                        <NavLink to="/favorite" className="header__link">Favorite</NavLink>
                    </nav>
                    <div className="header__buttons">
                        <button className="sign-in">Sign In</button>
                        <button className="sign-up">Sign Up</button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
