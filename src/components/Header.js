import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
/* import myImage from "../utils/assets/rh1.png"; */

const Header = () => {

    const [btnName, setbtnName] = useState("Login");

    //let btnNameJS = "Login";

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Res-logo" /> 
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" 
                    onClick={() => {
                       btnName === "Login" 
                       ? setbtnName("Logout") 
                       : setbtnName("Login");
                    }}
                >{btnName}
                </button>
                </ul>
            </div>    
        </div>
    );
};

export default Header;