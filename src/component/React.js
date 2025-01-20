
import img from '..//img/slider img 3.jpg'
const React = () => {
    return (

        <div className="container-fluid mt-3 mt-5 mb-5">
            <h1 className='text-center'>BOOK <span className='text-danger'>TABLE</span></h1><br></br>
            <div className="row hello">
            <div className="col-md-6">
                    <img src={img} className="img-fluid" alt="Slider Image 1" />
                </div>
                <div className="col-md-6 text-center">
                    <h1>How to Book A Table </h1>
                    <p>Situated on the banks of the River Sabarmati, Ahmedabad is one of the busiest and enchanting metropolitan cities in India.
                        With a rich heritage and culture, and glorious past, the city attracts a number of tourists from far and wide. Also the first UNESCO world heritage city of India, Ahmedabad is dotted with mesmerising temples, captivating museums, vibrant markets, stunning lakes, and a calming riverfront. It is wellknown for warm hospitality and friendly people.
                        The city surely doesn’t disappoint anyone, especially die-hard foodies because of the gamut of offerings for foodaholics.</p>
                    
                    <p>Truly known as the foodie’s city, Ahmedabad is a must-visit for food lovers. With theplas, dhokla,
                        perience, you have landed in the right place as the foodie’s city, Ahmedabad is a must-visit for food lovers. With theplas, dhokla,
                        perience, you have landed in the right place.</p>

                    <button className='btn-danger del w-100'>Read More</button>
                </div>
               
            </div>
        </div>

    );
};

export default React;