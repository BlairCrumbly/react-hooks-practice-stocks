import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { useState } from "react";

      
function MainContainer() {
  const [stocks, setStocks] = useState([]); //! stock state to hold data

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(setStocks) //! update state with fetched stocks data
      .catch((error) => console.error("Error fetching stocks:", error));
  }, []);

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
