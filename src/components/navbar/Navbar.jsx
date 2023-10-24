import { IconContext } from "react-icons";
import "./navbar.scss";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Jacob Adebayo
        </motion.span>

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
