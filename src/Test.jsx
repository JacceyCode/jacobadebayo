import { motion } from "framer-motion";
import { useState } from "react";

function Test() {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: "spring", stiffness: 5000 },
    },
    hidden: { opacity: 0.4, scale: 0.2, x: -200 },
  };

  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}
        // initial="hidden"
        // animate="visible"
        // initial={{ opacity: 0.4, scale: 0.2 }}
        // whileInView={{ opacity: 1, scale: 1 }}
        // drag
        animate={open ? "visible" : "hidden"}
        // transition={{ duration: 1.5 }}
      ></motion.div>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Test;
