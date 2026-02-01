import { Link } from "react-router-dom";
import catIcon from "../assets/cat.jpg";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <img src={catIcon} className="header-icon" />
        <span>My Profile</span>
      </Link>
    </header>
  );
}

export default Header;
