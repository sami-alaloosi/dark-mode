import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {BrowserRouter, Route} from "react-router-dom"

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import {useDarkMode} from "./hooks/useDarkMode"
import User from "./components/User"

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const[user, setUser]= useState({})


  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = () => {
    
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);


  useEffect(() => {
    axios.get('https://api.github.com/users/sami-alaloosi')
  .then(res=>{setUser(res.data)})
  .catch(err=>{console.log("user axios get error", err)})
  }, []);


  


  return (
    <div
     className={darkMode ? "dark-mode App" : "App"}
     >
     
      <Navbar toggleMode={toggleMode} darkMode={darkMode}  />
      {/* <Charts coinData={coinData} /> */}
      <div>
      

      

      <Route exact path="/">
      <Charts coinData={coinData} />
      <div>Hi</div>
      </Route>

        
        <Route path="/something">
          <User user={user}/>
        </Route>

      
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render( <BrowserRouter> <App /> </BrowserRouter>, rootElement);
