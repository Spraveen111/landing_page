import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';


function App() {
const [name,setName]=useState("");
const [email,setEmail]=useState("");

const fetchAxios = async ()=>{
  const body = {name: name, email: email};
  const url = "https://a9riyj32x1.execute-api.ap-south-1.amazonaws.com/Prod/producerForTempoLeads"
  const response =await axios.post(url, {...body}, {headers: {
    "Content-Type": "application/json",
  }},);
  console.log("RESPONSE======>", response.data);
}
  return (
    <div className="App">
      <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
      <button onClick={fetchAxios}>submit</button>
    </div>
  );
}

export default App;
