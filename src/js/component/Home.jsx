import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Header />
			<Navbar />
			<Card />
			<Footer />

		</div>
	);
};

export default Home;
