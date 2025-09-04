import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

type Restaurant = {
  info: {
    id: string;
    name: string;
    cuisines: string[];
    costForTwo: string;
    cloudinaryImageId: string;
  };
};
const Body = () => {
  const [listOfRes, setListOfRes] = useState<Restaurant[]>([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.14630&lng=79.08490&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const list = await data.json();
    const con =
      list?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRes(con);
    console.log(con);
  };

  useEffect(() => {
    fetchData();
  }, [listOfRes]);

  if (listOfRes.length === 0) return <Shimmer />;
  return (
    <div className="flex flex-wrap gap-10 justify-evenly mt-8 bg-[#FFFFED]">
      {listOfRes.map((res) => (
        <RestaurantCard key={res?.info?.id} info={res.info} />
      ))}
    </div>
  );
};
export default Body;
