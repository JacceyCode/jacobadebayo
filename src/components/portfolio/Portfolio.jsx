/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18758952/pexels-photo-18758952/free-photo-of-a-woman-in-a-leather-jacket-is-walking-down-an-escalator.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima doloribus odit id ipsum veritatis, ab excepturi nesciunt optio iusto numquam modi, amet praesentium tempore voluptatibus fugiat rerum ratione enim quisquam.",
  },
  {
    id: 2,
    title: "React Play",
    img: "https://images.pexels.com/photos/18722962/pexels-photo-18722962/free-photo-of-a-camel-pulling-a-cart-with-a-red-canopy.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima doloribus odit id ipsum veritatis, ab excepturi nesciunt optio iusto numquam modi, amet praesentium tempore voluptatibus fugiat rerum ratione enim quisquam.",
  },
  {
    id: 3,
    title: "React Js",
    img: "https://images.pexels.com/photos/5520957/pexels-photo-5520957.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima doloribus odit id ipsum veritatis, ab excepturi nesciunt optio iusto numquam modi, amet praesentium tempore voluptatibus fugiat rerum ratione enim quisquam.",
  },
  {
    id: 4,
    title: "React Redux",
    img: "https://images.pexels.com/photos/18661408/pexels-photo-18661408/free-photo-of-man-riding-a-bike-by-the-shore.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima doloribus odit id ipsum veritatis, ab excepturi nesciunt optio iusto numquam modi, amet praesentium tempore voluptatibus fugiat rerum ratione enim quisquam.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="image" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
