import React, { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

const useAxios = (baseURL) => {
  const [data, setData] = useState([])
  async function addData(suffix) {
    try{
      let res;
      if (suffix){
        res = await axios.get(`${baseURL}${suffix}/`)
      } else {
        res = await axios.get(baseURL)
      }
      setData(cards => [...cards, {...res.data, id: uuid()}])
    } catch(e){
      console.error('error fetching data:', e)
    }
    
  }
  return [data, addData]
}

export default useAxios