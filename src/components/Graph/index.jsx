import React from "react";
import { Bar } from "react-chartjs-2";
const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      backgroundColor: "#406CAE",
      label: "Manchester",
      data: [12, 3]
    },
    {
      backgroundColor: "#25B266",
      label: "Arsenel",
      data: [3, 7]
    }
  ]
};
const options = {
  scales: {
    xAxes: [
      {
        stacked: false
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  legend: {
    display: true,
    position: "bottom"
  }
};
export default function Graph() {
  return (
    <div style={{ backgroundColor: "#EFF4F6", padding: "20px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
