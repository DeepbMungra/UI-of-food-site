import React from 'react';
import img from '../img/deni inn.jpg';
import img1 from '../img/dil.avif';
import img2 from '../img/Delivery-Hero-scaled.webp';

const Service = () => {
    return (
        <div className="container text-center" id="id3">
            <div className="row d-flex justify-content-center">
                <h1 className="text-center text-uppercase m-5"> Our <span className='text-danger'>Service</span></h1>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card1">
                    
                        <img src={img} className="card-img-top" alt="Slider Image 1" />
                        <div className="card-body">
                            <h5 className="card-title">Dine in</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card1">
                        <img src={img2} className="card-img-top" alt="Slider Image 2" />
                        <div className="card-body">
                            <h5 className="card-title">Take out</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card1">
                        <img src={img1} className="card-img-top" alt="Slider Image 3" />
                        <div className="card-body">
                            <h5 className="card-title">Dileviry</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            {/* <a href="#" className="btn btn-pr/imary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
