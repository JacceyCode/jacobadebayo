import { IconContext } from "react-icons";
import "./navbar.scss";
import {
  FaLinkedin,
  // FaSquareGithub,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      <div className="wrapper">
        <div className="logo">
          <motion.span
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Jacob Adebayo
          </motion.span>

          <a href="Jacob Oluwasesan Adebayo Resume.pdf" download>
            Download Resume
          </a>
        </div>

        <div className="social">
          <a href="https://twitter.com/code_sesan" target="blank">
            <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
              <FaSquareXTwitter />
            </IconContext.Provider>
          </a>

          <a
            href="https://www.linkedin.com/in/jacob-oluwasesan-adebayo/"
            target="blank"
          >
            <IconContext.Provider value={{ color: "#0077B5", size: "2rem" }}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>

          <a href="http://wa.me/2348134557536" target="blank">
            <IconContext.Provider value={{ color: "#25D366", size: "2rem" }}>
              <FaSquareWhatsapp />
            </IconContext.Provider>
          </a>

          {/* <a href="https://github.com/JacceyCode" target="blank">
            <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
              <FaSquareGithub />
            </IconContext.Provider>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
