// import { Outlet } from "react-router-dom";
import NavbarSvgSelector from "./NavbarSvgSelector";

const Navbar = () => {
    return (
        <div>
            <NavbarSvgSelector id="logo"/>
        <button type="button">Users</button>
        <button type="button">Sign up</button>
        {/* <Outlet /> */}
      </div>
    );
}

export default Navbar;