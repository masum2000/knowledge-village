import React from "react";

const SingleCard = (props) => {
  const { name, blogTitle, readTime, publishDate, coverImage, authorImage } =
    props.singleData;

  const handleBookMark = props.handleBookMark;
  const markAsRead = props.markAsRead;

  return (
    <div>
{/* call the all data from data.json file */}
      <div className="mt-4 mx-auto card bg-base-100 shadow-2xl">
        <figure>
          <img className="w-full" src={coverImage} alt="Shoes" />
        </figure>
        <div className="flex justify-between">
          <div className="m-3 flex">
            <div>
              <img className="w-10 " src={authorImage} />
            </div>
            <div className="ml-3">
              <p className="font-bold">{name}</p>
              <p>{publishDate}</p>
            </div>
          </div>
          <div className=" m-3 flex">
            <div>
              <p>{readTime} min read </p>
            </div>
            <div>
              <span
                onClick={() => handleBookMark(props.singleData)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{blogTitle}</h2>
          <p>#beginners #programming</p>
          <div
            onClick={() => markAsRead(readTime)}
            className="cursor-pointer text-success font-bold"
          >
            <button>Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
