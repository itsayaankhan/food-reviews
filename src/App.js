import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import "./components/Header/Header.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);