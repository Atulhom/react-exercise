import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Home = () => {
  const cards = [1,2,3,4];

  return (
    <div className="text-center">
      <Header />
      <Navbar />
	  <div className="d-flex gap-4 justify-content-center mt-4">
        {cards.map((index) => (
          <Card key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
