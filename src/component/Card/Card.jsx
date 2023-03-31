import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import Bookmark from "../Bookmark/Bookmark";

const Card = () => {

    const [data, setData] = useState([]);
    const [bookMark, setBookMark] = useState([]);
    const [readMark, setReadMark] = useState(0);

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
    
    const markAsRead = (read) =>{
      // console.log(typeof read);
      
      setReadMark(previousTotalRedTime => previousTotalRedTime + read);
    }

  return (
    <div className="flex w-10/12  mx-auto justify-between">
       <div className="my-5 ">
       {
         data.map(singleData => <SingleCard
         key={singleData.id}
         singleData= {singleData}
         handleBookMark={handleBookMark}
         markAsRead ={markAsRead}
         ></SingleCard>)
       }
       </div>
       <div>
          <h1 className=" w-96 mt-8 p-4 rounded-md font-bold text-success bg-base-300">Spent time on read: {readMark} min</h1>
          <Bookmark bookMark ={bookMark}></Bookmark>
          {
            bookMark.map(singleData => <li>
              key ={singleData.id}
              {singleData.blogTitle}</li> )
          }
       </div>
    </div>
  );
};

export default Card;
