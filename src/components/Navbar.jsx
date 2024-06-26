import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="relative">
			<div className="flex items-center justify-between py-7 md:py-10 px-5 md:px-10 xl:px-44 text-white ">
				<div>
					<a href="#">
						<img src={Logo} alt="Logo" />
					</a>
				</div>
				<div className="hidden md:block">
					<ul className="flex gap-10 font-medium">
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Discover</a>
						</li>
						<li>
							<a href="#">Get Started</a>
						</li>
					</ul>
				</div>
				<div className="md:hidden">
					{menuOpen ? (
						<IoClose className="text-2xl" onClick={toggleMenu} />
					) : (
						<TiThMenu className="text-2xl" onClick={toggleMenu} />
					)}
				</div>
			</div>
			{menuOpen && (
				<div className="absolute top-full left-0 w-full min-h-screen px-5 py-4 z-50 flex flex-col items-center md:hidden">
					<ul className="flex flex-col font-bold text-black w-full bg-white rounded-lg border">
						<li className="border-b p-5">
							<a href="#" onClick={toggleMenu}>
								About
							</a>
						</li>
						<li className="border-b p-5">
							<a href="#" onClick={toggleMenu}>
								Discover
							</a>
						</li>
						<li className="p-5">
							<a href="#" onClick={toggleMenu}>
								Get Started
							</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Navbar;
