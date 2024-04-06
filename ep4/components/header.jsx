import logo from "../images/logo.jpg"
const Header = ()=> (
    <>
    <header>
        <div className="container" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div><img className="company-logo" src={logo}/></div>
        <div>
            <ul style={{display: "flex", listStyle: "none   "}}>
                <li><FontAwesomeIcon icon="fa-solid fa-house" />Home</li>
                <li>About</li>
                <li>contact</li>
            </ul>
        </div>
        </div>
    </header>
    </>
)

export default Header