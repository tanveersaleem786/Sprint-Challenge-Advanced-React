import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetch = (url) => {
  
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get(url)
    .then( response => {
     // console.log(response.data);
     setData(response.data);
    })
    .catch( err => {
      console.log("Error:", err);
    });
  }, []);

  return [data];
}
