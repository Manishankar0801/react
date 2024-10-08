import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// Lazy Loading ---> don't load this grocery unless we go to this page
const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
      },
    ],
    errorElement: <Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

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
