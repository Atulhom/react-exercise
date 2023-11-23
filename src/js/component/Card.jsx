import React from "react";


//create your first component
const Card = () => {
    return (
        <div className="d-flex row justify-content-center gap-5 mt-5">
            <div className="card col-3" style={{ width: "18rem" }}>
                <img src="https://rsjlawang.com/assets/images/placehold_it/500x300.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>

            <div className="card col-3" style={{ width: "18rem" }}>
                <img src="https://rsjlawang.com/assets/images/placehold_it/500x300.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>
            <div className="card col-3" style={{ width: "18rem" }}>
                <img src="https://rsjlawang.com/assets/images/placehold_it/500x300.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>

            <div className="card col-3" style={{ width: "18rem" }}>
                <img src="https://rsjlawang.com/assets/images/placehold_it/500x300.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>

        </div>

    );
};

export default Card;