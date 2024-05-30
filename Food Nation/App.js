import React from "react";
import ReactDOM from "react-dom/client";

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

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://www.48hourslogo.com/48hourslogo_data/2020/07/14/98820_1594658396.jpg"
    />
  </a>
);
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const restaurantlist = [
  {
    id: "509125",
    name: "Pizza Time",
    cloudinaryImageId: "hme76sjbumnkzynaek5z",
    locality: "Kailash Nagar Road",
    areaName: "Ludhiana Junction",
    costForTwo: "₹200 for two",
    cuisines: [
      "Italian",
      "Pizzas",
      "Burgers",
      "Fast Food",
      "Snacks",
      "Pastas",
      "Rolls & Wraps",
      "Salads",
      "Desserts",
    ],
    avgRating: 4.5,
    veg: true,
    parentId: "724",
    avgRatingString: "4.5",
    totalRatingsString: "100+",
    sla: {
      deliveryTime: 42,
      lastMileTravel: 11.8,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "11.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-05-30 22:20:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "491237",
    name: "Aman Uk Vaishno Dhaba",
    cloudinaryImageId: "mypjmftawvd4lbnhrnc2",
    locality: "Bhamian Road",
    areaName: "Gk Estate",
    costForTwo: "₹200 for two",
    cuisines: ["North Indian", "Indian"],
    avgRating: 4.3,
    veg: true,
    parentId: "294631",
    avgRatingString: "4.3",
    totalRatingsString: "50+",
    sla: {
      deliveryTime: 38,
      lastMileTravel: 11.7,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "11.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-05-30 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "532198",
    name: "MDG Paranthe Wale",
    cloudinaryImageId: "v8c496jyfrjbr106qgge",
    locality: "Khalsa Colony",
    areaName: "Sector 32",
    costForTwo: "₹150 for two",
    cuisines: ["Snacks"],
    avgRating: 3.2,
    parentId: "320267",
    avgRatingString: "3.2",
    totalRatingsString: "9",
    sla: {
      deliveryTime: 48,
      lastMileTravel: 11.8,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "11.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-05-30 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "514374",
    name: "Kalsi Snack Bar",
    cloudinaryImageId: "dosggryjeu1239u7wtjg",
    locality: "Rahon Road",
    areaName: "Samrala Chowk",
    costForTwo: "₹100 for two",
    cuisines: ["Chinese", "Italian-American", "Snacks"],
    veg: true,
    parentId: "307559",
    avgRatingString: "--",
    sla: {
      deliveryTime: 54,
      lastMileTravel: 10.2,
      serviceability: "SERVICEABLE",
      slaString: "50-55 mins",
      lastMileTravelString: "10.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-05-30 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹50 OFF",
      subHeader: "ABOVE ₹199",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "726580",
    name: "SANT FAST FOOD",
    cloudinaryImageId: "5e293c94dc18f34784f59c9eec2f70a7",
    locality: "Prem VIhar",
    areaName: "Samrala Chowk",
    costForTwo: "₹350 for two",
    cuisines: ["Chinese", "Snacks", "Pizzas"],
    avgRating: 3.3,
    veg: true,
    parentId: "177593",
    avgRatingString: "3.3",
    totalRatingsString: "4",
    sla: {
      deliveryTime: 45,
      lastMileTravel: 11.1,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "11.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-05-30 22:50:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "815420",
    name: "Pezzo Perfetto",
    cloudinaryImageId: "097e6429b742a80845c94a8cde747371",
    locality: "Wakya Gopal Nagar",
    areaName: "Samrala Chowk",
    costForTwo: "₹250 for two",
    cuisines: ["Burgers", "Chinese"],
    parentId: "485903",
    avgRatingString: "NEW",
    sla: {
      deliveryTime: 45,
      lastMileTravel: 11.5,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "11.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-05-31 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "576835",
    name: "The Foodies Corner",
    cloudinaryImageId: "dcbo65v9awrdwystarl3",
    locality: "Tibba Road",
    areaName: "Sector 32",
    costForTwo: "₹150 for two",
    cuisines: ["Chinese", "Burgers", "Fast Food", "Snacks"],
    avgRating: 3.8,
    veg: true,
    parentId: "208599",
    avgRatingString: "3.8",
    totalRatingsString: "7",
    sla: {
      deliveryTime: 45,
      lastMileTravel: 11.6,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "11.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-05-30 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "809891",
    name: "Btech Food Junction",
    cloudinaryImageId: "0489903ae358d340e0f9922465a797aa",
    locality: "Mohalla Satkartar Nagar",
    areaName: "Samrala Chowk",
    costForTwo: "₹200 for two",
    cuisines: ["Indian"],
    avgRating: 3.8,
    parentId: "483108",
    avgRatingString: "3.8",
    totalRatingsString: "3",
    sla: {
      deliveryTime: 45,
      lastMileTravel: 11.4,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "11.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-05-30 22:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
  },
];

// Optional Chaining
const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

// props => properties = passing some data inside our component
const Body = () => {
  return (
    <div className="restaurant-list">
        {
            restaurantlist.map((restaurant) => {
                return <ResturantCard {...restaurant} key={restaurant.id}/>
            })
        }
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



// Virtual Dom - Representation of DOM known as Virtual DOM
// It's for Reconsilation (difference algorithm (for tree, actual and virtual) that react uses which tells it what should be changed and what shouldn't in the tree)