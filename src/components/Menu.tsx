// import { useSelector } from "react-redux";

import { useSelector } from "react-redux";
import { RESIMG } from "../utils/constant";

type Info = {
  menu: {
    items: {
      name: string;
      cuisines: string[];
      id: string;
      costForTwo: string;
      cloudinaryImageId: string;
    };
  };
};

const Menu = () => {
  const menu = useSelector((store: Info) => store.menu.items);
  console.log(menu);
  const {name,cuisines,cloudinaryImageId,costForTwo,id}=menu[0];

  return <div>
    {name}
    {cuisines}
    {costForTwo}
    {id}
    <img src={RESIMG+cloudinaryImageId}></img>

  </div>;
};

export default Menu;
