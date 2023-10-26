/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: " My MovieBox",
    img: "./moviebox.png",
    desc: "A product for watching trailer's and checking reviews of popular movies with a search functionality to search for any movie of choice. The TMDB API was used to fetch the movie details using the CRUD method for RESTful API.",
    url: "https://mymoviebox-jacceycode.netlify.app/",
  },
  {
    id: 2,
    title: "The Wild-Oasis Management App",
    img: "./aosis.png",
    desc: "A desktop customer booking and management app for a resort house to track customers logdement, arrivals & departures.",
    url: "https://the-wild-oasis-vacation-house.netlify.app/",
  },
  {
    id: 3,
    title: "Image Gallery with Drag&Drop",
    img: "./drag&drop.png",
    desc: "An image gallery with the drag&drop feature, user unthentication and search functionality which is accessible to unthenticated user's only.",
    url: "https://myimageagallery.netlify.app/",
  },
  {
    id: 4,
    title: "React Redux",
    img: "https://images.pexels.com/photos/18661408/pexels-photo-18661408/free-photo-of-man-riding-a-bike-by-the-shore.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima doloribus odit id ipsum veritatis, ab excepturi nesciunt optio iusto numquam modi, amet praesentium tempore voluptatibus fugiat rerum ratione enim quisquam.",
    url: "https://mymoviebox-jacceycode.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [300, -300]);

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
            <a href={item.url} target="blank">
              Check App
            </a>
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
