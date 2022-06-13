import React from "react";
import "../App.css";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="App-header">
      <div className="header-col">
        <img src={logo} className="App-header__logo" alt="logo" />
        <h1 className="App-header__title">Meme Generator</h1>
      </div>

      <h4 className="App-header__secondary">React Course - Project 3</h4>
    </header>
  );
}
