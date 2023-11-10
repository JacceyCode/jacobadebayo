/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "My MovieBox",
    img: "./moviebox.png",
    desc: "Checkout the latest movie, trends and upcomings in the movie world. Explore our large movie catalogue database for your favourite movie, check the reviews and have a sneak peek of the trailer before visiting your favourite cinema.",
    stacks: ["React", "TailwindCss", "API Integration"],
    url: "https://mymoviebox-jacceycode.netlify.app/",
  },
  {
    id: 2,
    title: "The Wild-Oasis Management App",
    img: "./aosis.png",
    desc: "Every customer is a priority. With this app, we know when and how to welcome our costumer's, make them have a wonderful stay, wish them goodbye in a way they will want to visit again. With a glance on the dashboard, we have every customer's details and preferences at the tip of our fingers.",
    stacks: ["React", "Styled Components", "Recharts", "Supabase"],
    url: "https://the-wild-oasis-vacation-house.netlify.app/",
  },
  {
    id: 3,
    title: "Image Gallery",
    img: "./drag&drop.png",
    desc: "You want to experience a gallery that gives you access to order your pictures like you always wanted or immediately search out your party or hangout pictures? Give this a try today.",
    stacks: ["React", "TailwindCss", "Drag&Drop", "Supabase"],
    url: "https://myimageagallery.netlify.app/",
  },
  {
    id: 4,
    title: "Inspirational Quote Generator",
    img: "./randomQuotes.png",
    desc: "An app for generating inspirational quotes and sharing on social media profile.",
    stacks: ["HTML", "CSS", "JAVASCRIPT", "API Integration"],
    url: "https://jacceycode.github.io/Quote-Generator-App/",
  },
  {
    id: 5,
    title: "HelpMeOut",
    img: "./helpmeout.png",
    desc: "A website landing page for an online screen recorder chrome extension",
    stacks: ["React", "TailwindCss", "React Icons"],
    url: "https://jacceycode-helpmeout.netlify.app/",
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

          <div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="stack">
              <h4>Stacks used:</h4>
              <span>{item.stacks?.join(", ")}</span>
            </div>
            <a href={item.url} target="blank">
              Check App
            </a>
          </div>
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
    <div id="Portfolio" className="portfolio" ref={ref}>
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
