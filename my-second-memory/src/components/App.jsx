// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";
import Items from "./Items";
import Currentfevs from "./Currentfevs";
import Additems from "./Additems";
import axios from "axios";

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
      {/* <header className="App-header"> */}
      <h1>My Second Memory</h1>
      <p>Check your current inventory before check out!</p>
      {/* </header> */}
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
