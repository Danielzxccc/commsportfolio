import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState("Home");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={scrollPosition < 1200 ? 'container sticky-top': 'container'}>
      <header className="d-flex justify-content-between py-3 align-items-center">
        <h1>DAN {nav === "Home" ? "" : nav}</h1>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              href="#"
              className={nav === "Home" ? "nav-link active" : "nav-link"}
              onClick={() => {
                setNav("Home");
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#proofs"
              className={nav === "Proofs" ? "nav-link active" : "nav-link"}
              onClick={() => {
                setNav("Proofs");
              }}
            >
              Proofs
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={nav === "Services" ? "nav-link active" : "nav-link"}
              onClick={() => {
                setNav("Services");
              }}
            >
              Services
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
