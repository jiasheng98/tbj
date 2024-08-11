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
        <ContentLeft />
        <hr class="featurette-divider" />
      </div>
      {/* <TextContainer /> */}
      <div class="container marketing">
        {/* <CardList /> */}
        {/* <hr class="featurette-divider" /> */}
        {/* <PartnerCarousel /> */}
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
          src="/images/IMG_3193.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
          <div class="container">
            <div class="carousel-caption-1">
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
            <div class="carousel-caption-1">
              <h1 className="mb-3">
                Why Aerolite<sup>&reg;</sup>
              </h1>
              <p className="mb-4">
<div class="pointer justify-content-center">
          <div class="dot"></div><p class='mb-0'>Durable and High Quality, Comparable to Major Brands</p>
        </div>
        <div class="pointer justify-content-center">
          <div class="dot"></div><p class='mb-0'>Price competitive</p>
        </div>
        <div class="pointer justify-content-center">
          <div class="dot"></div><p class='mb-0'>Readily Available Stock with Dedicated Warehouse</p>
        </div>
        <div class="pointer justify-content-center">
          <div class="dot"></div><p class='mb-0'>In-House Manufacturing and Cutting Capabilities for Urgent Orders</p>
        </div>
        <div class="pointer justify-content-center">
          <div class="dot"></div><p class='mb-0'>Received Excellent Feedback from Customers</p>
        </div>
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
      <div class="row  mb-5">
        <div class="col-lg-6" style={{textAlign: 'center' }}>
          <img
            class="service-img mb-4 rounded-circle"
            src="/images/IMG_1682.jpg"
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 class="mb-3">Mission</h2>
          <p>
            To deliver exceptional, individualized service and to be our
            customers’ supplier of choice.
          </p>
          {/* <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p> */}
        </div>
        <div class="col-lg-6" style={{textAlign: 'center' }}>
          <img
            class="service-img mb-4 rounded-circle"
            src="/images/IMG_1627 - Copy.jpg"
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 class="mb-3">Vision</h2>
          <p>
            To continue the heritage of our Company and be a premier Malaysian
            manufacturer of top quality sealing products. We strive to be a
            sealing gasket manufacturer to serve the local & global industries
            and provide total customer satisfaction.
          </p>
          {/* <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p> */}
        </div>
      </div>
      <div class="row">
      <div class="col-lg-12" style={{textAlign: 'center' }}>
          <img
            class="service-img mb-4 rounded-circle"
            src="/images/IMG_1659.jpg"
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 class="mb-3">Values</h2>
          <p>
<div class="pointer" style={{justifyContent: 'center' }}>
          <div class="dot"></div><p class='mb-0 text-left'><span class='bold'>Quality:</span> We maintain the highest standards in all our products and services.</p>
        </div>
        <div class="pointer" style={{justifyContent: 'center' }}>
          <div class="dot"></div><p class='mb-0 text-left'><span class='bold'>Integrity:</span> We operate with honesty and transparency.</p>
        </div><div class="pointer" style={{justifyContent: 'center' }}>
          <div class="dot"></div><p class='mb-0 text-left'><span class='bold'>Innovation:</span> We continuously seek new and better ways to serve our customers.</p>
        </div><div class="pointer" style={{justifyContent: 'center' }}>
          <div class="dot"></div><p class='mb-0 text-left'><span class='bold'>Speed:</span> We prioritize swift actions and quick delivery to exceed customer expectations.</p>
        </div><div class="pointer" style={{justifyContent: 'center' }}>
          <div class="dot"></div><p class='mb-0 text-left'><span class='bold'>Flexibility:</span> We adapt to the unique needs of each customer, offering tailored solutions and responsive service.</p>
        </div>
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
          cater only our best to valued clients.
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
    <div class="row featurette-1 mb-md-5">
      <div class="col px-3">
        <h2 class="mb-4">Aerolite</h2>
        <p class="lead">
          We also developed our own house brand, Aerolite in 2012. Aerolite
          gaskets are fire-safe certified, which make them more durable and
          cost-effective. It has been widely used and accepted in the industries
          locally and regionally.
        </p>
      </div>
      <div class="col">
        <img
          class="featurette-image img-fluid mx-auto"
          src="/images/gasketimg.jpg"
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
              src={require("../../public/images/lotte.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/dialog.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/malakoff.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/petronas.png")}
              className="carousel-image"
            />
          </a>
        </div>
        <div>
          <a href="/" target="_blank" style={{ cursor: "pointer" }}>
            <img
              src={require("../../public/images/mmhe.png")}
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
          manufacturer in Malaysia. We have been distributing various major
          brands such as Lamons, Klinger, Garlock, Valqua, etc. We even
          developed our own house brand, Aerolite<sup>&reg;</sup>, which has been widely
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
