import { useState, useEffect } from "react";
import Accordian from "./Accordian";

const RestaurantMenu = () => {

    
    return (
       <div className="menu"> 
           <div className="menu-outer">
               <div className="menu-info">
                    <h3>Restaurant Name</h3>
                </div>
                <div className="menu-det">
                    <p>Cuisines  |  Cost for two  |  Rating: 4.5  |  Delivery Time: 30 mins</p>
                </div>
                <div className="menu-items">
                    <Accordian />
                </div>
            </div>    
        </div> 
    );
};

export default RestaurantMenu;