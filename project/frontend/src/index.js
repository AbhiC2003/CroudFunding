import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

    console.log('Connected to MongoDB');
}

ReactDOM.render(<App />, document.getElementById("root"));
