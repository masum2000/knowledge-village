import React from "react";

const Question = () => {
  return (
    <div className=" lg:w-96  mx-auto  my-3 p-4 rounded-md  bg-base-300">
      <div >
        <h1>
          <span className="font-bold">
            Que-1: What is the different between props and state in react ?
          </span>
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
          <span className="font-bold">
            Que-2: How does useState work in react ?
          </span>
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
            Que-3: What is the usefull of useEffect beside dataload ?
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
          <span className="font-bold">Que-4: How does React work ?</span>
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

export default Question;
