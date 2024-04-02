import React from "react";
import StockCards from "./StockCards";
import { Chart } from "chart.js";
import PopulationChart from "./PopulationChart";

const MainContent = () => {
  return (
    <div className="pt-8 px-4 w-full">
      {/* top header */}
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="text-[32px] leading-[44px] font-medium tracing-[.4px] text-[#ccc] mb-2">
            Hello, Brooklyn Simmons 👋
          </h1>
          <p className="text-gray-200 text-xl font-normal">
            Welcome to <span className="text-green-400">Spot Trading</span>
          </p>
        </div>

        <button className="bg-green-600 text-white px-8 py-4 border-none rounded-md font-normal text-[18px]">
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
