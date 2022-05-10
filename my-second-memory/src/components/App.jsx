import React, { useState, useEffect } from "react";
import "./App.css";
import Items from "./Items";
import Currentfevs from "./Currentfevs";
import Additems from "./Additems";
import axios from "axios";
import brain_nobg from "../images/brain_nobg.png";

export default function App() {
  const [data, setData] = useState([]);

  const fetchAlldata = async () => {
    const response = await axios
      .get("http://localhost:8000/api")
      .catch((error) => console.log(error.response));
    setData(response.data);
  };

  useEffect(() => {
    fetchAlldata();
  }, []);

  const postData = async (addItem) => {
    await axios
      .post("http://localhost:8000/post", addItem)
      .catch((error) => console.log(error.response));
    fetchAlldata();
  };

  return (
    <div className="App">
      <div className="logo">
        <img src={brain_nobg} alt="MMS" />
      </div>
      {/* <h1>My Second Memory</h1> */}
      <p className="App-title">
        Check your current inventory before check out!
      </p>
      <div>
        <Items data={data} />
      </div>
      <div>
        <Additems postData={postData} />
      </div>
      <div>
        <Currentfevs />
      </div>
    </div>
  );
}
