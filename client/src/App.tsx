import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.brands);
  };

  // call the function

  useEffect(() =>{
    fetchAPI();
  }, [])

  return (
    <>
      
    </>
  );
}

export default App;
