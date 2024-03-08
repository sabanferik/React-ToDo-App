import React, { useState } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";
import "../App.css";

import Data from "../helper/Data"

const Home = () => {

const[todos,setTodos]=useState(JSON.parse(localStorage.getItem("gorevler"))||Data)
 
  return (
    <div className="todo-container">
     <GorevEkle todos={todos} setTodos={setTodos}/>
     <GorevleriGoster todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default Home;
