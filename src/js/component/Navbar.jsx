import React from "react";


//create your first component
const Navbar = () => {
	return (
        <div className="mx-auto w-75">
            <div className="jumbotron text-start">
                <h1 className="display-4 d-flex">A Warm Welcome!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
            </div>
        </div>
	);
};

export default Navbar;
