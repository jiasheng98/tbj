import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = props => {
  return (
    <Layout>
      <LandingCarousel/>
      <ImagewithText/>
    </Layout>
  );
};


const LandingCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/RCAhiGJsUUE/1920x1080"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/RCAhiGJsUUE/1920x1080"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/RCAhiGJsUUE/1920x1080"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const ImagewithText = () => {
  return (
    <div
    className='masthead'
    >
    <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
        <h1 class="font-weight-light">Your Innovation Partner</h1>
        <p class="lead">A great starter layout for a landing page</p>
      </div>
    </div>
  </div>
    </div>
  )
}


export default Home;