import React from 'react';
import img from '../img/logo2.png';
import img1 from '../img/logo6.png';
import img2 from '../img/logo1.png';
import img3 from '../img/logo5.png';

const Logo = () => {
    return(
        <div className="container text-center mb-5">
        <div className="row">
            <h1 className="text-center text-uppercase m-5">Our <span className='text-danger'>Suppliers</span></h1>
            <div className="col-md-3">
                <div className="card">
                    <img src={img} className="image-fluid" alt="Slider Image 1" />
                    
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <img src={img2} className="image-fluid" alt="Slider Image 2" />
                    
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <img src={img1} className="image-fluid" alt="Slider Image 3" />
                    
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                    <img src={img3} className="image-fluid" alt="Slider Image 4" />
                    
                </div>
                
            </div>
       
    </div>
    </div>
    )
}


export default Logo;