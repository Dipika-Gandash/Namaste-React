import React from "react";
import ReactDOM from "react-dom/client";

const element = <span>React ELement</span>

// React functional Component

const Title = function () {
     return (
          <>
          {element}
          <h1>This is my Title</h1>
          </>
     )
}

const number= 1000;

const HeadingComponent = () => {
  return (
    <div id="container">
     <Title />
      <h1 className="head">Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
