import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";
import {
  FaArrowRightLong,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import {
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoTailwindCss,
} from "react-icons/bi";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on delivering quality
          <br /> and excellent job always.
        </p>
        <hr />
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <div className="box">
          <h2>Skills</h2>
          <ul>
            <li>
              <FaHtml5 /> HTML5
            </li>
            <li>
              <FaCss3Alt /> CSS3
            </li>
            <li>
              <FaSass /> SCSS
            </li>
            <li>
              <BiLogoTailwindCss /> TailwindCSS
            </li>
            <li>
              <BiLogoJavascript /> JavaScript
            </li>
            <li>
              <FaReact /> React.js
            </li>
            <li>
              <BiLogoRedux /> Redux
            </li>
            <li>
              <FaGitAlt /> Git & Github
            </li>
            <li>
              <FaFigma /> Figma
            </li>
          </ul>
        </div>

        <div className="box">
          <h2>Services</h2>
          <div>
            <p>
              <FaArrowRightLong /> Software development.
            </p>
            <p>
              <FaArrowRightLong /> Responsive and Scalable UI.
            </p>
            <p>
              <FaArrowRightLong /> Optimized and Functional product.
            </p>
            <p>
              <FaArrowRightLong /> Building of reusable components.
            </p>
            <p>
              <FaArrowRightLong /> Problem solving and Debugging skills.
            </p>
            <p>
              <FaArrowRightLong /> Efficient support and availability.
            </p>
          </div>
        </div>
      </motion.div>

      <hr />

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            {`You've got a`}
            <motion.b whileHover={{ color: "orange" }}> Unique Idea </motion.b>
            or
            <motion.b whileHover={{ color: "orange" }}> Design?</motion.b>
          </h1>
          <a href="#Contact">{`Let's discuss...`}</a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
