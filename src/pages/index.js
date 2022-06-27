import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = (props) => {
  return (
    <Layout>
      <LandingCarousel />
      <div class="container marketing">
      <ImagewithText />
      <hr class="featurette-divider" />
      <ContentRight />
      <ContentLeft />
      </div>
    </Layout>
  );
};

const LandingCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/RCAhiGJsUUE/1920x1080"
          alt="First slide"
        />
        <Carousel.Caption>
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button">
                  Sign up today
                </a>
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/RCAhiGJsUUE/1920x1080"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div class="container">
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/RCAhiGJsUUE/1920x1080"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div class="container">
            <div class="carousel-caption text-right">
              <h1>One more for good measure.</h1>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const ImagewithText = () => {
  return (
    <>
        <div class="row">
          <div class="col-lg-4">
            <img
              class="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img
              class="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2>Heading</h2>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh.
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img
              class="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
    </>
  );
};

const ContentRight = () => {
  return (
    <div class="row featurette">
      <div class="col order-md-2">
        <h2 class="featurette-heading">
          Oh yeah, it's that good.{" "}
          <span class="text-muted">See for yourself.</span>
        </h2>
        <p class="lead">
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
          ligula porta felis euismod semper. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </p>
      </div>
      <div class="col order-md-1">
        <img
          class="featurette-image img-fluid mx-auto"
          alt="Generic placeholder image"
          src="http://tbj.com.my/wp-content/uploads/2016/01/DSC_0103.jpg"
        />
      </div>
    </div>
  );
};

const ContentLeft = () => {
  return (
    <div class="row featurette">
    <div class="col">
      <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
      <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
    </div>
    <div class="col">
      <img class="featurette-image img-fluid mx-auto"   src="http://tbj.com.my/wp-content/uploads/2016/01/DSC_0103.jpg" alt="Generic placeholder image"/>
    </div>
  </div>
  );
};

export default Home;
