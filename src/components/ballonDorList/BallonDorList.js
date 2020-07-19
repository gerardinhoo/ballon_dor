import React, {useState} from 'react';
import "./ballonDorList.css";
import BallonDor from '../ballonDor/BallonDor';
import {data} from "../../data";


const BallonDorList = () => {
  const [ballonDorData, setBallonDorData] = useState(data);

  return (
     <div>
       {
         ballonDorData.map(dor => {
           return <BallonDor key={dor.id} dor={dor} />
         })
       }
     </div>     
  )
}

export default BallonDorList;