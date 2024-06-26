import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import Completedmodal from "./Completedmodal";
import { usePledge } from "../context/PledgeContext";

const Modal = () => {
	const [error, setError] = useState("");
	const {
		pledgeAmount,
		setPledgeAmount,
		bStand,
		setBStand,
		bExhibit,
		setBExhibit,
		selectedPledge,
		setSelectedPledge,
		showModal,
		setShowModal,
		completed,
		setCompleted,
	} = usePledge();

	if (!showModal) return null;

	const handleRadioChange = (pledgeType) => {
		setSelectedPledge(pledgeType);
		setPledgeAmount("");
		setError("");
	};

	const handlePledgeChange = (e) => {
		setPledgeAmount(e.target.value);
		setError("");
	};
	const deduction = () => {
		if (selectedPledge === "bambooStand" && pledgeAmount >= 25) {
			setBStand(bStand - 1);
			return;
		}
		if (selectedPledge === "blackEditionStand" && pledgeAmount >= 75) {
			setBExhibit(bExhibit - 1);
			return;
		}
	};
	const submit = (e) => {
		e.preventDefault();
		if (!pledgeAmount) {
			setError("Please put an amount");
			return;
		}
		if (selectedPledge === "bambooStand" && pledgeAmount < 25) {
			setError("Minimum pledge for Bamboo Stand is $25");
			return;
		}
		if (selectedPledge === "blackEditionStand" && pledgeAmount < 75) {
			setError("Minimum pledge for Black Edition Stand is $75");
			return;
		} else {
			deduction();
			setCompleted(true);
			// setPledgeAmount("");
		}
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 px-7 md:px-10">
			<div className="bg-white rounded-lg p-5 md:p-10 lg:w-[850px] h-[80%] overflow-y-auto">
				<div className="flex justify-end">
					<ImCross
						className="text-gray-400 cursor-pointer"
						onClick={() => setShowModal(false)}
					/>
				</div>
				<div className="text-left">
					<h1 className="font-bold text-lg md:text-2xl">
						Back this project
					</h1>
					<p className="text-gray-400 text-sm md:text-lg my-5">
						Want to support us in bringing Mastercraft Bamboo
						Monitor Riser out in the world?
					</p>
				</div>
				<div
					className={`border rounded-lg mb-5 ${
						selectedPledge === "noReward"
							? "border-ButtonBackground border-3"
							: "border"
					}`}
				>
					<div className="py-10 px-6">
						<div className="flex items-center gap-7 mb-5">
							<div>
								<input
									type="radio"
									name="pledge"
									id="noReward"
									onChange={() =>
										handleRadioChange("noReward")
									}
									checked={selectedPledge === "noReward"}
								/>
							</div>
							<div>
								<h1 className="font-bold text-left text-lg hover:text-ButtonBackground cursor-pointer">
									Pledge with no reward
								</h1>
							</div>
						</div>
						<div className="flex">
							<div className="p-5 hidden md:block"></div>
							<p className="text-left text-sm md:text-lg text-gray-400">
								Choose to support us without a reward if you
								simply believe in our project. As a backer, you
								will be signed up to receive product updates via
								email.
							</p>
						</div>
					</div>
					{selectedPledge === "noReward" && (
						<div className="admin flex flex-col md:flex-row gap-5 items-center justify-between border-t px-6 py-8">
							<div>
								<p className="text-gray-400 text-sm md:text-lg">
									Enter your pledge
								</p>
							</div>
							{error && (
								<div className="text-red-500 text-sm block md:hidden">
									{error}
								</div>
							)}
							<form
								className="flex items-center gap-2 sm:gap-5"
								onSubmit={submit}
							>
								{error && (
									<div className="text-red-500 hidden md:block">
										{error}
									</div>
								)}
								<div className="border-2 rounded-3xl px-5 py-3 flex">
									<span className="mr-2 text-gray-400">
										$
									</span>
									<input
										type="number"
										value={pledgeAmount}
										onChange={handlePledgeChange}
										className="w-12 border-none outline-none"
										min="1"
									/>
								</div>
								<button
									type="submit"
									className="bg-ButtonBackground text-white text-sm w-fit rounded-3xl py-3 px-5 sm:px-8 hover:bg-ButtonHover"
								>
									Continue
								</button>
							</form>
						</div>
					)}
				</div>
				<div
					className={`border rounded-lg mb-5 ${
						selectedPledge === "bambooStand"
							? "border-ButtonBackground border-3"
							: "border"
					}`}
				>
					<div className="py-10 px-6">
						<div className="flex items-center gap-7 mb-5">
							<div>
								<input
									type="radio"
									name="pledge"
									id="bambooStand"
									onChange={() =>
										handleRadioChange("bambooStand")
									}
									checked={selectedPledge === "bambooStand"}
								/>
							</div>
							<div className="flex items-center w-full justify-between">
								<div className="flex flex-col md:flex-row text-left md:items-center md:gap-5">
									<h1 className="font-bold text-lg hover:text-ButtonBackground cursor-pointer">
										Bamboo Stand
									</h1>
									<p className="text-ButtonBackground font-medium">
										Pledge $25 or more
									</p>
								</div>
								<div className="hidden md:block">
									<h1 className="font-bold text-xl">
										{bStand}{" "}
										<span className="text-gray-400 my-5 text-base font-medium">
											left
										</span>
									</h1>
								</div>
							</div>
						</div>
						<div className="flex">
							<div className="p-5 hidden md:block"></div>
							<p className="text-left text-sm md:text-lg text-gray-400">
								You get an ergonomic stand made of natural
								bamboo. You've helped us launch our promotional
								campaign, and you’ll be added to a special
								Backer member list. 101 left
							</p>
						</div>
						<div className="block md:hidden text-left mt-5">
							<h1 className="font-bold text-xl">
								{bStand}{" "}
								<span className="text-gray-400 my-5 text-base font-medium">
									left
								</span>
							</h1>
						</div>
					</div>
					{selectedPledge === "bambooStand" && (
						<div className="admin flex flex-col md:flex-row gap-5 items-center justify-between border-t px-6 py-8">
							<div>
								<p className="text-gray-400 text-sm md:text-lg">
									Enter your pledge
								</p>
							</div>
							{error && (
								<div className="text-red-500 text-sm block md:hidden">
									{error}
								</div>
							)}
							<form
								className="flex items-center gap-2 sm:gap-5"
								onSubmit={submit}
							>
								{error && (
									<div className="text-red-500 hidden md:block">
										{error}
									</div>
								)}
								<div className="border-2 rounded-3xl px-5 py-3 flex">
									<span className="mr-2 text-gray-400">
										$
									</span>
									<input
										type="number"
										value={pledgeAmount}
										onChange={handlePledgeChange}
										className="w-12 border-none outline-none"
										min="1"
									/>
								</div>
								<button
									type="submit"
									className="bg-ButtonBackground text-white text-sm w-fit rounded-3xl py-3 px-5 sm:px-8 hover:bg-ButtonHover"
								>
									Continue
								</button>
							</form>
						</div>
					)}
				</div>
				<div
					className={`border rounded-lg mb-5 ${
						selectedPledge === "blackEditionStand"
							? "border-ButtonBackground border-3"
							: "border"
					}`}
				>
					<div className="py-10 px-6">
						<div className="flex items-center gap-7 mb-5">
							<div>
								<input
									type="radio"
									name="pledge"
									id="blackEditionStand"
									onChange={() =>
										handleRadioChange("blackEditionStand")
									}
									checked={
										selectedPledge === "blackEditionStand"
									}
								/>
							</div>
							<div className="flex items-center w-full justify-between">
								<div className="flex flex-col md:flex-row text-left md:items-center md:gap-5">
									<h1 className="font-bold text-lg hover:text-ButtonBackground cursor-pointer">
										Black Edition Stand
									</h1>
									<p className="text-ButtonBackground font-medium">
										Pledge $75 or more
									</p>
								</div>
								<div className="hidden md:block">
									<h1 className="font-bold text-xl">
										{bExhibit}{" "}
										<span className="text-gray-400 my-5 text-base font-medium">
											left
										</span>
									</h1>
								</div>
							</div>
						</div>
						<div className="flex">
							<div className="p-5 hidden md:block"></div>
							<p className="text-left text-sm md:text-lg text-gray-400">
								You get a Black Special Edition computer stand
								and a personal thank you. You’ll be added to our
								Backer member list. Shipping is included.
							</p>
						</div>
						<div className="block md:hidden text-left mt-5">
							<h1 className="font-bold text-xl">
								{bExhibit}{" "}
								<span className="text-gray-400 my-5 text-base font-medium">
									left
								</span>
							</h1>
						</div>
					</div>
					{selectedPledge === "blackEditionStand" && (
						<div className="admin flex flex-col md:flex-row gap-5 items-center justify-between border-t px-6 py-8">
							<div>
								<p className="text-gray-400 text-sm md:text-lg">
									Enter your pledge
								</p>
							</div>
							{error && (
								<div className="text-red-500 text-sm block md:hidden">
									{error}
								</div>
							)}
							<form
								className="flex items-center gap-2 sm:gap-5"
								onSubmit={submit}
							>
								{error && (
									<div className="text-red-500 hidden md:block">
										{error}
									</div>
								)}
								<div className="border-2 rounded-3xl px-5 py-3 flex">
									<span className="mr-2 text-gray-400">
										$
									</span>
									<input
										type="number"
										value={pledgeAmount}
										onChange={handlePledgeChange}
										className="w-12 border-none outline-none"
										min="1"
									/>
								</div>
								<button
									type="submit"
									className="bg-ButtonBackground text-white text-sm w-fit rounded-3xl py-3 px-5 sm:px-8 hover:bg-ButtonHover"
								>
									Continue
								</button>
							</form>
						</div>
					)}
				</div>
				<div className="border rounded-lg mb-5">
					<div className="py-10 px-6">
						<div className="flex items-center gap-7 mb-5">
							<div>
								<input
									type="radio"
									name="pledge"
									id="mahoganyEdition"
									onChange={() =>
										handleRadioChange("mahoganyEdition")
									}
									checked={
										selectedPledge === "mahoganyEdition"
									}
									disabled
								/>
							</div>
							<div className="flex items-center w-full justify-between">
								<div className="flex flex-col md:flex-row text-left md:items-center md:gap-5">
									<h1 className="font-bold text-lg text-gray-400 cursor-pointer">
										Mahogany Special Edition
									</h1>
									<p className="text-gray-400 font-medium">
										Pledge $200 or more
									</p>
								</div>
								<div className="hidden md:block">
									<h1 className="font-bold text-xl text-gray-400">
										0{" "}
										<span className="text-gray-400 my-5 text-base font-medium">
											left
										</span>
									</h1>
								</div>
							</div>
						</div>
						<div className="flex">
							<div className="p-5 hidden md:block"></div>
							<p className="text-left text-sm md:text-lg text-gray-300">
								You get two Special Edition Mahogany stands, a
								Backer T-Shirt, and a personal thank you. You’ll
								be added to our Backer member list. Shipping is
								included.
							</p>
						</div>
						<div className="block md:hidden text-left mt-5">
							<h1 className="font-bold text-xl text-gray-400">
								0{" "}
								<span className="text-gray-300 my-5 text-base font-medium">
									left
								</span>
							</h1>
						</div>
					</div>
				</div>
			</div>
			{completed && (
				<Completedmodal
					completed={completed}
					setCompleted={setCompleted}
				/>
			)}
		</div>
	);
};

export default Modal;
