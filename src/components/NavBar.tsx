import { Link } from "react-router";



const NavBar = () =>{
    return (
        <div className="w-full bg-[#FFA500] h-20 flex items-center justify-between">
              <div>
                  <h1 className="mx-8 font-bold text-xl cursor-pointer">𝓜𝓞𝓓𝓓𝓨  𝓑𝓘𝓣𝓔𝓢</h1>
              </div>
              <div className="mx-8">
                <ul className="flex gap-5  text-lg">
                    <li className="hover:bg-[#FFFFED] p-4 rounded-lg cursor-pointer"><Link to='/cart'></Link>𝓒𝓐𝓡𝓣</li>
                    <li className="hover:bg-[#FFFFED] p-4 rounded-lg cursor-pointer"><Link to='/about'>𝓐𝓑𝓞𝓤𝓣</Link></li>
                    <li className="hover:bg-[#FFFFED] p-4 rounded-lg cursor-pointer"><Link to='contact'>𝓒𝓞𝓝𝓣𝓐𝓒𝓣</Link></li>
                </ul>
              </div>
        </div>
    )
}

export default NavBar;