import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
      <TextContainer />
      <div class="container marketing">
        <CardList />
        <hr class="featurette-divider" />
        <PartnerCarousel />
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
          src="/images/IMG_3190.jpg"
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
          src="/images/IMG_3190.jpg"
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
            class="service-img mb-4 rounded-circle"
            src="/images/IMG_1682.jpg"
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
            class="service-img mb-4 rounded-circle"
            src="/images/IMG_1627 - Copy.jpg"
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
            class="service-img mb-4 rounded-circle"
            src="/images/IMG_1659.jpg"
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
          alt="TBJ"
          src="/images/IMG_3190.jpg"
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
          src="/images/IMG_1639.jpg"
          alt="TBJ"
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
            href="/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/1.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/2.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/3.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/4.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/5.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a
            href="/"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <img
              src={require("../../public/images/6.png")}
              className="carousel-image"
            />
          </a>
        </div>
      </CarouselMulti>
    </>
  );
};

const TextContainer = () => {
  return (
    <div class="my-5 text-container">
      <div class="container marketing">
        <p class="p-4">
          Our company has emerged as one of the major gasket supplier in
          Malaysia. We had been distributing various major brands such as
          Lamons, Klinger, Garlock, Valqua, etc. We are now supplying a wide
          range of sealing and fluid control products all over Malaysia. In
          addition, we also develop our house brand like Aerolite and AeroSil.
        </p>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div class="m-4 card-list-container">
      <InformationCard
        title="AEROLITE NA3900"
        source="/images/IMG_1986.jpg"
        link="/"
      />
      <InformationCard
        title="AEROLITE NA3909"
        source="/images/IMG_2004.jpg"
        link="/"
      />
      <InformationCard
        title="AEROLITE NA3100"
        source="/images/IMG_1971.jpg"
        link="/"
      />
      <InformationCard
        title="AEROLITE NA4420"
        source="/images/IMG_1982.jpg"
        link="/"
      />
      <InformationCard
        title="AEROLITE PSM T"
        source="/images/psm.png"
        link="/"
      />
      <InformationCard
        title="AEROLITE GS7004"
        source="/images/_DSC1703.jpg"
        link="/"
      />
      <InformationCard
        title="AEROLITE GS3004"
        source="/images/IMG_1992_.jpg"
        link="/"
      />
      <InformationCard
        title="AEROLITE GS1004"
        source="/images/IMG_1999.jpg"
        link="/"
      />
    </div>
  );
};

const InformationCard = ({ title, content, source, link }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={source} />
      <Card.Body>
        <Card.Title class='mb-3'>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary" href={link}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Home;
