import logo from "../images/logo.jpg";
import homeicon from "../images/home.svg";


const Header = () => (
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
              <div className="flex">
                <img width="20px" alt=" " src={homeicon} /> <p>Home</p>
              </div>
            </li>
            <li>About</li>
            <li>contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </header>
  </>
);

export default Header;
