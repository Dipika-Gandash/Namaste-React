import React from "react";
import ReactDOM from "react-dom/client";

const element = <span>React ELement</span>;

/* ** Header **
//  - logo 
//  - Nav Items 
// ** Body **
//  - Search Bar
//  - ** Restraunt Container
//    - Restraunt Card
        -Image
        -Name of Res, Start Rating , cuisine etc
// ** Footer **
//  - Copyright
//  - Links
//  - Address
//  - Contact 
// 
// */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-drink-hand-drawn-flat-healthy-food-logo_23-2149632256.jpg?t=st=1743955138~exp=1743958738~hmac=9ed27939043437f0855e1b970069d977dc42b67686069246b981607f13b7c02c&w=826"
        />
      </div>

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

const resList = [
  {
    id: 1,
    resName: "Meghna Foods",
    cuisine: "Biryani, North Indian, Asian",
    rating: "4.2",
    deliveryTime: "38 minutes",
    imgUrl:
      "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19992.jpg?uid=R106922817&ga=GA1.1.1274319277.1743955100&semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    resName: "KFC",
    cuisine: "Fried Chicken, Burger, Fast Food",
    rating: "4.0",
    deliveryTime: "30 minutes",
    imgUrl:
      "https://img.freepik.com/premium-photo/fried-chicken-french-fries-wooden-plate_293060-13279.jpg?w=740",
  },
  {
    id: 3,
    resName: "Pizza Hut",
    cuisine: "Pizza, Italian",
    rating: "4.1",
    deliveryTime: "25 minutes",
    imgUrl:
      "https://img.freepik.com/free-photo/pepperoni-pizza-with-homemade-ingredients_140725-7296.jpg?w=740&t=st=1685542400~exp=1685546000~hmac=3ab3a5e621d94ea17e4573a8e0faaa0f60d3b5eecbd0cabea0b7ed57ff9f80e5",
  },
  {
    id: 4,
    resName: "Domino's",
    cuisine: "Pizza, Garlic Bread",
    rating: "3.9",
    deliveryTime: "35 minutes",
    imgUrl:
      "https://img.freepik.com/premium-photo/italian-pizza-served-wooden-plate_123827-20231.jpg?w=740",
  },
];


const RestrauntCard = (props) => {
  const {id, resName, cuisine, rating, deliveryTime, imageUrl} = props;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={imageUrl}
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
      
        <RestrauntCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};

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
