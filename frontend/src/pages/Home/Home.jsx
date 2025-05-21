import React from "react";
import {
  FaVolumeUp,
  FaShareAlt,
  FaBookmark,
  FaLanguage,
  FaPrint,
  FaSearch,
} from "react-icons/fa";
import "./Home.scss";
import { Link } from "react-router-dom";

const publicationsData = [
  {
    id: 1,
    title: "Khaleej Times",
    image:
      "https://images.pexels.com/photos/4245018/pexels-photo-4245018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "2.75",
    sale: true,
  },
  {
    id: 2,
    title: "City Times",
    image:
      "https://images.pexels.com/photos/5711957/pexels-photo-5711957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: null,
    sale: false,
  },
  {
    id: 3,
    title: "WKND",
    image:
      "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: null,
    sale: false,
  },
  {
    id: 4,
    title: "Business & Technology Review",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: null,
    sale: false,
  },
  {
    id: 5,
    title: "Young Times",
    image:
      "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: null,
    sale: false,
  },
  {
    id: 6,
    title: "KT Luxe",
    image:
      "https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: null,
    sale: false,
  },
  {
    id: 7,
    title: "Supplements",
    image:
      "https://images.pexels.com/photos/5091131/pexels-photo-5091131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: null,
    sale: false,
  },
];

const features = [
  {
    id: 1,
    icon: <FaVolumeUp />,
    title: "Listen",
    description:
      "On-demand narration is a great feature for those who want to listen to their newspaper while multitasking or who are visually impaired.",
  },
  {
    id: 2,
    icon: <FaShareAlt />,
    title: "Share",
    description:
      "Look an article? Share it! You can get a direct link to an article, post it on Twitter, or share it on Facebook after reading.",
  },
  {
    id: 3,
    icon: <FaBookmark />,
    title: "Bookmarks",
    description:
      "Save articles for future reference. Using our tool you'll be able to create an easily accessible list of stories as you read.",
  },
  {
    id: 4,
    icon: <FaLanguage />,
    title: "Translate",
    description:
      "Translate into more than 25 languages when you are in Article View mode.",
  },
  {
    id: 5,
    icon: <FaPrint />,
    title: "Print",
    description: "Print articles and crosswords anytime you need.",
  },
  {
    id: 6,
    icon: <FaSearch />,
    title: "Search",
    description:
      "Search for news, keywords, articles and past editions of our newspapers.",
  },
];

function App() {
  return (
    <div className="home">
      <header className="header">
        <div className="container">
          <div className="header__content">
            <a href="/" className="header__logo">
              <span className="header__logo-text"> Gabfire ePaper</span>
            </a>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a
                    href="/"
                    className="header__nav-link header__nav-link--active"
                  >
                    Home
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#publications" className="header__nav-link">
                    Publications
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#reader-features" className="header__nav-link">
                    Reader Features
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero__content">
              <div className="hero__text">
                <h1 className="hero__title">Welcome to the Gabfire E-Paper</h1>
                <p className="hero__description">
                  Discover a modern news reading experience with our E-Paper, a
                  digital replica of our printed publications where every
                  headline pops and every story comes to life at the touch of
                  your fingertips! Read your favorite newspaper and magazines on
                  your preferred electronic device, anywhere, anytime.
                </p>
                <div className="hero__buttons">
                  <a href="#publications" className="btn btn--primary hero__btn">
                    Read Publications
                  </a>
                  <a
                    href="#learn-more"
                    className="btn btn--secondary hero__btn"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="hero__image">
                <img
                  src="https://r.prcdn.co/res/en-gb/g25833/t478915881/2/images/hero-mockup-update.png"
                  alt="Khaleej Times E-Paper on multiple devices"
                  className="hero__img"
                />
              </div>
            </div>
          </div>
          <div className="hero__overlay"></div>
        </section>

        <section className="publications" id="publications">
          <div className="container">
            <h2 className="publications__title">Gabfire E-Paper Publications</h2>
            <p className="publications__description">
              Click on any of our publications below to access current and past
              editions of Khaleej Times, City Times, WKND, BTR, Young Times, KT
              Luxe and our special Supplements. Read them all on your browser,
              phone and wherever you want on your computer, tablet or
              smartphone.
            </p>

            <div className="publications__grid">
              {publicationsData.map((publication) => (
                <Link to={"/viewer/7282579"} key={publication.id} className="publication-card">
                  <div className="publication-card__image-container">
                    <img
                      src={publication.image}
                      alt={publication.title}
                      className="publication-card__image"
                    />
                    {publication.sale && (
                      <div className="publication-card__sale">
                        <span className="publication-card__sale-text">
                          SALE
                        </span>
                        <span className="publication-card__sale-price">
                          ${publication.price}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="publication-card__title">
                    {publication.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="reader-features" id="reader-features">
          <div className="container">
            <h2 className="reader-features__title">Reader Features</h2>
            <p className="reader-features__description">
              Our E-Paper Reader is super fast, easy to use and gets you right
              to the news you want. Anytime, anywhere, any device: seamless
              experience across all your devices!
            </p>

            <div className="reader-features__grid">
              {features.map((feature) => (
                <div key={feature.id} className="feature-card">
                  <div className="feature-card__icon">{feature.icon}</div>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__main">
              <div className="footer__logo">
                <span className="footer__logo-text">Gabfire ePaper</span>
              </div>
              <p className="footer__tagline">
                Your window to the world and beyond
              </p>
            </div>

            <div className="footer__links">
              <div className="footer__column">
                <h4 className="footer__heading">Quick Links</h4>
                <ul className="footer__list">
                  <li>
                    <a href="#" className="footer__link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      Advertise
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__column">
                <h4 className="footer__heading">Legal</h4>
                <ul className="footer__list">
                  <li>
                    <a href="#" className="footer__link">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer__bottom">
              <p className="footer__copyright">©2025 Gabfire ePaper.</p>
              <p className="footer__copyright">
                Product of Gabfire (OPC) Pvt.Ltd
              </p>
              <p className="footer__copyright">Design & Dev By <a href="https://g.kom.ac/">g.kom.ac</a></p>
              <a href="#" className="footer__back-link">
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
