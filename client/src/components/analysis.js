import React, { useState } from "react";
import Chart from "react-apexcharts";

function Analysis() {
  const [data1, setData1] = useState({
    options: {
      chart: {
        id: "performance",
      },
      xaxis: {
        categories: ["communication", "english", "deep understanding", "correctness", "confidence"],
      },
    },
    series: [
      {
        name: "candidate",
        data: [30, 40, 45, 50, 49],
      },
    ],
  });

  const [data2, setData2] = useState({
    options: {
      chart: {
        id: "performance",
      },
      xaxis: {
        categories: ["id: 1", "id: 2", "id: 3", "id: 4", "id: 5"],
      },
    },
    series: [
      {
        name: "candidate",
        data: [30, 40, 45, 50, 49],
      },
    ],
  });

  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items-center min-h-screen bg-black300" style={{ minHeight: '100vh' }}>
      <h1>Results of the candidate</h1>
      <br/>
      <div className="d-flex flex-column justify-start items-start">
        <h3>
          Overall performance
        </h3>
        <Chart
        options={data1.options}
        series={data1.series}
        type="radar"
        width="300%"
      />
      </div>
      <div>
      <h3>
          correctness per questions (in %)
        </h3>
        <Chart
        options={data2.options}
        series={data2.series}
        type="line"
        width="300%"
      />
      </div>
    </div>
    </>
  );
}

export default Analysis;
