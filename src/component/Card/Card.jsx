import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import Bookmark from "../Bookmark/Bookmark";
import Question from "../Questions/Question";
import { ToastContainer, toast } from "react-toastify";

const Card = () => {
  const [data, setData] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  const [readMark, setReadMark] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // Show the Toast
  const handleBookMark = (singleData) => {
    if (bookMark.find((b) => b.id === singleData.id)) {
      toast.error("This post already  added.", { autoClose: 1000 });
      const newBookmark = [...bookMark, singleData];
      setBookMark(newBookmark);
    } else {
      const newBookmark = [...bookMark, singleData];
      setBookMark(newBookmark);
      toast.success("Post added successfully.", { autoClose: 1000 });
    }
  };

  const markAsRead = (read) => {

    setReadMark((previousTotalRedTime) => previousTotalRedTime + read);
  };
// 
  return (
    <div className="lg:flex">
      <div className="my-5">
        {data.map((singleData) => (
          <SingleCard
            key={singleData.id}
            singleData={singleData}
            handleBookMark={handleBookMark}
            markAsRead={markAsRead}
          ></SingleCard>
        ))}
      </div>
{/* Show the spent time ,Bookmarked and question answer  */}
      <div>
        <h1 className=" lg:w-96 w-80 mx-auto  mt-8 p-4 rounded-md font-bold text-success bg-base-300">
          Spent Time on Read: {readMark} min
        </h1>
        <Bookmark bookMark={bookMark}></Bookmark>
        {bookMark.map((singleData) => (
          <div
            key={singleData.id}
            className=" lg:w-96 w-80 mx-auto  mt-3 p-4 rounded-md font-bold bg-base-300"
          >
            <h1> {singleData.blogTitle}</h1>
          </div>
        ))}
        <Question></Question>
      </div>
    </div>
  );
};

export default Card;
