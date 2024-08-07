import React from "react";
import ReactDOM from "react-dom/client"

/**
 <div id="parent">
    <div id = "child">
        <h1>Im an h1 tag</h1>
        <h2>Im an h2 tag</h2>
    </div>
    <div id = "child2">
        <h1>Im an h1 tag</h1>
        <h2>Im an h2 tag</h2>
    </div>
</div>
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);