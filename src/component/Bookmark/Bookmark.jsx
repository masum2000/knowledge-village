import React from "react";


const Bookmark = (props) => {

    
    const { bookMark } = props;
  return (
    <div>
      <div className=" lg:w-96 w-80 mx-auto mt-3 p-4 rounded-md font-bold bg-base-300">
        <h1>Bookmarked Blogs: {bookMark.length}</h1>
      </div>

      {/* <div className=" w-96 mt-3 p-4 rounded-md font-bold bg-base-300">
        <h1> {blogTitle}</h1>
      </div> */}

      
    </div>
  );
};

export default Bookmark;
