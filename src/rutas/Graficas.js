import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Doughnut, Pie } from "react-chartjs-2";
import { chartColors } from "../colors.js";
import "../App.css";




export default function Graficas() {
    
    let chartInstance = null;

    const options = {
        legend: {
          display: false,
          position: "right"
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      };
      
      const pieOptions = {
        legend: {
          display: false,
          position: "right",
          legendCallback: function(chart) {
            // Return the HTML string here.
            console.log(chart);
            return [
              <ul>
                <li>z</li>
                <li>zzzz</li>
                <li>ppp</li>
                <li>adasda</li>
              </ul>
            ];
          }
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      };
      
      const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["a", "b", "c", "d"],
        datasets: [
          {
            data: [300, 50, 100, 50],
            backgroundColor: chartColors,
            hoverBackgroundColor: chartColors
          }
        ]
      };
      
      const pieData = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["usa", "europe", "africa"],
        datasets: [
          {
            data: [200, 150, 20, 10],
            backgroundColor: chartColors,
            hoverBackgroundColor: chartColors
          }
        ]
      };
    
      const styles = {
        pieContainer: {
          width: "40%",
          height: "40%",
          top: "50%",
          left: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)"
        },
        relative: {
          position: "relative"
        }
      };
    
    return (
        <div>
                <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div style={styles.relative}>
        <Doughnut data={data} options={options} />
        <div style={styles.pieContainer}>
          <Pie
            data={data}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
          />
        </div>
        <div id="legend" />
      </div>
    </div>
        </div>
    )
}