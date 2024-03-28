import gunlogo from "./src/images/gunlogo.png";
import user from "./src/images/user.png";


const Header = ()=> (
    <div className="header">
       <img src={gunlogo} alt="" srcset="" />
       <input type="search" placeholder="Search here..." />
       <img src={user} alt="" />
    </div>
)

export default Header