// import React, { createContext } from "react";
import Header from "../Layout/Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import hero1 from "../../assets/hero1.webp";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <div className="home-container">
          <div>
            <h1
              style={{
                fontSize: "60px",
                lineHeight: "4rem",
                marginBottom: "rem",
              }}
            >
              We are changing the way people shop
            </h1>
            <p className="mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <br /> Tempore repellat explicabo enim soluta temporibus
              asperiores aut obcaecati perferendis porro nobis.
            </p>
          </div>
          <div>
            <img
              className="img-fluid w-100"
              src={hero1}
              alt=""
              style={{objectFit: "cover" }}
            />
          </div>
         
        </div>
        <div className="home-btn">
        <Link
            to="/products"
            style={{ textDecoration: "none", color: "white" }}
          >
        <Button
              id="home-btn"
              className={theme == "dark" ? "bg-success" : "bg-primary outline"}
            >
              OUR PRODUCTS
            </Button>

           
          </Link>
        </div>
        
      
      </Container>
    </>
  );
}

export default Home;
