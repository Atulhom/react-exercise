import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Home = () => {
  const cards = [1, 2, 3, 4];

  return (
    <div className="text-center">
      <Header />
      <Navbar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          {cards.map((index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
