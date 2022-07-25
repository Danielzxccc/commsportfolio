import React from "react";
import { useTypeWriter } from "@vegadev/react-type-writer";
import vasco from "../assets/vasco.jpg";

export default function Home() {
  const text = useTypeWriter({
    text: [
      "HTML",
      "CSS",
      "Javascript",
      "ReactJS",
      "NodeJS",
      "PHP",
      "Java Spring",
      "ASP.net",
    ],
    infiniteLoop: true,
    blinker: "_",
    delay: 500,
    blinkerDelay: 100,
  });
  return (
    <div className="container" id="Home">
      <main className="w-100 d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center">
        <img
          src={vasco}
          alt=""
          className="rounded-circle border border-primary"
          style={{ width: 270 }}
        />
        <div className="px-4 text-center">
          <h1>Dan Web Developer</h1>
          <h3>@danprogcomms</h3>
          <p className="lead">
            Hi I'm Dan from #commstwt. Welcome to my website. <br /> I offer
            web programming services such as <b>{text}.</b>
          </p>
          <p class="lead">
            <a href="https://twitter.com/danprogcomms" target='_blank' class="btn btn-lg btn-primary fw-bold border-white">
              Learn more
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
