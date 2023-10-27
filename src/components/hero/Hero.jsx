import "./hero.scss";
import { motion } from "framer-motion";

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
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="imageContainer">
          <img src="/myImage.png" alt="Jacob" />
        </div>

        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            JACOB OLUWASESAN ADEBAYO
          </motion.h2>

          <motion.h1 variants={textVariants}>Frontend Developer...</motion.h1>

          <motion.div className="about" variants={textVariants}>
            A creative and enthusiastic web developer with excellent skills in
            developing ideas into a functional, responsive and design-detailed
            websites. <br /> With genuine passion and dedication to my craft, I
            deliver exceptional results.
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
