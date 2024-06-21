import React from "react";
import Navbar from "../components/Navbar";
import Mastercraft from "../assets/logo-mastercraft.svg";
import { IoIosBookmark } from "react-icons/io";

const Home = () => {
	return (
		<div>
			<div className="backGround h-[300px] lg:h-[400px]">
				<Navbar />
			</div>
			<div className="bg-Background min-h-screen flex flex-col items-center px-7 md:px-10 lg:px-0">
				<div className="rounded-lg p-10 text-center relative -top-20 bg-white w-full lg:w-[850px]">
					<div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
						<img src={Mastercraft} alt="" />
					</div>
					<h1 className="font-bold text-xl lg:text-4xl my-5">
						Mastercraft Bamboo Monitor Riser
					</h1>
					<p className="text-sm font-medium lg:text-xl text-gray-400 mb-9">
						A beautiful & handcrafted monitor stand to reduce neck
						and eye strain.
					</p>
					<div className="flex gap-2 justify-center md:gap-0 md:justify-between">
						<button className="bg-ButtonBackground text-white rounded-3xl text-sm md:text-base px-5 md:px-10 md:py-3 hover:bg-ButtonHover">
							Back this project
						</button>
						<div className="flex items-center bg-Background rounded-3xl">
							<span className="text-Background bg-black rounded-full p-5">
								<IoIosBookmark />
							</span>
							<span className="px-5 font-medium text-gray-400 hidden md:block">
								Bookmark
							</span>
						</div>
					</div>
				</div>
				<div className="bg-white w-full lg:w-[850px] rounded-lg p-10">
					<div className="flex flex-col md:flex-row gap-5 md:gap-16 text-center">
						<div className="border-b md:border-b-0 md:border-r pb-5 md:pb-0 md:pr-10">
							<h1 className="font-bold text-4xl mb-2">$89,914</h1>
							<p className="text-gray-400 md:text-lg font-medium">
								of $100,000 backed
							</p>
						</div>
						<div className="border-b md:border-b-0 md:border-r pb-5 md:pb-0 md:pr-10">
							<h1 className="font-bold text-4xl mb-2">5,007</h1>
							<p className="text-gray-400 md:text-lg font-medium">
								total backers
							</p>
						</div>
						<div>
							<h1 className="font-bold text-4xl mb-2"> 56</h1>
							<p className="text-gray-400 md:text-lg font-medium">
								days left
							</p>
						</div>
					</div>
					
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Home;
