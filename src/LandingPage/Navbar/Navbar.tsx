
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Plan Book</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Liên hệ</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
