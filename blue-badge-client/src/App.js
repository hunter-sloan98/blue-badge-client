
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Sitebar from "./components/home/Navbar";
import RevDisplay from "./components/review/RevDisplay";
import Auth from "./components/auth/Auth";
import { Route, Switch } from "react-router-dom";
import RevCreate from "./components/review/RevCreate";
import RevIndex from "./components/review/RevIndex";
import Navbar from "./components/home/Navbar";


function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  //Updating out token
  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken); //this is the key that is display in console and in the application dev tool
  };

  //Clearing our token on logout
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };




	const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
			<>
      {/* <RevCreate token={sessionToken}/> */}
			<Sitebar clickLogout={clearToken} token={sessionToken}/>
			</>
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
      {/* <Sitebar clickLogout={clearToken} token={sessionToken}/> */}
      {protectedViews()}
    </div>
  );
}
function app() {
  <div className="App">
    <p>This is our app</p>
  </div>
}




export default App;
