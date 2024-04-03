import React from "react";
import StockCards from "./StockCards";
import { Chart } from "chart.js";
import PopulationChart from "./PopulationChart";

const MainContent = () => {
  return (
    <div className="pt-8 px-4 w-full">
      {/* top header */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center items-start gap-4 my-2">
        <div>
          <h1 className="text-lg sm:text-[32px] sm:leading-[44px] font-medium tracing-[.4px] text-[#ccc] mb-2">
            Hello, Brooklyn Simmons 👋
          </h1>
          <p className="text-gray-200 text-sm sm:text-xl font-normal">
            Welcome to <span className="text-green-400">Spot Trading</span>
          </p>
        </div>

        <button className="bg-green-600 text-white px-4 py-2 sm:px-8 sm:py-4 border-none rounded-md font-normal sm:text-[18px]">
          Start Trading
        </button>
      </div>

      {/* chart */}
      <PopulationChart />
      {/* cards sections */}
      <StockCards />
    </div>
  );
};

export default MainContent;
