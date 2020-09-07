import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../api/api";
import ChartAnimation from "../animations/Chart";

// import styles from "./Chart.module.css";

const ChartData = ({
  countryData: { confirmed, recovered, deaths },
  country,
}) => {
  const [dailyData, setDailyData] = useState({});

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#ffa412", "#26eb9c", "#ff1235"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
        scales: {
          yAxes: [
            {
              ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return value / 1000000 + " M";
                },
              },
            },
          ],
        },
      }}
    />
  ) : null;

  return (
    <div>
      {country ? (
        barChart
      ) : (
        <div className="chartAnimation">
          <ChartAnimation />
        </div>
      )}
    </div>
  );
};

export default ChartData;
