import React from "react";
import Check from "../assets/icon-check.svg";
import { usePledge } from "../context/PledgeContext";

const Completedmodal = () => {
	const { completed, setCompleted, setShowModal } = usePledge();
	if (!completed) return null;

	const closeAll = () => {
		setTimeout(() => {
			setCompleted(false);
			setShowModal(false);
		}, 500);
	};
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-7 md:px-10">
			<div className="bg-white rounded-lg p-5 md:px-10 md:py-12 md:w-[500px] h-fit">
				<div className="flex flex-col items-center justify-center">
					<div className="flex justify-center mb-10">
						<img src={Check} alt="" />
					</div>
					<div>
						<h1 className="font-bold text-base md:text-xl mb-5">
							Thanks for your support!
						</h1>
						<p className="text-gray-400 text-sm md:text-lg mb-5">
							Your pledge brings us one step closer to sharing
							Mastercraft Bamboo Monitor Riser worldwide. You will
							get an email once our campaign is completed.
						</p>
						<button
							className="bg-ButtonBackground text-white py-3 px-5 rounded-3xl"
							onClick={closeAll}
						>
							Got it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Completedmodal;
