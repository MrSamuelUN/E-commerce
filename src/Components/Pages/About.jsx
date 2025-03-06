import React from "react";
import Header from "../Layout/Header";
import { Button } from "react-bootstrap";

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1>
          We love <button className="btn btn-primary">E-COMMERCE</button>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </p>
      </div>
    </>
  );
}

export default About;
