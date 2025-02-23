import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import InputComponent from "./InputComponent";
import TodoList from "./TodoList";
import dogImage from "./dog.jpg";


const HomePage = () => {
  return (
    <div className="container-fluid text-center py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <h1 className="display-4 fw-bold text-dark">Welcome to PJF's Website</h1>
            <p className="lead text-muted">Let's Go go go go go!</p>
            <button 
              className="btn btn-warning btn-lg mt-3"
              onClick={() => alert("arf arf arf")} 
            >
              Click Me →
            </button>
          </div>
          <div className="col-md-6">
            <img 
              src={dogImage}
              alt="Travel Illustration" 
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/full-name-display" element={<InputComponent />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;