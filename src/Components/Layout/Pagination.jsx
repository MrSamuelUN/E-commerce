import React from "react";
import { useGlobalContext } from "../AppContext";
import { Container } from "react-bootstrap";

function Pag() {
  const {
    productPerPage,
    state: { products }, nextPage,prevPage,setPage
  } = useGlobalContext();
    

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productPerPage); i++) {
    pageNumbers.push(i);
    // console.log(pageNumbers);
    
  }
  

  return (
    <div>
      <Container className="d-flex justify-content-center">
      <ul className="pagination d-flex gap-3">
        <li className="page-item"><a href="#" className="page-link" onClick={prevPage}>Previous</a></li>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item" >
              <a href="#" onClick={()=> setPage(number)} className="page-link">{number}</a>
            </li>
          );
        })}
        <li className="page-item"><a href="#" className="page-link" onClick={nextPage}>Next</a></li>
      </ul>
      </Container>
      
    </div>
  );
}

export default Pag;
