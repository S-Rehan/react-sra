import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    
    const {
        cloudinaryImageId,
        name, 
        cuisines, 
        avgRating, 
        costForTwo,
        deliveryTime
    } = resData?.info;

    
    return (
        <div className="res-card" style={{backgroundColor: "#F5F5F5"}}>
            <img 
             className="res-logo" 
             src={CDN_URL + cloudinaryImageId}
             alt="res-logo" 
            />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} mins | {avgRating} ⭐ </h5>
        </div>
    );
};

export default RestaurantCard;