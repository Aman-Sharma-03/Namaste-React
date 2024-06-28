import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/* 
Header
    - Logo
    - List/Nav Items (Right Side)
    - Cart
Body
    - Search bar
    - Resturant List
        - Restaurant Card
            - Image
            - Name
            - Rating
            - Tags/Cusines
Footer
    - Links
    - Copyrights
*/

// React.Fragment is a component exported by react - like an empty tag

// Config Driven UI (Good Practice Followed in Industry )

// const config = [
//   {
//     type: "carousel",
//     card: [
//       {
//         offerName: "50% off",
//       },
//       {
//         offerName: "No Delivery Charge",
//       },
//     ],
//   },
//   {
//     type: "resturants",
//     cards: [
//       {
//         name: "Pizza Time",
//         image:
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hme76sjbumnkzynaek5z",
//         cusines: ["Italian", "Pizza", "Burger", "Fast Food"],
//         rating: "4.3",
//       },
//       {
//         name: "Burger King",
//         image:
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hme76sjbumnkzynaek5z",
//         cusines: ["Italian", "Pizza", "Burger", "Fast Food"],
//         rating: "4.3",
//       },
//     ],
//   },
// ];


// Optional Chaining - ?


// props => properties = passing some data inside our component

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* {Outlet were we want to show the configuration} */}
      <Outlet />
      <Footer />
    </>
  );
};



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      }
    ]
  },
  
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



// Virtual Dom - Representation of DOM known as Virtual DOM
// It's for Reconsilation (difference algorithm (for tree, actual and virtual) that react uses which tells it what should be changed and what shouldn't in the tree)