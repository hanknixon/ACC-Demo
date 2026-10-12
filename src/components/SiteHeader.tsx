"use client";

import Image from "next/image";
import { useEffect, useState, type MouseEvent } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#products" },
  {
    label: "Careers",
    href: "mailto:info@americanchargercorp.com?subject=Careers%20Inquiry",
  },
] as const;

export function SiteHeader(): React.JSX.Element {
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-96px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  function closeProductMenu(event: MouseEvent<HTMLAnchorElement>): void {
    event.currentTarget.closest("details")?.removeAttribute("open");
    setMenuOpen(false);
  }

  return (
    <header
      className={`site-header${pastHero ? " site-header--scrolled" : ""}`}
    >
      <a
        className="site-header__brand"
        href="#home"
        aria-label="American Charger Corporation home"
      >
        <Image
          src="/images/logo-light.png"
          alt=""
          width={89}
          height={89}
          priority
        />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`site-header__nav${menuOpen ? " is-open" : ""}`}
        aria-label="Primary navigation"
      >
        {NAV_ITEMS.slice(0, 3).map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <details className="products-menu">
          <summary>Products</summary>
          <div className="products-menu__panel">
            <a href="#level-2" onClick={closeProductMenu}>
              Level 2 Chargers
            </a>
            <a href="#portable" onClick={closeProductMenu}>
              Portable Chargers
            </a>
            <a href="#dc-fast" onClick={closeProductMenu}>
              DC Fast Chargers
            </a>
          </div>
        </details>
        {NAV_ITEMS.slice(3).map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        className="site-header__contact"
        href="#contact"
        onClick={() => setMenuOpen(false)}
      >
        <Image
          className="contact-arrow"
          src="/images/arrow-contact.svg"
          alt=""
          width={35}
          height={35}
        />
        <span>Contact Us</span>
      </a>
    </header>
  );
}
