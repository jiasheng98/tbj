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
    <Layout
      title="TBJ-UTEX INDUSTRIES"
      keywords="TBJ-UTEX INDUSTRIES (M) SDN BHD was established in 1994 , starting off as a trading house that stocked and distributed sealing products and packing materials that served various market"
      description="TBJ-UTEX INDUSTRIES (M) SDN BHD was established in 1994 , starting off as a trading house that stocked and distributed sealing products and packing materials that served various market"
    >
      <LandingCarousel />
      <div class="container marketing">
        <ImagewithText />
        <hr class="featurette-divider" />
        <ContentRight />
        {/* <ContentLeft /> */}
      </div>
      {/* <TextContainer /> */}
      <div class="container marketing">
        {/* <CardList /> */}
        {/* <hr class="featurette-divider" /> */}
        <PartnerCarousel />
        <ClientCarousel />
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
          src="/images/IMG_1655 - Copy.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div class="container">
            <div class="carousel-caption">
              <h1 className="mb-3">Over 30 Years of Experiences</h1>
              <p className="mb-4">
                Serving Oil & Gas, Petrochemical Industries with high quality
                Industrial Sealing Products.
              </p>
              <p>
                <a class="btn btn-md" href="/contact" role="button">
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
          src="/images/IMG_1659.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div class="container">
            <div class="carousel-caption">
              <h1 className="mb-3">Aerolite®</h1>
              <p className="mb-4">
              Fire-safe certified, offering product range that provides sealing solution for durability and longevity.
              </p>
              <p>
                <a class="btn btn-md" href="/product" role="button">
                Discover our products
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
      <h1 class="text-center mb-5 text-highlight">Our Mission & Vision</h1>
      <div class="row">
        <div class="col-lg-4">
          <img
            class="service-img mb-4 rounded-circle"
            src="/images/IMG_1682.jpg"
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 class="mb-3">Mission</h2>
          <p>
          To deliver exceptional, individualized service and to be our customers’ supplier of choice.
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
          <h2 class="mb-3">Vision</h2>
          <p>
          To continue the heritage of our Company and be a premier Malaysian manufacturer of top quality sealing products. We strive to be a sealing gasket manufacturer to serve the local & global industries and provide total customer satisfaction. 
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
          <h2 class="mb-3">Values</h2>
          <p>
          We ensure to meet and listen to our customers’ requirements and provide the best and quality sealing products and services.  
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
    <div class="row featurette mb-md-5">
      <div class="col px-3">
        <h2 class="mb-4">We Supply Industrial Sealing Products</h2>
        <p class="lead">
          Over the years of our company’s establishment, TBJ Group has served
          numerous clients in supplying them our gasket products. Being a
          renowned gasket manufacturer and gasket supplier of Spiral Wound
          Gasket, Ring Joint Gasket, Kamprofile Gasket, Metal Jacketed Gasket,
          Gland Packing, & other sealing products in the industry, we are
          continuously upgrading our products and services with the intention to
          cater only our best to valued clients. <br/> <br/>We also developed our own house brand, Aerolite® in 2012. Aerolite® gaskets are fire-safe certified, which make them more durable and cost-effective. It has been widely used and accepted in the industries locally and regionally. 
        </p>
      </div>
      <div class="col">
        <img
          class="featurette-image img-fluid mx-auto"
          alt="TBJ"
          src="/images/IMG_1639.jpg"
        />
      </div>
    </div>
  );
};

const ContentLeft = () => {
  return (
    <div class="row featurette-1">
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
      items: 5,
      infinite: true,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      infinite: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      infinite: true,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      infinite: true,
    },
  };
  return (
    <>
      <h1 class="text-center text-highlight">Our Brands</h1>
      <CarouselMulti responsive={responsive} infinite>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/1.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/3.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/4.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/5.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
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

const ClientCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      infinite: true,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      infinite: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      infinite: true,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      infinite: true,
    },
  };
  return (
    <>
      <h1 class="text-center text-highlight">Our Clients</h1>
      <CarouselMulti responsive={responsive} infinite>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/1.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/3.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/4.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/5.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
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
          TBJ Group has emerged as one of the major gasket supplier &
          manufacturer in Malaysia. We had been distributing various major
          brands such as Lamons, Klinger, Garlock, Valqua, etc. We even
          developed our own house brand, Aerolite®, which has been widely
          accepted in the industries.
        </p>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div class="m-4 card-list-container">
      <InformationCard
        title="AEROLITE NA3100"
        source="/images/IMG_1971.jpg"
        link="/"
      />
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
        title="AEROLITE NA4420"
        source="/images/IMG_1982.jpg"
        link="/"
      />
      <InformationCard
        title="AEROLITE GS1004"
        source="/images/IMG_1999.jpg"
        link="/"
      />
      <InformationCard
        title="AEROLITE GS3004"
        source="/images/IMG_1992_.jpg"
        link="/"
      />
      <InformationCard
        title="AEROLITE GS7004"
        source="/images/_DSC1703.jpg"
        link="/"
      />
      <InformationCard
        title="AEROLITE PSM T"
        source="/images/psm.png"
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
        <Card.Title class="mb-3">{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary" href={link}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Home;
