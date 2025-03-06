import Header from "../Layout/Header";
import { Circles, Rings } from "react-loader-spinner";
import { Card, Button } from "react-bootstrap";
import Filter from "../Layout/Filter";
import { useGlobalContext } from "../AppContext";
import { Link } from "react-router-dom";
import Pag from "../Layout/Pagination";

function Products() {
  const { loader, currentItem } = useGlobalContext();

  return (
    <>
      <Header />
      <Filter />
      {loader ? (
        <div className="center-loader">
          <Rings
            height="80"
            width="60"
            color="Green"
            ariaLabel="loading"
            wrapperClass
            className="loader"
          />
        </div>
      ) : (
        <div className="product-container d-flex justify-content-center flex-wrap gap-3">
          {currentItem.length === 0 ? (<p className="text-center">No search found</p>):(currentItem.map((prod, index) => {
            const { id, name, image, price } = prod;
            return (
              <Link
                to={`/productdetails/${id}`}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <Card
                  className="shadow rounded-4"
                  style={{
                    width: "22rem",
                    height: "20rem",
                    marginBottom: "30px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={image}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  />
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {name}
                    </Card.Title>
                    <div className="d-flex justify-content-center align-content-center">
                      {" "}
                      <Button variant="light" className="">
                        ${(price / 1000).toFixed(3)}
                      </Button>{" "}
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            );
          }))}
          
        </div>
      )}
      <Pag />
    </>
  );
}

export default Products;
