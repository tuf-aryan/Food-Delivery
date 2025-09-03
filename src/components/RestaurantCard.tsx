import { RESIMG } from "../utils/constant";

type Info ={
    name:string;
    cuisines:string[],
    id:string;
    costForTwo:string;
    cloudinaryImageId:string
}

const RestaurantCard = ({info}:{info:Info}) =>{
    const {name,cuisines,costForTwo,cloudinaryImageId} = info;
    return (
        <div className="p-4 border bg-[#FFA500] h-78 w-72">
            <div>
                <img src={RESIMG+cloudinaryImageId} className="w-72 h-44"></img>
            </div>
            <div>
                <h1>{name}</h1>
                <p>{cuisines.toString()}</p>
                <p>{costForTwo}</p>
            </div>
          
        </div>
    )
}

export default RestaurantCard;