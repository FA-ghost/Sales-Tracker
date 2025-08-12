import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

function Home(){
    const [isOpen, setIsOpen] = useState(true);

    const updateIsOpen = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="grid grid-rows-[75px_4fr] gap-[15px] transition-[grid-template-columns] duration-300 ease-in-out"
            style={{
                        gridTemplateColumns: isOpen ? "250px 1fr" : "70px 1fr",
                    }}
            >
                <div className="col-start-2 row-start-1">
                    <Navbar />
                </div>
                <div className="w-full h-[100vh] col-start-1 row-start-1 row-span-full">
                    <Sidebar update={updateIsOpen} isOpen={isOpen} />
                </div>
                <div className="col-start-2 row-start-2">
                    teststsstst
                </div>
            </div>
        </>
    );
}

export default Home;