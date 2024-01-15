import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
const NavbarButton = ({ Name, refName }) => {
  if (refName == "login") {
    return (
      <Link to="/Login">
        <button className="button" id={Name}>
          {Name}
        </button>
      </Link>
    );
  } else if (refName == "signup") {
    return (
      <Link to="/SignUp">
        <button className="button" id={Name}>
          {Name}
        </button>
      </Link>
    );
  } else {
    return (
      <ScrollLink to={refName} spy={true} smooth={true} offset={0}>
        <button className="button" id={Name}>
          {Name}
        </button>
      </ScrollLink>
    );
  }
};
export default NavbarButton;
