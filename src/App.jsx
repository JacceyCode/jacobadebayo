import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
// import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import ScrollToTopBtn from "./components/scrolltotop/ScrollToTopBtn";
import Services from "./components/services/Services";

function App() {
  return (
    <main>
      <Cursor />

      <ScrollToTop />

      <ScrollToTopBtn />

      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}

      <section id="Services">
        <Services />
      </section>

      {/* <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}

      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
