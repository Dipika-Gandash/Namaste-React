import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setlistOfRestaurants] = useState(resObj) // State Variable

  let listOfRestaurantsJS = [
    {
      info: {
        id: "367769",
        name: "Lucky Restaurant",
        cloudinaryImageId: "qems028i3da5rxf81rbp",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹300 for two",
        deliveryTime: 34,
        cuisines: ["Biryani", "Tandoor"],
        avgRating: 3.8,
        parentId: "535180",
        avgRatingString: "4.1",
        totalRatingsString: "82K+",
      },
    },
    {
      info: {
        id: "142670",
        name: "Shah Ghouse Hotel & Restaurant",
        cloudinaryImageId: "bk26jkkqpg55veii0aj9",
        locality: "Santh Nirankari Satsang Bhavan",
        areaName: "Banjara Hills",
        costForTwo: "₹350 for two",
        deliveryTime: 27,
        cuisines: ["Biryani", "Chinese", "Tandoor", "Mughlai"],
        avgRating: 4.3,
        parentId: "19271",
        avgRatingString: "4.3",
        totalRatingsString: "73K+",
      },
    },
    {
      "info": {
        "id": "108986",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/c17b5848-b856-46bb-97b5-0dc437da4f3f_108986.JPG",
        "locality": "KMIT",
        "areaName": "Narayanguda",
        "costForTwo": "₹120 for two",
        "deliveryTime": 31,
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.6",
        "totalRatingsString": "22K+"
      },
     
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            
           const filteredList = listOfRestaurants =  listOfRestaurants.filter(
             (res) => res.info.avgRating > 4.5
            );
          setlistOfRestaurants(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
