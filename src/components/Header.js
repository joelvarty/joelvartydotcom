import React, { useEffect } from 'react';
import { Link } from "gatsby"

import './Header.scss'

export default props => {

	useEffect(() => {
		if (typeof window === undefined) return;

		var navMenuDiv = document.getElementById("nav-content");
		var navMenu = document.getElementById("nav-toggle");

		document.onclick = check;
		function check(e){
		var target = (e && e.target);

		//Nav Menu
		if (!checkParent(target, navMenuDiv)) {
			// click NOT on the menu
			if (checkParent(target, navMenu)) {
			// click on the link
			if (navMenuDiv.classList.contains("hidden")) {
				navMenuDiv.classList.remove("hidden");
			} else {navMenuDiv.classList.add("hidden");}
			} else {
			// click both outside link and outside menu, hide menu
			navMenuDiv.classList.add("hidden");
			}
		}

		}
		function checkParent(t, elm) {
		while(t.parentNode) {
			if( t == elm ) {return true;}
			t = t.parentNode;
		}
		return false;
		}

	});




	return (<header>
		<nav id="header" className="fixed w-full z-30 top-0 text-white">

			<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

				<div id="site-id" className="pl-4 flex items-center">
					<Link to="/" className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
						{/* <!--Icon from: http://www.potlabicons.com/ --> */}
						<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" /></svg>
						<span>&nbsp;JOELVARTY(dot)com</span>
					</Link>
				</div>

				<div className="block lg:hidden pr-4">
					<button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900">
						<svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
					</button>
				</div>

				<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
					<ul className="list-reset lg:flex justify-end flex-1 items-center">
						<li className="mr-3">
							<a className="inline-block py-2 px-4 text-black no-underline" href="#about">About Me</a>
						</li>
						<li className="mr-3">
							<a className="inline-block py-2 px-4 text-black no-underline" href="#writing">Writing</a>

						</li>
						<li className="mr-3">
							<a className="inline-block py-2 px-4 text-black no-underline" href="#development">Development</a>
						</li>
					</ul>
				</div>
			</div>

			<hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
		</nav>
	</header>)
}
