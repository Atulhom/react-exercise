import React from "react";

//create your first component
const Card = ({ title }) => {
  return (
    <div
      className="card col-3 col-sm-12 col-md-6 col-lg-4 mb-3"
      style={{ width: "18rem" }}
    >
      <img
        src="https://rsjlawang.com/assets/images/placehold_it/500x300.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
  );
};

export default Card;
