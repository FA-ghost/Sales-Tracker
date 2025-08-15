import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Graph from "../components/graph.jsx";
import { Banknote, Package2, ShoppingCart, TriangleAlert } from "lucide-react";

function Home(){
    const [isOpen, setIsOpen] = useState(true);

    const updateIsOpen = () => setIsOpen(!isOpen);

    const dummyData = [5, 10, 8, 15, 12, 20, 18, 25, 22, 30];

    return (
        <>
            <div className="grid grid-rows-[75px_1fr] gap-[15px] transition-[grid-template-columns] duration-300 ease-in-out"
            style={{
                        gridTemplateColumns: isOpen ? "250px 1fr" : "70px 1fr",
                    }}
            >
                <div className="col-start-2 row-start-1">
                    <Navbar />
                </div>
                <div className="w-full col-start-1 row-start-1 row-span-full">
                    <Sidebar update={updateIsOpen} isOpen={isOpen} />
                </div>
                <div className="col-start-2 row-start-2 p-[10px]">
                    <div className="grid grid-rows-[120px_1fr_1fr] grid-cols-[1fr_1fr] gap-[15px]">
                        <div className="col-start-1 row-start-1 col-span-full flex justify-between text-white">
                            <div className="flex flex-col gap-[5px] w-[23%] rounded-md p-[10px] bg-[#3B38A0]/80">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Total revenue</span>
                                    <div className="bg-[#6366F1] p-[5px] rounded-md ">
                                        <Banknote size={30} />
                                    </div> 
                                </div>
                                <span className="font-semibold text-[20px]">20000</span>
                                <span>20000</span>
                            </div>
                            <div className="flex flex-col gap-[5px] w-[23%] rounded-md p-[10px] bg-[#3B38A0]/80">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Total Orders</span>
                                    <div className="bg-[#8B5CF6] p-[5px] rounded-md">
                                        <ShoppingCart size={30} />
                                    </div>
                                </div>
                                <span className="font-semibold text-[20px]">200000</span>
                                <span>200000</span>
                            </div>
                            <div className="flex flex-col gap-[5px] w-[23%] rounded-md p-[10px] bg-[#3B38A0]/80">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Total Products</span>
                                    <div className="bg-[#06B6D4] p-[5px] rounded-md">
                                        <Package2 size={30} />
                                    </div>
                                </div>
                                <span className="font-semibold text-[20px]">20000</span>
                                <span>30000</span>
                            </div>
                            <div className="flex flex-col gap-[5px] w-[23%] rounded-md p-[10px] bg-[#3B38A0]/80">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Low Stock Alert </span>
                                    <div className="bg-[#EF4444] p-[5px] rounded-md">
                                        <TriangleAlert size={30} />
                                    </div>
                                </div>
                                <span className="font-semibold text-[20px]">200000</span>
                                <span>200000</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[5px] col-start-1 col-span-full row-start-2 shadow-md w-full p-[15px] rounded-md bg-[#E0E0E6]">
                            <span className="font-semibold">Revenue Trend</span>
                            <Graph data={dummyData}  width={950} height={500} marginTop={20} marginRight={20} marginBottom={20} marginLeft={20} />
                        </div>
                        <div className="flex gap-[15px] row-start-3 col-start-1 col-span-full">
                            <div className="flex flex-col gap-[5px] w-full p-[15px] rounded-md bg-[#E0E0E6] h-[83%]">
                                <span className="font-semibold">Revenue vs Orders</span>
                                <Graph data={dummyData} width={450} height={400} marginTop={20} marginRight={20} marginBottom={20} marginLeft={20} />
                            </div>
                            <div className="flex flex-col gap-[5px] w-full p-[15px] rounded-md bg-[#E0E0E6] h-[83%]">
                                <span className="font-semibold">Growth Trend</span>
                                <Graph data={dummyData} width={450} height={400} marginTop={20} marginRight={20} marginBottom={20} marginLeft={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;