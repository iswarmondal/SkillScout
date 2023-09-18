import React, { useState } from "react";
import Chart from "react-apexcharts";

function Analysis() {
  // const [selectedTab, setSelectedTab] = useState('text');
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

  let finalQuesAnsJson = JSON.parse(sessionStorage.getItem('finalJson'));
  let analysisResult = JSON.parse(sessionStorage.getItem('finalAnalysisJson'));

  console.log(finalQuesAnsJson);
  console.log(analysisResult);

  return (

    <>
      {/* <div className="container-fluid">
        <div className="container py-3 my-3 d-flex flex-column align-items-center justify-content-center">
          <h1 className="mb-3">Results of the Candidate</h1>
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" onClick={() => setSelectedTab('text')} checked={selectedTab === 'text' ? true : false}></input>
            <label class="btn btn-outline-primary" for="btnradio1">Text</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={() => setSelectedTab('graph')} checked={selectedTab === 'graph' ? true : false}></input>
            <label class="btn btn-outline-primary" for="btnradio2">Graph</label>
          </div>
        </div>
      </div> */}
      {/* {selectedTab === 'graph' && <div className="d-flex flex-column justify-content-center align-items-center min-h-screen bg-black300" style={{ minHeight: '100vh' }}>

        <br />
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
      </div>} */}
      {/* {selectedTab === 'text' &&  */}
      <div className="container-fluid">
        <div className="container">
          <h1 className="text-center my-3">Results of the Candidate</h1>
          <h3>
            Overall performance
          </h3>
          <div className="row">
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Correctness</h5>
                  <p class="card-text">{analysisResult.overall_correctness} %</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Communication Skill</h5>
                  <p class="card-text">{analysisResult.communication_skill} %</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Confidence</h5>
                  <p class="card-text">{analysisResult.confidence_level} %</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row p-3 my-3">
            <h3>Questions & Answers</h3>
            {finalQuesAnsJson.map((eachQues) => {
              return (<div className="mb-3 d-flex align-items-center justify-content-center gap-3">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-text"><span><i><b>Q.{eachQues.id}</b></i></span> {eachQues.question}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-text"><span><b><i>Ans:- </i></b></span>{eachQues.answer === '' ? 'Not Answered' : eachQues.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div >
      {/* } */}
    </>
  );
}

export default Analysis;
