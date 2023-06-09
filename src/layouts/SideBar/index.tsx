import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import logout from '../../services/auth/logout'
export default function SideBar(){
    return (
        <div className="sideBar select-none h-full flex flex-column justify-center items-end pb-[10px]">
            <div className="avatar-side flex justify-center">
                 <div className="side-menu">
                     <ul>
                         <li>
                             <div className="circleK">
                                 <CgProfile className="text-[20px]"/>
                             </div>
                             <span>Trang cá nhân</span>
                         </li>
                         <li onClick={logout}>
                             <div className="circleK">
                                 <IoIosLogOut className="text-[20px]"/>
                             </div>
                             <span>Đăng xuất</span>
                         </li>
                     </ul>
                 </div>
                 <img onClick={() => {
                        const sideMenu = document.querySelector(".side-menu");
                        sideMenu?.classList.toggle("show");
                 }} className="rounded-full avatar" src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg" alt="avatar"/>
            </div>
        </div>
    )
}