import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SiteHeader } from "@/components/SiteHeader";
import { CONTACT_EMAIL } from "@/lib/contact";

const products = [
  {
    id: "level-2",
    title: (
      <>
        Level 2<br />
        Chargers
      </>
    ),
    image: "/images/level-2-chargers.png",
    imageWidth: 1024,
    imageHeight: 1536,
    imageClass: "product-card__image--level-2",
    button: "View Level 2 Specs",
    arrow: "/images/arrow-product.svg",
  },
  {
    id: "portable",
    title: (
      <>
        Portable
        <br />
        Chargers
      </>
    ),
    image: "/images/portable-chargers.png",
    imageWidth: 1086,
    imageHeight: 1448,
    imageClass: "product-card__image--portable",
    button: "View Portable Chargers",
    arrow: "/images/arrow-product.svg",
  },
  {
    id: "dc-fast",
    title: (
      <>
        DC Fast
        <br />
        Chargers
      </>
    ),
    image: "/images/dc-fast-chargers.png",
    imageWidth: 1024,
    imageHeight: 1536,
    imageClass: "product-card__image--dc-fast",
    button: "View DC Chargers",
    arrow: "/images/arrow-product-dc.svg",
  },
] as const;

const solutions = [
  {
    title: "Commercial",
    image: "/images/commercial.png",
    description:
      "Add charging as an amenity that keeps customers on-site longer. Install fast, scale as demand grows.",
  },
  {
    title: "Fleet",
    image: "/images/fleet.png",
    description:
      "Charge your whole fleet overnight with pedestals built for daily, high-cycle use.",
  },
  {
    title: "Government",
    image: "/images/government.png",
    description:
      "Charging infrastructure built to meet emissions targets and procurement standards.",
  },
  {
    title: "Public",
    image: "/images/public.png",
    description:
      "Reliable, high-throughput charging bays built for constant public turnover, not occasional use.",
  },
  {
    title: "Industrial",
    image: "/images/industrial.png",
    description:
      "Keep forklifts, trucks, & site vehicles moving with rugged chargers built for warehouse conditions.",
  },
  {
    title: "Personal",
    image: "/images/personal.png",
    description:
      "Add charging as an amenity that keeps customers on-site longer. Install fast, scale as demand grows.",
  },
] as const;

const productDescription =
  "A portable mobile EV charger allows electric vehicle owners to charge their car anywhere, providing convenience and flexibility when away from home or public charging stations.";

