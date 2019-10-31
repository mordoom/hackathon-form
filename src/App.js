import React from "react";
import "./App.css";
import { Header } from "./Header";
import InputForm from "./InputForm";
import { ProgressIndicator } from "./Progress";

function App() {
  return (
    <div className="App">
      <Header />
      <ProgressIndicator />
      <InputForm />
    </div>
  );
}

export default App;
