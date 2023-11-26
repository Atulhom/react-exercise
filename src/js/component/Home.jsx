import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [cards] = useState([
		{id: 1, name: 'javascript 1'},
		{id: 2, name: 'card 2'}
	]);
	
	return (
		<div className="text-center">
			<Header />
			<Navbar />
			<div className="d-flex gap-4 justify-content-centers mt-4">
				{cards.map((item)=>{
						return <Card title={item.name} key={item.id}/>
					}
				)}
			</div>
			
			<Footer />
		</div>
	);
};

export default Home;
