import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Mastercraft from "../assets/logo-mastercraft.svg";
import { IoIosBookmark } from "react-icons/io";
import Modal from "../components/Modal";

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div>
			<div className="backGround h-[300px] lg:h-[400px]">
				<Navbar />
			</div>
			<div className="bg-Background min-h-screen flex flex-col items-center px-7 md:px-10 lg:px-0">
				<div className="rounded-lg border p-5 md:p-10 text-center relative -top-20 bg-white w-full lg:w-[850px]">
					<div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
						<img src={Mastercraft} alt="" />
					</div>
					<h1 className="font-bold text-xl lg:text-4xl my-5">
						Mastercraft Bamboo Monitor Riser
					</h1>
					<p className="text-sm lg:text-xl text-gray-400 mb-9">
						A beautiful & handcrafted monitor stand to reduce neck
						and eye strain.
					</p>
					<div className="flex gap-2 justify-center md:gap-0 md:justify-between">
						<button
							className="bg-ButtonBackground font-medium text-white w-full md:w-fit rounded-3xl text-sm md:text-base  md:px-10 md:py-3 hover:bg-ButtonHover"
							onClick={() => setShowModal(true)}
						>
							Back this project
						</button>
						<Modal
							showModal={showModal}
							setShowModal={setShowModal}
						/>
						<div className="flex items-center bg-Background rounded-3xl">
							<span className="text-Background bg-black rounded-full p-5">
								<IoIosBookmark />
							</span>
							<span className="px-5 font-bold text-gray-400 hidden md:block">
								Bookmark
							</span>
						</div>
					</div>
				</div>
				<div className="bg-white border w-full lg:w-[850px] rounded-lg p-5 md:p-10 relative -top-12">
					<div className="flex flex-col md:flex-row gap-5 md:gap-16 text-center md:text-left">
						<div className="border-b md:border-b-0 md:border-r pb-5 md:pb-0 md:pr-10">
							<h1 className="font-bold text-4xl mb-2">$89,914</h1>
							<p className="text-gray-400 md:text-lg">
								of $100,000 backed
							</p>
						</div>
						<div className="border-b md:border-b-0 md:border-r pb-5 md:pb-0 md:pr-10">
							<h1 className="font-bold text-4xl mb-2">5,007</h1>
							<p className="text-gray-400 md:text-lg">
								total backers
							</p>
						</div>
						<div>
							<h1 className="font-bold text-4xl mb-2"> 56</h1>
							<p className="text-gray-400 md:text-lg">
								days left
							</p>
						</div>
					</div>
					<div className="w-full">
						<div className="w-full bg-Background rounded-full h-3 mt-10">
							<div className="bg-ButtonBackground h-3 rounded-full w-[70%]"></div>
						</div>
					</div>
				</div>
				<div className="bg-white w-full lg:w-[850px] border relative -top-4 p-5 md:p-10 rounded-lg">
					<h1 className="font-bold text-xl mb-5 mt-5 md:mt-0 md:mb-10">
						About this project
					</h1>
					<p className="text-gray-400 md:text-lg mb-5">
						The Mastercraft Bamboo Monitor Riser is a sturdy and
						stylish platform that elevates your screen to a more
						comfortable viewing height. Placing your monitor at eye
						level has the potential to improve your posture and make
						you more comfortable while at work, helping you stay
						focused on the task at hand.
					</p>
					<p className="text-gray-400 md:text-lg ">
						Featuring artisan craftsmanship, the simplicity of
						design creates extra desk space below your computer to
						allow notepads, pens, and USB sticks to be stored under
						the stand.
					</p>
					<div className="border rounded-lg p-5 md:p-10 mt-10">
						<div className="flex flex-col gap-1 md:gap-0 md:flex-row justify-start md:justify-between md:items-center">
							<h1 className="font-bold md:text-xl">
								Bamboo Stand
							</h1>
							<p className="text-ButtonBackground font-medium">
								Pledge $25 or more
							</p>
						</div>
						<p className="text-gray-400 my-5 md:text-lg">
							You get an ergonomic stand made of natural bamboo.
							You've helped us launch our promotional campaign,
							and you’ll be added to a special Backer member list.
						</p>
						<div className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between md:items-center">
							<h1 className="font-bold text-xl">
								101{" "}
								<span className="text-gray-400 my-5 text-base font-medium">
									left
								</span>
							</h1>
							<button
								className="bg-ButtonBackground text-white text-sm w-fit rounded-3xl py-3 px-8 hover:bg-ButtonHover"
								onClick={() => setShowModal(true)}
							>
								Select Reward
							</button>
						</div>
					</div>
					<div className="border rounded-lg p-5 md:p-10 mt-10">
						<div className="flex flex-col gap-1 md:gap-0 md:flex-row justify-start md:justify-between md:items-center">
							<h1 className="font-bold md:text-xl">
								Black Edition Stand
							</h1>
							<p className="text-ButtonBackground font-medium">
								Pledge $75 or more
							</p>
						</div>
						<p className="text-gray-400 my-5 md:text-lg ">
							You get a Black Special Edition computer stand and a
							personal thank you. You’ll be added to our Backer
							member list. Shipping is included.
						</p>
						<div className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between md:items-center">
							<h1 className="font-bold text-xl">
								64{" "}
								<span className="text-gray-400 my-5 text-base font-medium">
									left
								</span>
							</h1>
							<button
								className="bg-ButtonBackground text-white text-sm w-fit rounded-3xl py-3 px-8 hover:bg-ButtonHover"
								onClick={() => setShowModal(true)}
							>
								Select Reward
							</button>
						</div>
					</div>
					<div className="border rounded-lg p-5 md:p-10 mt-10">
						<div className="flex flex-col gap-1 md:gap-0 md:flex-row justify-start md:justify-between md:items-center">
							<h1 className="font-bold md:text-xl text-gray-400">
								Mahogany Special Edition
							</h1>
							<p className="text-gray-300 ">
								Pledge $200 or more
							</p>
						</div>
						<p className="text-gray-300 my-5 md:text-lg font-medium">
							You get two Special Edition Mahogany stands, a
							Backer T-Shirt, and a personal thank you. You’ll be
							added to our Backer member list. Shipping is
							included.
						</p>
						<div className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between md:items-center">
							<h1 className="font-bold text-xl text-gray-400">
								0{" "}
								<span className="text-gray-300 my-5 text-base font-medium">
									left
								</span>
							</h1>
							<button className="bg-gray-300 text-white text-sm w-fit rounded-3xl py-3 px-8">
								Out of Stock
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
