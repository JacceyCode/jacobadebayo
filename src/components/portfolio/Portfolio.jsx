/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "The MarketPlace",
    img: "./dmp.png",
    desc: "An online e-commerce store developed for the purchase of wears with cart functionality, user authentication and stripe payment checkout.",
    stacks: ["React", "Redux", "TailwindCss", "Firebase", "Stripe API"],
    url: "https://dmarketplace.netlify.app/",
  },
  {
    id: 2,
    title: "My MovieBox",
    img: "./moviebox.png",
    desc: "A website built for movie lover's to checkout the latest movie trends. Explore our large movie catalogue for your favourite movie, see reviews and have a sneak peek of the trailer before visiting your favourite cinema.",
    stacks: ["React", "TailwindCss", "TMDB API"],
    url: "https://mymoviebox-jacceycode.netlify.app/",
  },
  {
    id: 3,
    title: "The Wild-Oasis Management App",
    img: "./aosis.png",
    desc: "An app developed for a resort to manage customer's requests. With a glance on the app's dashboard, we have every customer's details and preferences at the tip of our fingers.",
    stacks: ["React", "Styled Components", "Recharts", "Supabase"],
    url: "https://the-wild-oasis-vacation-house.netlify.app/",
  },
  {
    id: 4,
    title: "Fast Pizza",
    img: "./pizza.png",
    desc: "A website built for pizza lover's to make order, manage delivery and make payment from the comfort of their home. This helps to increase the order per hour and improve the sales number at least by 40%.",
    stacks: ["React", "Redux", "TailwindCss"],
    url: "https://orderfastpizza.netlify.app/",
  },
  {
    id: 5,
    title: "HelpMeOut",
    img: "./helpmeout.png",
    desc: "A landing page developed for an online screen recorder chrome extension",
    stacks: ["React", "TailwindCss", "React Icons"],
    url: "https://jacceycode-helpmeout.netlify.app/",
  },
  {
    id: 6,
    title: "Inspirational Quote Generator",
    img: "./randomQuotes.png",
    desc: "An app built to receive inspirational quotes and sharing it on social media.",
    stacks: ["HTML", "CSS", "JAVASCRIPT", "API Integration"],
    url: "https://jacceycode.github.io/Quote-Generator-App/",
  },
  {
    id: 7,
    title: "Image Gallery",
    img: "./drag&drop.png",
    desc: "You want to experience a gallery that gives you access to order your pictures like you always wanted or immediately search out your party or hangout pictures? Give this a try today.",
    stacks: ["React", "TailwindCss", "Drag&Drop", "Supabase"],
    url: "https://myimageagallery.netlify.app/",
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
            <img src={item.img} alt="image" loading="lazy" />
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
