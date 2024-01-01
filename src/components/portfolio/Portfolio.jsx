/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "The MarketPlace",
    img: "./dmp.png",
    desc: "An online e-commerce store developed for the purchase of wears incorporating a seamless payment gateway, user account management, authentication, and an intuitive cart system.",
    stacks: ["React", "Redux", "TailwindCss", "Firebase", "Stripe API"],
    url: "https://dmarketplace.netlify.app/",
  },
  {
    id: 2,
    title: "My MovieBox",
    img: "./moviebox.png",
    desc: "A website built for movie lover's to checkout the latest movie trends, see reviews and have a sneak peek of the trailer before hitting the cinema.",
    stacks: ["React", "TailwindCss", "TMDB API"],
    url: "https://mymoviebox-jacceycode.netlify.app/",
  },
  {
    id: 3,
    title: "The Wild-Oasis Management App",
    img: "./aosis.png",
    desc: "An app developed for a resort to strategically prioritize customer management and reservations. With a glance on the app's dashboard, every customer's details and preferences can be gotten at the click of a finger.",
    stacks: ["React", "Styled Components", "Recharts", "Supabase"],
    url: "https://the-wild-oasis-vacation-house.netlify.app/",
  },
  {
    id: 4,
    title: "Fast Pizza",
    img: "./pizza.png",
    desc: "A website built for pizza lover's, providing a seamless ordering, delivery management and payment experience from the comfort of their homes. This helps to increase the pizza order rate per hour and improve the sales number at least by 40% for the company.",
    stacks: ["React", "Redux", "TailwindCss"],
    url: "https://orderfastpizza.netlify.app/",
  },
  {
    id: 5,
    title: "HelpMeOut",
    img: "./helpmeout.png",
    desc: "A landing page developed for an online screen recorder chrome extension, which is used to create awareness and educate user's about the extension and also increase the number of users",
    stacks: ["React", "TailwindCss", "React Icons"],
    url: "https://jacceycode-helpmeout.netlify.app/",
  },
  {
    id: 6,
    title: "Inspirational Quote Generator",
    img: "./randomQuotes.png",
    desc: "An app built to receive inspirational quotes and allow the sharing of same on social media.",
    stacks: ["HTML", "CSS", "JAVASCRIPT", "API Integration"],
    url: "https://jacceycode.github.io/Quote-Generator-App/",
  },
  // {
  //   id: 7,
  //   title: "Image Gallery",
  //   img: "./drag&drop.png",
  //   desc: "You want to experience a gallery that gives you access to order your pictures like you always wanted or immediately search out your party or hangout pictures? Give this a try today.",
  //   stacks: ["React", "TailwindCss", "Drag&Drop", "Supabase"],
  //   url: "https://myimageagallery.netlify.app/",
  // },
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
