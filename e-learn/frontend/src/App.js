import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import SignInSide from "./components/SignInSide";
import TestComp from "./components/TestComp";
import SimpleContainer from "./components/SimpleContainer";

export default function App() {
  return (
    <div>
      <NavBar />
      <SignInSide />
    </div>
  );
}
