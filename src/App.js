import React from "react";
import "./App.css";
import { Header } from "./Header";
import InputForm from "./InputForm";
import { ProgressIndicator } from "./Progress";

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <ProgressIndicator />
        <InputForm />
      </div>
    );
  }
}
