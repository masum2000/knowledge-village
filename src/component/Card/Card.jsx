import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import Bookmark from "../Bookmark/Bookmark";

const Card = () => {

    const [data, setData] = useState([]);
    const [bookMark, setBookMark] = useState([]);

    useEffect (() => {
           fetch ('data.json')
           .then(res => res.json())
           .then(data => setData(data))
    }, []);
  
    const handleBookMark = (singleData) =>{
      // console.log(singleData)
      const newBookMark = [...bookMark, singleData];
      setBookMark (newBookMark);
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
       <div>
          <Bookmark bookMark ={bookMark}></Bookmark>
       </div>
    </div>
  );
};

export default Card;
