import "./App.css";
import { useState } from "react";
import Axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  function insert() {
    Axios.post("http://localhost:5000/create", {
      name: name,
      age: age,
      address: address,
    });
  }
  return (
    <div className="App">
      <div className="inputfield">
        <form>
          <h1>MERN-CRUD</h1>
          <label for="name">Enter your Name</label>
          <input
            type="text"
            id="name"
            autocomplete="off"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label for="name">Enter your Age</label>
          <input
            type="text"
            id="age"
            required
            autocomplete="off"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <label for="name">Enter your Address</label>
          <input
            type="text"
            id="address"
            required
            autocomplete="off"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <button onClick={insert}>Insert Data</button>
        </form>
      </div>
    </div>
  );
}

export default App;
