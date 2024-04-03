import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

const PopulationChart = () => {
  const [populationData, setPopulationData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const res = await fetch(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        const data = await res.json();
        console.log(data);
        setPopulationData(data.data);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    };

    fetchPopulationData();
  }, []);

  useEffect(() => {
    if (populationData.length > 0) {
      renderChart();
    }
  }, [populationData]);

  const renderChart = () => {
    const labels = populationData.map((item) => item.Year);
    const values = populationData.map((item) => item.Population);

    if (chartInstance) {
      chartInstance.destroy(); // Destroy existing chart instance
    }

    const ctx = document.getElementById("populationChart");
    const newChartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Population",
            data: values,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
      },
    });

    setChartInstance(newChartInstance);
  };

  return (
    <div className="h-[470px] mt-6 mb-5">
      <h2 className="text-gray-100 text-lg">Population chart</h2>
      <div style={{ height: "420px" }}>
        <canvas id="populationChart"></canvas>
      </div>
    </div>
  );
};

export default PopulationChart;
