import React, { useEffect, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const StockCards = () => {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await res.json();

        setPriceData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div>
      {/* heading and status */}
      <div className="flex justify-between items-center my-5">
        <h2 className="text-[24px] leading-[38px] text-[#ccc]">Assets</h2>

        <div className="flex items-start gap-1">
          <p className="text-[18px] text-gray-200">Today</p>
          <IoChevronDownSharp size={18} className="text-gray-100 mt-1" />
        </div>
      </div>

      <div className="flex flex-wrap justify-start sm:justify-start items-center gap-4">
        {priceData &&
          priceData.bpi &&
          Object.keys(priceData.bpi).map((currency) => (
            <div
              key={currency}
              className="bg-[#22222f] shadow-lg p-4 rounded-lg h-[150px] sm:h-[200px] sm:w-[200px] text-center sm:text-left w-full">
              <h2 className="text-lg text-center sm:text-left font-bold mb-2 text-[#ccc]">
                {currency}
              </h2>
              <p className="text-lg text-gray-200 mb-4 font-light">
                {priceData.bpi[currency].rate}
              </p>
              <p className="text-sm text-gray-400">{priceData.time.updated}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StockCards;
