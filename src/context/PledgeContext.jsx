import React, { createContext, useContext, useState } from "react";

const PledgeContext = createContext();

export const usePledge = () => {
	return useContext(PledgeContext);
};

export const PledgeProvider = ({ children }) => {
	const [pledgeAmount, setPledgeAmount] = useState("");
	const [bStand, setBStand] = useState(101);
	const [bExhibit, setBExhibit] = useState(64);
	const [selectedPledge, setSelectedPledge] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [completed, setCompleted] = useState(false);

	return (
		<PledgeContext.Provider
			value={{
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
			}}
		>
			{children}
		</PledgeContext.Provider>
	);
};
