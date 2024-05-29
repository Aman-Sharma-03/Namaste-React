/*
* HMR - Hot Module Replacement (Hot Reloading)
* Parcel has File Watcher Algorithms written in C++ as C++ is really fast
* 
* npx parcel build index.html - to define the type of build(production) 
* BUNDLING
* MINIFY
* CLEANING THE CODE - Removing the console.log
* Dev and Prod Build
* Super Fast build algorithms
* Image Optimizations
* Caching while Development
* Compression
* Compatible with older versions of browser - adds polyfills(A piece of JS code that provide old browser the functionality of new browsers)
* Provides HTTPS functionality on dev
* Consistent Hashing Algorithm
* Zero Config
* 
* PARSER HAS TRANSITIVE DEPENDENCIES (dependencies which depends on other dependecies which depends on other dependencies and so on)
* "WE HAVE A PACKAGE MANAGER WHICH HANDLES AND TAKES CARE OF OUR TRANSITIVE DEPENDENCIES OF OUT CODE"
* 
* 
*/


import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);