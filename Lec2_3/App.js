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
* Tree Shaking - Remove Un-wanted
* 
*/


// babel - this is compiler for next generation javascript(React)


import React from "react";
import ReactDOM from "react-dom/client";


// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//     key: "h2"
//   },
//   "Heading 2"
// );

// JSX => React.createElement => Object => HTML(DOM)
// babel converts jsx to React.createElement


{/* <div class="header">
 <h1>Namaste React</h1>
 <ul>
    <li>About Us</li>
    <li>Support</li>
    <li>Home</li> 
  </ul>
</div>; */}
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [
//     React.createElement(
//       "h1",
//       {},
//       "Namaste React"
//     ),
//     React.createElement(
//       "ul", {},
//       [
//         React.createElement("li", {}, "About Us"),
//         React.createElement("li", {}, "Home"),
//         React.createElement("li", {}, "Support"),
//       ]
//     ),
//   ]
// );

// JSX ??? Javascript XML? No, but can say

/*
* Readability
* Maintainabilty
* Syntactical Sugar coat
* Developer Experience
* Less code
* Not Repition
*/



// ReactElement - OBJECT


// React Component
// - Functional Components - NEW - Function
// - Class Based Components - OLD (Imp for interview and life cycle methods)

// THIS A REACT ELEMENT
const heading1 = (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
  // this is not html inside javascript, its html like syntax
  // babel interprets this html like syntax(JSX) and then converts this into html code
);

// FUNCTIONAL COMPONENTS

// returns the JSX code or React element (both are same, no?)
// name of component starts with the capital letter (Convention) - not mandatory but good practice to use

// If it returns a JSX code then it becomes react component else it's just some jsx code

// THIS IS REACT COMPONENT
const Heading = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);
const HeaderComponent = function() {
  return (
    <>
    
      <Heading /> {/* Component Composition - Component inside a component*/}
      {Heading()}
      {heading1}
      <h1>Namaste React Functional Components</h1>
      <h2>This is a h2 tag</h2>
    </>
  );
}
const HeaderComponent1 = () =>  (
  <>
    <h1>Namaste React Functional Components</h1>
    <h2>This is a h2 tag</h2>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
// root.render(heading1);