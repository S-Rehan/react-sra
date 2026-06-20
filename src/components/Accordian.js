import { useState } from "react";
import AccordianItem from "./Accordian-item";

const data = [
{
 title: "Recommended",
 body: "Recommended dish - (100% Halal) Fresh rumali loaded with diced chicken and salad. Loaded with egg based garlic mayonnaise and with a touch of in-house sauce. and a drizzle of BBQ sauce Contains egg"
},
{
 title: "Starters of the day",
 body: "(100% Halal) whole wheat tortilla loaded with diced chicken and salad. Loaded with egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg"
},
{
 title: "Breads",
 body: "Freshly baked bread, perfect for accompanying your meal. Our breads are made with high-quality ingredients and baked to perfection, offering a delicious and satisfying addition to your dining experience."
},
{
 title: "Beverages",
 body: "A refreshing drink to quench your thirst. Choose from a variety of flavors and enjoy a cool beverage with your meal."
},
];


const Accordian = () => {

    const [openPanelIndex, setOpenPanelIndex] = useState(0);

    return (
        <div className="accordian">
            {data.map((item, index) => (
                <AccordianItem
                    key={index}
                    title={item.title}
                    body={item.body}
                    isOpen={index === openPanelIndex ? true : false}
                    setIsOpen={() => {index === openPanelIndex ? setOpenPanelIndex(null) : setOpenPanelIndex(index);
                    }}
                />
            ))}
        </div>
    );
};

export default Accordian;