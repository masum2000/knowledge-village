import React from 'react';

const Bookmark = (props) => {
    const  {bookMark} = props;
    return (
        <div>
            <div className=" w-96 mt-8 p-4 rounded-md font-bold bg-info">
                <h1>Spent time on read: </h1>
                
            </div>
             <div className="mt-3 p-4 rounded-md font-bold bg-base-300">
             <h1>Bookmarked Blogs: {bookMark.length}</h1>
             </div>
        </div>
    );
};

export default Bookmark;