import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import Bookmark from "../Bookmark/Bookmark";
import PreviousMap from "postcss/lib/previous-map";

const Card = () => {

    const [data, setData] = useState([]);
    const [bookMark, setBookMark] = useState([]);
    const [readMark, setReadMark] = useState([]);

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
    
    const handleMarkRead = (newReadTime) =>{
      setReadMark = (previousTotalRedTime => previousTotalRedTime + newReadTime);
    }

  return (
    <div className="flex w-10/12  mx-auto justify-between">
       <div className="my-5 ">
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
