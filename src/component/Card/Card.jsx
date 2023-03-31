import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Card = () => {

    const [data, setData] = useState([]);

    useEffect (() => {
           fetch ('data.json')
           .then(res => res.json())
           .then(data => setData(data))
    }, []);
  
    const handleBookMark = (singleData) =>{
      console.log(singleData)
    }

  return (
    <div className="flex w-10/12  mx-auto justify-between">
       <div className="mt-5 ml-7">
       {
         data.map(singleData => <SingleCard
         key={singleData.id}
         singleData= {singleData}
         handleBookMark={handleBookMark}
         ></SingleCard>)
       }
       </div>
       <div className="mt-4">
           <h1>hello world</h1>
       </div>
    </div>
  );
};

export default Card;