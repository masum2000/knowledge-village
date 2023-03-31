import React from "react";

const Bookmark = (props) => {
  const { bookMark } = props;
  return (
    <div>
      <div className=" w-96 mt-8 p-4 rounded-md font-bold bg-info">
        <h1>Spent time on read: </h1>
      </div>
      <div className=" w-96 mt-3 p-4 rounded-md font-bold bg-base-300">
        <h1>Bookmarked Blogs: {bookMark.length}</h1>
      </div>

      <div className=" w-96 mt-3 p-4 rounded-md  bg-base-300">
        <h1>
          <span className="font-bold">Que-1:</span> What is the different
          between props and state in react?
        </h1>
        <p>
          <span className="font-bold">Ans:</span> Props and state are both used
          to handle data in a React component, but they serve distinct goals and
          have different characteristics. Props (short for properties) are
          read-only values given to a component by its parent component. State,
          on the other hand, is a component's private data store that can be
          changed by the component itself.
        </p>
        <h1>
          <span className="font-bold">Que-2:</span> How does useState work in
          react
        </h1>
        <p>
          <span className="font-bold">Ans:</span> useState is a React Hook that
          adds data to a useful component. It produces an array with two values:
          the current state and an update method. When the setter function is
          invoked, the Hook accepts an original state value as an input and
          returns a modified state value.
        </p>
        <h1>
          <span className="font-bold">
            Que-3: What is the usefull of useEffect beside dataload?
          </span>
        </h1>
        <p>
          <span className="font-bold">Ans:</span>The useEffect hook in React is
          useful for handling various kinds of side effects in addition to data
          loading. Here are some other common use cases:
        </p>
        <p>
          {" "}
          (1) Event listeners (2) Animations (3) Document title (4) API polling
          etc.
        </p>
        <h1>
          <span className="font-bold">Que-4:</span> How does React work?
        </h1>
        <p>
          <span className="font-bold">Ans:</span> React is a JavaScript library
          for building user interfaces. It uses a virtual DOM (Document Object
          Model) to efficiently update the actual DOM, which can be slow and
          expensive to manipulate directly.React works by using JavaScript to
          define components and their behavior, creating a virtual
          representation of the DOM, and efficiently updating the actual DOM
          based on changes to the virtual DOM.{" "}
        </p>
      </div>
    </div>
  );
};

export default Bookmark;
