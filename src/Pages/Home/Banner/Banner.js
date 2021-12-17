import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='mt-5 banner'>
            <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    
                    src="https://i.ibb.co/09p9kgx/1.png"
                    alt="First slide"
                    />
                  {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 "
                    src="https://i.ibb.co/2hj1mh4/2.png"
                    alt="Second slide"
                    />

                  {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 "
                    src="https://i.ibb.co/fDk9KCx/3.png"
                    alt="Third slide"
                  />

                  {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p></p>
                  </Carousel.Caption>  */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;