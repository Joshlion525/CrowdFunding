import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="relative">
			<div className="flex items-center justify-between py-7 md:py-10 px-5 md:px-10 lg:px-52 text-white">
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
					<TiThMenu className={`text-2xl`} onClick={toggleMenu} />
				</div>
			</div>
			{menuOpen && (
				<div className="absolute top-0 left-0 w-full h-screen  bg-opacity-90 flex flex-col items-center justify-center md:hidden">
					<AiOutlineClose
						className="text-3xl text-white absolute top-5 right-5"
						onClick={toggleMenu}
					/>
					<ul className="flex flex-col gap-10 font-medium text-white text-2xl">
						<li>
							<a href="#" onClick={toggleMenu}>
								About
							</a>
						</li>
						<li>
							<a href="#" onClick={toggleMenu}>
								Discover
							</a>
						</li>
						<li>
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
