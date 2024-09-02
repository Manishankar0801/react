import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// const Title = () => <h1>I just created h1 tag using JSX🚀</h1>;

// // React Component
// // Class Based component and FUnctional Component

// // React Functional Component => Functional components are simpler and are defined as JavaScript functions.
// // COmponent composititon
// const HeadingComponent = () => (
//   <div>
//     <Title/>
//     <h1>React Functional components</h1>
//   </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

// JSX -> is not HTML in JS -> HTML/XML like syntax
// JSX code is transpiled before it reaches JS -> it is done by parcel -> babel
// JSX => converted to React.createElement => ReactElement-JS(object) => HTMLElement(render)
// JSX attributes are camelCase
// For multiple lines wrap it in paranthesis
// JSX => Babel transpiles it to React.createElement
// const jsxHeading = <h1 id="heading">I just created h1 tag using JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//  <div id="parent">
//     <div id = "child">
//         <h1>Im an h1 tag</h1>
//         <h2>Im an h2 tag</h2>
//     </div>
//     <div id = "child2">
//         <h1>Im an h1 tag</h1>
//         <h2>Im an h2 tag</h2>
//     </div>
// </div>
//
//  creating html tag using react element
// React.createElement is a react element which is an object, it is rendered as a HTML element
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Im an h1 tag"),
//     React.createElement("h2", {}, "Im an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Im an h1 tag"),
//     React.createElement("h2", {}, "Im an h2 tag"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
