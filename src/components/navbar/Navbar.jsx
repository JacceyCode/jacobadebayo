import "./navbar.scss";
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
            JOA
          </motion.span>

          <a href="Jacob Adebayo Resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
