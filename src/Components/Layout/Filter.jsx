import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useGlobalContext } from "../AppContext";
import { useState } from "react";

function Filter() {
  const [category, setCategory] = useState([]);
  const [company, setCompany] = useState([]);

  const {
    product,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedCompany,
    setSelectedCompany,
    applyFilters,
    resetFilter,
  } = useGlobalContext();


  useEffect(() => {
    const allCategories = [
      "all",
      ...new Set(product.map((item) => item.category)),
    ];
    const allCompanies = [
      "all",
      ...new Set(product.map((item) => item.company)),
    ];
    setCategory(allCategories);
    setCompany(allCompanies);
  }, [product]);

  return (
    <>
      <div className="filter">
        <Container className="mb-5 mt-5 bg-light rounded p-2">
          <div className="filter-items">
            <div>
              {/* Search product */}
              <label htmlFor="">Search Product</label>
              <input
                className="mb-3 form-control"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type product name..."
              />
            </div>

            <div>
              <label htmlFor="">Select Category</label>

              <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Default select example"
                className=""
                style={{ width: "" }}
              >
                {category.map((categories, index) => {
                  return (
                    <option key={index} value={categories}>
                      {categories}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
            <div>
              <label htmlFor="">Select Company</label>

              <Form.Select
                aria-label="Default select example"
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
              >
                {company.map((companies, index) => {
                  return (
                    <option key={index} value={companies}>
                      {companies}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </div>
          {/* Button */}
          <div className="btn-container">
            <Button
              className="bg-primary me-2"
              style={{ width: "100%" }}
              onClick={applyFilters}
            >
              Search
            </Button>
            <Button
              className="bg-danger outline-danger"
              style={{ width: "100%", outline: "none" }}
              onClick={resetFilter}
            >
              Reset
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Filter;
