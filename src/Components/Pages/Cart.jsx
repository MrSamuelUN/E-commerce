// import { useState } from "react";
import Header from "../Layout/Header";
import { Container, Button } from "react-bootstrap";
import { useGlobalContext } from "../AppContext";

function Cart() {

  
  const {
    state: { totalPrice },
    state: { cart },
    removeItem
  } = useGlobalContext();

  return (
    <>
      <Header />
      <div className="py-4 container">
        {cart.length == 0 ? (
          <h1 className="py-3 border-bottom">Your Cart is Empty</h1>
        ) : (
          <>
            <h1 className="py-3 border-bottom">Shopping Cart</h1>
            <div className="row d-flex justify-content-between flex-lg-nowrap flex-wrap">
              <div className="col-lg-8 col-md-12 col-sm-12 me-3">
                {cart.map((CartDetailsItem) => {
                  const {
                    id,
                    name,
                    image,
                    price,
                    category,
                    quantity,
                    colors: [first, second],
                  } = CartDetailsItem;
                

                  return (
                    <div key={id} className="cartDetails-container ">
                      {/* first div start */}
                      <div className="cartDetials-firstDiv cart-container d-flex flex-lg-nowrap flex-wrap align-items-center gap-3">
                        {/* img div start */}
                        <div className="col-lg-4 col-md-3 col-sm-3">
                          <img
                            src={image}
                            alt=""
                            className="rounded-2 img-fluid object-fit-cover" style={{height:"200px"}}
                          />
                        </div>
                        {/* img div ends */}

                        {/* Info div start */}
                        <div className=" col-lg-8 row d-flex justify-content-between">
                          {/* text div start */}
                        
                          <div className="col-lg-6 col-md-6 col-sm-4">
                            <h5
                              className="text-start"
                              style={{
                                textTransform: "capitalize",
                                whiteSpace: "nowrap",
                                maxWidth: "180px",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {name}
                            </h5>
                            <p
                              className="text-start"
                              style={{ textTransform: "capitalize" }}
                            >
                              {category}
                            </p>
                          </div>
                          {/* text div ends */}
                            {/* Amount div start */}
                          <div class="col-lg-4 col-md-4 col-sm-4">
                      

                            <div>
                              <button
                                className="btn btn-danger text-start mb-3 mt-3"
                                onClick={() => removeItem(id)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                            {/* Amount div ends */}
                            <div className="col-lg-3 col-md-12 col-sm-12 me-2">
                            <p className="text-bg-light rounded-2 p-1 w-auto">
                              ${(price / 1000).toFixed(3)}
                            </p>
                          </div>

                         
                        </div>
                        {/* info div end */}
                       
                      </div>

                      <hr />
                    </div>
                  );
                })}
              </div>

              <div
                className="total-container bg-light col-lg-4 col-md-12 col-sm-12  h-75 p-3 rounded-2 "
                id="total"
              >
                <h1 className="text-center">Total</h1>
                <div className="d-flex justify-content-between align-content-center">
                  <h6>Subtotal</h6>
                  <p>${(totalPrice / 1000).toFixed(3)}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-content-center">
                  <h6>Shipping</h6>
                  <p>$12</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-content-center">
                  <h6>Total</h6>
                  <p>${(totalPrice / 1000 + 12).toFixed(3)}</p>
                </div>

                <button className="btn-primary btn w-100">Purchase</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
