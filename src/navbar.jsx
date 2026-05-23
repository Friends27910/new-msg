
import propic from "./assets/profile.jpg"
import { FaInstagram,FaYoutube,FaHome } from "react-icons/fa";
function Nav(){
return(
    <>
    <nav>
       <div className="nav flex items-center justify-between bg-blue-300 rounded-2xl">
        <div className="profilepic">
            <img src={propic} className="rounded-3xl size-15"/>
        </div>
        <div className="list  mx-10">
            <ul className="flex pr-10 gap-10">
                <li><a href="#"><FaHome className="size-9"/></a></li>
                <li><a href="https://www.youtube.com/@aveon21"><FaYoutube className="size-9"/></a></li>
                <li ><a href="https://www.instagram.com/aveon.py/"><FaInstagram  className="size-9"/></a></li>
            </ul>
        </div>
       </div>
    </nav></>
)}
export default Nav