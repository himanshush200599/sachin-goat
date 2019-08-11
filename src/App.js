import React from "react";
import "./App.css";
import data from "./sachin.json";
import Landing from "./Components/Landing";
import Graphs from "./Components/Graphs";
function App() {
  // console.log(data);
  return (
    <>
      <Landing />
      <Graphs data={data} />
    </>
  );
}

export default App;
