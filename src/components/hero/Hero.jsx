import { useEffect, useRef } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import Typed from "typed.js";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 10,
  },
  animate: {
    x: "-90%",
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function Hero() {
  const el = useRef();

  useEffect(() => {
    var typed = new Typed(el.current, {
      strings: [
        "Frontend Developer...",
        "Web Developer...",
        "Software Developer...",
        "Mobile Developer...",
      ],
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero">
      <div className="wrapper">
        {/* <div className="imageContainer">
          <img src="/myImage.png" alt="Jacob" />
        </div> */}

        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            JACOB OLUWASESAN ADEBAYO
          </motion.h2>

          <motion.h1 variants={textVariants}>
            <span ref={el}> </span>
          </motion.h1>

          <motion.div className="about" variants={textVariants}>
            A talented and experienced frontend & mobile(IOS & Android)
            developer with excellent skills in developing ideas into a
            functional, responsive, scalable and optimum performance products.
            <br /> I am well-versed in modern technologies like JavaScript,
            TypeScript, React, React Native, TailwindCss, SCSS, for building
            functional and accessible products with great user experience and
            seamless navigation.
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Developer
      </motion.div>
    </div>
  );
}

export default Hero;
