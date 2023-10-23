import { IconContext } from "react-icons";
import "./navbar.scss";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Jacob Adebayo</span>
        <div className="social">
          <a href="#">
            <IconContext.Provider value={{ color: "#3b5998" }}>
              <FaSquareFacebook />
            </IconContext.Provider>
          </a>
          <a href="#">
            <IconContext.Provider value={{ color: "#0072b1" }}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>
          <a href="#">
            <IconContext.Provider value={{ color: "#ff0000" }}>
              <FaSquareYoutube />
            </IconContext.Provider>
          </a>
          <a href="#">
            <IconContext.Provider value={{ color: "#fff" }}>
              <FaSquareGithub />
            </IconContext.Provider>
          </a>
          <a href="#">
            <IconContext.Provider value={{ color: "#26a7de" }}>
              <FaSquareXTwitter />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
