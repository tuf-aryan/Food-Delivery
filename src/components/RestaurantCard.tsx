import { useNavigate} from "react-router";
import { RESIMG } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/menuSlice";

type Info ={
    name:string;
    cuisines:string[],
    id:string;
    costForTwo:string;
    cloudinaryImageId:string
}

const RestaurantCard = ({info}:{info:Info}) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {name,cuisines,costForTwo,cloudinaryImageId,id} = info;

    const handleMenu = () =>{
        dispatch(addItem(info));
        navigate('/restaurant/'+id);
    }
    return (
        <div className="p-4 border bg-[#FFA500] h-78 w-72 relative" onClick={handleMenu}>
             <h1 className="p-2 bg-purple-800 text-white w-16 h-8 absolute">ADD➕</h1>
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