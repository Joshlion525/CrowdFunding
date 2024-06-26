import React from "react";
import { ImCross } from "react-icons/im";

const Modal = ({ showModal, setShowModal }) => {
	if (!showModal) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-7 md:px-10">
			<div className="bg-white rounded-lg p-5 md:p-10 lg:w-[850px]">
				<div className="flex justify-end">
					<ImCross
						className="text-gray-400"
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
				<div className="border rounded-lg p-6">
					<div className="flex items-center gap-7 mb-5">
						<div>
							<input type="radio" name="" id="" className="" />
						</div>
						<div>
							<h1 className="font-bold text-lg hover:text-ButtonBackground cursor-pointer">
								Pledge with no reward
							</h1>
						</div>
					</div>
					<div className="flex">
						<div className="p-5 hidden md:block"></div>
						<p className="text-left text-sm md:text-lg text-gray-400">
							Choose to support us without a reward if you simply
							believe in our project. As a backer, you will be
							signed up to receive product updates via email.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
