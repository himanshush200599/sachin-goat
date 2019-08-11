import React from "react";
import "./App.css";
import data from "./sachin.json";
import Landing from "./Components/Landing";
function App() {
  console.log(data);
  return (
    <>
      <Landing />
    </>
  );
}

export default App;
