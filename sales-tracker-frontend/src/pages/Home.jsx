import React from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

function Home(){
    return (
        <>
            <div className="grid grid-cols-[1fr_4fr] grid-rows-[75px_4fr] gap-[15px]">
                <div className="col-start-2 row-start-1">
                    <Navbar />
                </div>
                <div className="w-full h-[100vh] col-start-1 row-start-1 row-span-full">
                    <Sidebar />
                </div>
                <div className="col-start-2 row-start-2">
                    teststsstst
                </div>
            </div>
        </>
    );
}

export default Home;