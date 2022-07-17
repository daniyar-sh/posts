import React from "react";
import ApRouter from "./UI/ApRoutrer/ApRouter";
import Navbar from "./Component/Navbar/Navbar";


import './App.css';
import Posts from "./pages/posts";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Posts/>
    </div>
  );
}

export default App;
