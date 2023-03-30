import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Card = () => {

    const [data, setData] = useState([]);

    useEffect (() => {
           fetch ('data.json')
           .then(res => res.json())
           .then(data => setData(data))
    }, []);
  return (
    <div>
       {
         data.map(singleData => <SingleCard
         key={singleData.id}
         singleData= {singleData}
         ></SingleCard>)
       }
    </div>
  );
};

export default Card;