export default function HomePage(): React.JSX.Element {
  return (
    <RevealOnScroll>
      <SiteHeader />
      <main>
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="hero__eyebrow">Charge-up before you leave</p>
            <h1 id="hero-title">
              WELCOME TO
              <br />
              YOUR PITSTOP
            </h1>
            <div className="hero__actions">
              <a className="button button--primary" href="#products">
                Find Your Charger
              </a>
              <a className="button button--outline-light" href="#products">
                See Product Specs
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="welcome" aria-labelledby="welcome-title">
          <div className="welcome__panel reveal">
            <h2 id="welcome-title">
              Welcome to
              <br />
              American Charger Corporation
            </h2>
            <p>
              Thank you for driving an electric vehicle or supporting those who
              do. Our products are the result of five years of rigorous design
              &amp; development, driven by a deep understanding of both current
              and future electric vehicle needs. Our flexible design ensures
              compatibility with all vehicles, including those yet to come.
            </p>
            <p>
              We are on a mission to provide your EV with the power it needs,
              ensuring quick and efficient charging. By choosing electric,
              you&apos;re also playing a key role in protecting the environment
              for current and future generations.
            </p>
            <div className="welcome__bottom">
              <span>Thank You!</span>
              <a href="#solutions">
                Learn More{" "}
                <Image
                  src="/images/arrow-learn.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </section>

        <section
          id="products"
          className="products"
          aria-labelledby="products-title"
        >
          <div className="products__grid">
            {products.map((product) => (
              <article
                id={product.id}
                className="product-card reveal"
                key={product.id}
              >
                <div className={`product-card__image ${product.imageClass}`}>
                  <Image
                    src={product.image}
                    alt=""
                    width={product.imageWidth}
                    height={product.imageHeight}
                  />
                </div>
                <div className="product-card__copy">
                  <h3>{product.title}</h3>
                  <p>{productDescription}</p>
                  <a
                    className="button button--outline-dark product-card__link"
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${product.button} inquiry`)}`}
                  >
                    {product.button}{" "}
                    <Image
                      className="product-card__arrow"
                      src={product.arrow}
                      alt=""
                      width={26}
                      height={26}
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <h2 id="products-title" className="products__heading reveal">
            PRODUCT CATEGORIES
          </h2>
        </section>

        <section
          id="solutions"
          className="solutions"
          aria-labelledby="solutions-title"
        >
          <div className="solutions__grid">
            <div className="solutions__intro reveal">
              <h2 id="solutions-title">
                Explore ACC
                <br />
                Solutions
              </h2>
              <a className="button button--primary" href="#contact">
                View all Solutions
              </a>
            </div>
            {solutions.map((solution) => (
              <article className="solution-card reveal" key={solution.title}>
                <div className="solution-card__image">
                  <Image
                    src={solution.image}
                    alt=""
                    width={solution.title === "Commercial" ? 1536 : 1254}
                    height={solution.title === "Commercial" ? 1024 : 1254}
                  />
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact__banner">
            <h2 id="contact-title" className="reveal">
              CONTACT US
            </h2>
          </div>
          <div className="contact__content">
            <p className="contact__note reveal">
              You have spear headed the cause and have already put it in motion,
              let our chargers be the part of your mission to help you get to
              your destination. God Speed!
            </p>
            <ContactForm />
            <div className="contact__details reveal">
              <div>
                <h3>Head Office</h3>
                <p>Rockaway, New Jersey</p>
              </div>
              <div>
                <h3>Warehouse Address</h3>
                <p>Mahwah, New Jersey</p>
              </div>
              <div>
                <h3>Additional Information</h3>
                <p>
                  Phone: <a href="tel:+19738869663">+1 973 886 9663</a>
                </p>
                <p>
                  Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <Image
            className="footer__logo"
            src="/images/logo.png"
            alt="American Charger Corporation"
            width={216}
            height={216}
          />
          <div className="footer__about">
            <p>
              Our flexible and modular charging
              <br />
              solutions are designed to help you
              <br />
              start and grow your charging offering.
            </p>
            <div className="footer__social" aria-label="Social media">
              <span role="img" aria-label="Instagram">
                <Image
                  src="/images/social-instagram.svg"
                  alt=""
                  width={48}
                  height={48}
                />
              </span>
              <span role="img" aria-label="Facebook">
                <Image
                  src="/images/social-facebook.svg"
                  alt=""
                  width={48}
                  height={48}
                />
              </span>
              <span role="img" aria-label="X">
                <Image
                  src="/images/social-x.svg"
                  alt=""
                  width={44}
                  height={40}
                />
              </span>
              <span role="img" aria-label="LinkedIn">
                <Image
                  src="/images/social-linkedin.svg"
                  alt=""
                  width={48}
                  height={48}
                />
              </span>
            </div>
          </div>
          <div className="footer__links">
            <div>
              <h3>Company</h3>
              <a href="#about">About</a>
              <a href="#products">Resources</a>
              <a href="mailto:info@americanchargercorp.com?subject=Careers%20Inquiry">
                Careers
              </a>
            </div>
            <div>
              <h3>Products</h3>
              <a href="#level-2">Level 2 Chargers</a>
              <a href="#dc-fast">DC Fast Chargers</a>
              <a href="#portable">Portable Chargers</a>
            </div>
            <div>
              <h3>Contact</h3>
              <p>Rockaway, NJ (Head Office)</p>
              <p>Mahwah, NJ (Warehouse)</p>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                +1 973 886 9663 | {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <small className="footer__copyright">
            © AMERICAN CHARGER CORPORATION INC. All Rights Reserved.
          </small>
          <div className="footer__legal">
            <span>Cookie Policy</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </RevealOnScroll>
  );
}
