import logo from "../images/logo.jpg";
import homeicon from "../images/home.svg";
import { Login, Logout } from "./buttons.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <header className="p-1">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img className="company-logo" src={logo} />
          </div>
          <div>
            <ul className="flex navigationheader">
              <li>
                <div className="flex"><Link to="/">
                  <img width="20px" alt=" " src={homeicon} /> <p>Home</p>
                  </Link>
                </div>
              </li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">contact</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li>
                {isLogin ? (
                  <Logout loginData={setIsLogin} />
                ) : (
                  <Login loginData={setIsLogin} />
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
