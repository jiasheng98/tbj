import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = (props) => {
  return (
    <Layout>
      <LandingCarousel />
      <div class="container marketing">
        <ImagewithText />
        <hr class="featurette-divider" />
        <ContentRight />
        <ContentLeft />
        <hr class="featurette-divider" />
        <PartnerCarousel />
        <hr class="featurette-divider" />
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
          src="https://khonglieng.com.sg/wp-content/uploads/2017/08/KL_015.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div class="container">
            <div class="carousel-caption">
              <h1 className="mb-3">TBJ Keeps You Running</h1>
              <p className="mb-4">
                Safety sealing and attachment solutions built for you. From
                high-volume and automated to customized and one-of-a-kind.
              </p>
              <p>
                <a class="btn btn-md" href="#" role="button">
                  Contact Our Experts
                </a>
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://khonglieng.com.sg/wp-content/uploads/2017/08/KL_006.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div class="container">
            <div class="carousel-caption">
              <h1 className="mb-3">TBJ Keeps You Running</h1>
              <p className="mb-4">
                Safety sealing and attachment solutions built for you. From
                high-volume and automated to customized and one-of-a-kind.
              </p>
              <p>
                <a class="btn btn-md" href="#" role="button">
                  Learn More
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
      <h1 class="text-center mb-5 text-highlight">Our Services</h1>
      <div class="row">
        <div class="col-lg-4">
          <img
            class="mb-4 rounded-circle"
            src="https://www.lamons.com/wp-content/uploads/2022/01/EPC.png"
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 class="mb-3">Sealing Solutions</h2>
          <p>
            Meet Customers’ Requirement In Providing Customized, Specialized And
            High-Quality Sealing Devices. Robustness, Accuracy And Precision Are
            Our Main Features.
          </p>
          {/* <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p> */}
        </div>
        <div class="col-lg-4">
          <img
            class="mb-4 rounded-circle"
            src="https://www.lamons.com/wp-content/uploads/2022/01/EPC.png"
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 class="mb-3">Engineering Solutions</h2>
          <p>
            Fully Trained, High-Skilled Technicians And Engineers To Provide One
            Stop Service For On-Site Repair, Installation, Troubleshooting And
            Engineering Solutions.
          </p>
          {/* <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p> */}
        </div>
        <div class="col-lg-4">
          <img
            class="mb-4 rounded-circle"
            src="https://www.lamons.com/wp-content/uploads/2022/01/EPC.png"
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 class="mb-3">Corrosion and Metal Protection</h2>
          <p>
            Advanced Material Formulations With Latest Process Technology,
            Ensuring The Metal And Concrete Surfaces Are Free From Corrosion And
            Chemical Attack.
          </p>
          {/* <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p> */}
        </div>
      </div>
    </>
  );
};

const ContentRight = () => {
  return (
    <div class="row featurette mb-5">
      <div class="col px-3 order-md-2">
        <h2 class="mb-4">We Supply Sealing Products</h2>
        <p class="lead">
          Over the years of our company’s establishment , TBJ-UTEX has served
          numerous clients in supplying them our gasket products. Being a
          renowned gasket manufacturer and gasket supplier of Spiral Wound
          Gasket, Ring Joint Gasket, Kamprofile Gasket, Metal Jacketed Gasket,
          Gland Packing, & other sealing products in the industry, we are
          continuously upgrading our products and services with the intention to
          cater only our best to valued clients.
        </p>
      </div>
      <div class="col order-md-1">
        <img
          class="featurette-image img-fluid mx-auto"
          alt="Generic placeholder image"
          src="https://www.lamons.com/wp-content/uploads/2021/08/Mask-Group1.jpg"
        />
      </div>
    </div>
  );
};

const ContentLeft = () => {
  return (
    <div class="row featurette">
      <div class="col px-3">
        <h2 class="mb-4">Our Vision</h2>
        <p class="lead">
          We ensured the gaskets and other related products provided to our
          clients are of highest quality from reputed brands as well as our in
          house branded products. Our aim at TBJ-UTEX is to assist our clients
          to achieve business excellence by supplying the best product that
          caters their needs.
        </p>
      </div>
      <div class="col">
        <img
          class="featurette-image img-fluid mx-auto"
          src="https://www.lamons.com/wp-content/uploads/2021/08/Mask-Group.jpg"
          alt="Generic placeholder image"
        />
      </div>
    </div>
  );
};

const PartnerCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      infinite: true,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      infinite: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      infinite: true,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      infinite: true,
    },
  };
  return (
    <>
      <h1 class="text-center text-highlight">Our Partners</h1>
      <CarouselMulti responsive={responsive} infinite>
        <div>
          <a
            href="https://victorage.co/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/victorage.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="https://strivedmy.com/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/strived.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.easycam.tech/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/easycam.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.easycam.tech/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/easycam.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.easycam.tech/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/easycam.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.easycam.tech/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/easycam.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.easycam.tech/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/easycam.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.easycam.tech/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/easycam.png")}
              className="carousel-image"
            />
          </a>
        </div>
      </CarouselMulti>
    </>
  );
};

export default Home;
