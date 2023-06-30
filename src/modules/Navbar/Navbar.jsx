import { Link } from "react-router-dom";
import NavbarSvgSelector from "./NavbarSvgSelector";
import css from './navbar.module.scss'

const Navbar = () => {
    return (
      <div className={`${css.wrapper} ${css.container}`}>
        <Link to={'/'}>
          <NavbarSvgSelector id="logo" />
        </Link>

        <div className={css.wrapperButton}>
          <Link to={'/users'}>
            <button type="button" className={css.button}>
              Users
            </button>
          </Link>

          <button type="button" className={css.button}>
            Sign up
          </button>
        </div>
      </div>
    );
}

export default Navbar;