import React, { useContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer.js";

// Context
const Provider = React.createContext();
export const useGlobalContext = () => useContext(Provider);

// URL
const url = "https://www.course-api.com/react-store-products";

function AppContext({ children }) {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProducts] = useState([]);
  const [notification, setNotification] = useState([]);
  const [amount,setAmount] = useState(0)
  

  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    products: product,
    totalPrice: 0,
    amount: amount
  });
  console.log(state.amount)

  //Filter

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setPostPerPage] = useState(6);

  const indexOfLastItem = currentPage * productPerPage;
  const indexOfFirstitem = indexOfLastItem - productPerPage;
  const totalPages = Math.ceil(filteredProduct.length / productPerPage);
  const currentItem = filteredProduct.slice(indexOfFirstitem, indexOfLastItem);

  function nextPage() {
    setCurrentPage((nextPage) =>
      nextPage < totalPages ? nextPage + 1 : nextPage
    );
  }
  function prevPage() {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  }
  function setPage(number) {
    if (number > 0 && number <= totalPages) {
      setCurrentPage(number);
    }
  }
  // End of Pagination
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const { data } = response;
      setProduct(data);
      setFilteredProducts(data);
      dispatch({ type: "DISPLAY_PRODUCTS", payload: data });

      setLoader(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Add to cart
  function addItem(productInfo) {
    const itemExist = state.cart.some((item) => item.id === productInfo.id);
    if (itemExist) {
      addNotification(`${productInfo.name} already in cart.`, "warning");
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...productInfo },
      });
      addNotification(`${productInfo.name} added to cart`, "success");
    }
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  }
  // Notification Logic

  const addNotification = (message, type = "success") => {
    const id = Date.now();
    setNotification((prev) => [...prev, { id, message, type }]);

    // Remove notification after 3 seconds
    setTimeout(() => {
      setNotification((prev) => prev.filter((note) => note.id !== id));
    }, 3000);
  };
  // Apply Filter Logic
  useEffect(() => {
    let filtered = product;

    if (searchQuery.trim()) {
      setFilteredProducts(
        product.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(filtered);
    }
  }, [searchQuery, product]);

  // Apply Filter Logic
  const applyFilters = () => {
    let filtered = product;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }
    if (selectedCompany !== "all") {
      filtered = filtered.filter((item) => item.company === selectedCompany);
    }

    setFilteredProducts(filtered);
  };

  // Reset filter values
  const resetFilter = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedCompany("all");
    setFilteredProducts(product); // Reset to full product list
    setCurrentPage(1);
  };

  return (
    <>
      <Provider.Provider
        value={{
          state,
          loader,
          addItem,
          currentItem,
          productPerPage,
          product,
          nextPage,
          prevPage,
          setPage,
          currentPage,
          removeItem,
          searchQuery,
          setSearchQuery,
          selectedCategory,
          setSelectedCategory,
          selectedCompany,
          setSelectedCompany,
          applyFilters,
          resetFilter,
          notification,
          addNotification,
          amount,
          setAmount
        }}
      >
        {children}
      </Provider.Provider>
    </>
  );
}

export default AppContext;
