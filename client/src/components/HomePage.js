import React from 'react';
import Line from './ColoredLine';
import {Carousel} from 'react-bootstrap';
import slide1 from './../images/headphones-under-1000.jpg';
import slide2 from './../images/Mobile-offer.jpg';
import slide3 from './../images/Laptop-Promotion.jpg';

const HomePage = () => {

    

    return (
        <div className="" style={{fontFamily : "Kelly Slab", margin:"5%"}}>
            <h1 className="font-weight-bold">Home</h1>
            <Line color="blue"></Line>
            <h2 className="font-weight-bold">Trending...</h2>
        <div  style={{margin : "10%" }}>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={slide1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={slide2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={slide3} alt="Second slide" />
                </Carousel.Item>
                
            </Carousel>
        </div>    
            <div className="container jumbotron">
                <h2>"This website is purely dedicated to help you find the right product at the right price..."</h2>
            {/* <h2>Find your Products online</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control form-rounded bg-dark text-white" placeholder="Search" id="mail" name="email" />
                <div className="input-group-append">
                    <button type="button" className="btn btn-primary" >
                        <span className="glyphicon glyphicon-search"></span> Search
                    </button>
                </div>
            </div> */}
            </div>
                {/* <div className="justify-content-center ">
                    <in
                </div> */}

        </div>
    )
}

export default HomePage
