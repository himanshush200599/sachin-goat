import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
function Graphs({ data }) {
  const labels = Array(463);
  for (let i = 0; i <= 463; i++) labels[i] = i;
  const runs = data.map(entry => entry.batting_score);
  let wicketss = data.filter(entry => entry.wickets !== "-");
  const wicket = wicketss.map(entry => entry.wickets);
  const labels2 = Array(wicket.length);
  for (let i = 0; i <= wicket.length; i++) labels2[i] = i;
  const winningMatch = data.filter(entry => entry.match_result === "won");
  const countWinningMatch = winningMatch.length;
  const lostMatch = data.filter(entry => entry.match_result === "lost");
  const countLostMatch = lostMatch.length;
  const countTieMatch = 463 - countLostMatch - countWinningMatch;
  const data1 = {
    labels: labels,
    datasets: [
      {
        label: "Runs scored in each match",
        data: runs,
        fill: false,
        lineTension: 0.1,
        borderDash: [],
        backgroundColor: "rgb(75,32,23)",
        borderColor: "#4B2017",
        pointBackgroundColors: "#fff",
        borderCapStyle: "butt"
      }
    ]
  };
  const data2 = {
    labels: labels2,
    datasets: [
      {
        label: "wickets Taken in each match",
        data: wicket,
        fill: false,
        lineTension: 0.1,
        borderDash: [],
        pointBorderWidth: 1,
        pointMoverRadius: 5,
        pointMoverBorderWidth: 2,
        backgroundColor: "rgb(75,32,23)",
        borderColors: "#4B2017",
        pointBackgroundColors: "#fff",
        borderCapStyle: "butt"
      }
    ]
  };
  const data3 = {
    labels: ["Win Match", "Lost Match", "Tie Match"],

    datasets: [
      {
        label: "Match Result When sachin Played In Team",
        data: [countWinningMatch, countLostMatch, countTieMatch],
        fill: false,
        lineTension: 0.1,
        borderDash: [],
        pointBorderWidth: 1,
        pointMoverRadius: 5,
        pointMoverBorderWidth: 2,
        backgroundColor: ["green", "red", "brown"],
        borderColors: "#4B2017",
        pointBackgroundColors: "#fff",
        borderCapStyle: "butt"
      }
    ]
  };

  return (
    <>
      <h3>Run scored by sachin in each inning</h3>
      <Line data={data1} />
      <h3>Wickets Taken by Sachin </h3>
      <Bar data={data2} />
      <h3>Match Result When Sachin played in Team</h3>
      <Doughnut data={data3} />
    </>
  );
}
export default Graphs;
