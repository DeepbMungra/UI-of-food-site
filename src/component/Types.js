import React from 'react';
import img from '../img/main1.jpg';
import img1 from '../img/main con.jpg';
import img2 from '../img/main chi.avif';
import img3 from '../img/eus.png';
import img4 from '../img/main ar.jpg';
import img5 from '../img/slider img.jpg';


const Tcard = () => {
    return (
        <div className="container text-center" id="type">
            <div className="row d-flex justify-content-center">
                <h1 className="text-center text-uppercase m-5">Cousine <span className='text-danger'>Types</span></h1>
                <div className="col-md-4 d-flex justify-content-evenly">
                    <div className="card">
                        <img src={img} className="card-img-top" alt="Slider Image 1" />
                        <div className="card-body">
                            <h5 className="card-title">Indian</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">More Dishes</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-evenly">
                    <div className="card">
                        <img src={img1} className="card-img-top h-50" alt="Slider Image 1" />
                        <div className="card-body">
                            <h5 className="card-title">Continental</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">More Dishes</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-evenly">
                    <div className="card">
                        <img src={img2} className="card-img-top" alt="Slider Image 2" />
                        <div className="card-body">
                            <h5 className="card-title">Chienese</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">More Dishes</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                
                <div className="col-md-4 d-flex justify-content-evenly">
                    <div className="card">
                        <img src={img5} className="card-img-top" alt="Slider Image 1" />
                        <div className="card-body">
                            <h5 className="card-title">Italian</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">More Dishes</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-evenly">
                    <div className="card">
                        <img src={img3} className="card-img-top" alt="Slider Image 1" />
                        <div className="card-body">
                            <h5 className="card-title">Europian</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">More Dishes</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-evenly">
                    <div className="card">
                        <img src={img4} className="card-img-top" alt="Slider Image 2" />
                        <div className="card-body">
                            <h5 className="card-title">Arabic</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">More Dishes</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Tcard;
