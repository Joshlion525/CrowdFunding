import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PledgeProvider } from "./context/PledgeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<PledgeProvider>
			<App />
		</PledgeProvider>
	</React.StrictMode>
);
