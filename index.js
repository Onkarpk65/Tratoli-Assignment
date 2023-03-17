import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main"
import Header from "./components/Header";
import "./index.css";

const Heading = () =>  <Main/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading/>)