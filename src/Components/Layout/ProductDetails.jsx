import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../AppContext";
import Header from "./Header";
import { Container, Button } from "react-bootstrap";

function ProductDetails() {
  const { product, addItem, addNotification } = useGlobalContext();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    const result = product.filter((selected) => selected.id === id);
    setSelectedProduct(result);
  }, [product, id]);

  return (
    <>
      <Header />
      {selectedProduct.map((productInfo) => {
        const {
          id,
          company,
          description,
          image,
          price,
          name,
          colors: [first, second],
        } = productInfo;

        return (
          <Container className="mt-5">
            <div
              className="productInfo-container d-flex flex-lg-nowrap flex-wrap align-items-center gap-3"
              key={id}
            >
              <div className="col-lg-6">
                <img
                  src={image}
                  alt=""
                  className="img-fluid rounded-1"
                  style={{
                    width: "500px",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-lg-6">
                <h1 style={{ textTransform: "capitalize" }}>{name}</h1>
                <h3
                  style={{ textTransform: "capitalize" }}
                  className="text-secondary"
                >
                  {company}
                </h3>
                <p className="text-start text-warning">${price}</p>
                <p className="text-start" style={{ lineHeight: "2rem" }}>
                  {description}
                </p>
                <div className="colors">
                  <div style={{ backgroundColor: `${first}` }}></div>
                  <div style={{ backgroundColor: `${second}` }}></div>
                </div>
                <div class="mt-3 mb-3 d-flex justify-content-between">
                  {/* <div>
                    <label for="name" class="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      class="form-control w-100"
                      placeholder="1"
                      min={1}
                      max={6}
                    />
                  </div> */}

                  <Button
                    className=""
                    onClick={() => {
                      addItem({ ...productInfo });
                    }}
                  >
                    ADD TO BAG
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        );
      })}
    </>
  );
}

export default ProductDetails;
