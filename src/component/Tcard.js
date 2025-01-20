import React from 'react';
import img from '../img/slider img.jpg';
import img1 from '../img/dosa.jpg';
import img2 from '../img/slider img 3.jpg';
import img3 from '../img/Shawrma.jpg';
import img5 from '../img/noodels.webp';
import img6 from '../img/ft.jpg';



const Tcard = () => {
    return (
        <div className="container text-center" id='card'>
            <div className="row d-flex justify-content-center">
                <h1 className="text-center text-uppercase m-5">Our <span className='text-danger'>Items</span></h1>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={img} className="card-img-top" alt="Slider Image 1" />
                        <div className="card-body">
                            <h5 className="card-title">Parmesan Chesee Pasta</h5>
                            <p className="card-text">
                                <span className='banner'>Category</ span> : Italian
                            </p>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={img2} className="card-img-top" alt="Slider Image 2" />
                        <div className="card-body">
                            <h5 className="card-title">Scrumbled eggs</h5>
                            <p className="card-text">
                                <span className='banner'>Category</span> : Europian
                            </p>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="Slider Image 3" />
                        <div className="card-body">
                            <h5 className="card-title">Maysur Dosa</h5>
                            <p className="card-text">
                                <span className='banner'>Category</span> : Indian
                            </p>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                {/* <h1 className="text-center text-uppercase m-5">Items</h1> */}
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={img3} className="card-img-top h-100" alt="Slider Image 1" />
                        <div className="card-body">
                            <h5 className="card-title">Arabic Swarma</h5>
                            <p className="card-text">
                                <span className='banner'>Category</span> : Arabic
                            </p>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={img5} className="card-img-top h-100" alt="Slider Image 2" />
                        <div className="card-body">
                            <h5 className="card-title">Chinese Noodles</h5>
                            <p className="card-text">
                                <span className='banner'>Category</span> : Chienese
                            </p>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={img6} className="card-img-top" alt="Slider Image 3" />
                        <div className="card-body">
                            <h5 className="card-title">French Toast</h5>
                            <p className="card-text">
                                <span className='banner'>Category</span> : Europian
                            </p>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tcard;
