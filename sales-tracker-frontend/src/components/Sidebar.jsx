import React from "react";
import logo from "../assets/trend.png"
import { PanelLeftOpen } from "lucide-react";

function Sidebar(){
    return (
        <>
            <aside className="bg-[#3B38A0] h-full p-[15px] text-white">
                <div className="flex items-center gap-[10px]">
                    <img src={logo} alt="logo" className="w-[40px] h-[40px] rounded-full" />
                    <span className="font-bold text-[20px]">SalesTracker</span>
                    <div className="p-[5px] bg-[#B2B0E8] rounded-md"><PanelLeftOpen size={20} /></div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;