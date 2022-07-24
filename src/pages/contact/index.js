import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { MdPrecisionManufacturing } from "react-icons/md";
import { RiTimer2Fill, RiTeamFill } from "react-icons/ri";
import GoogleMapReact from 'google-map-react';

const Contact = (props) => {
  return (
    <Layout 
    title="Contact Us"
    keywords="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    description="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
      <LandingSection />
      <AddressMap />
      <div class="container marketing">
        <ContentRight />
        <ContentLeft />
      </div>
    </Layout>
  );
};

const LandingSection = () => {
  return (
    <div class="about-container">
      <div class="jumbotron">
        <h1 class="display-4" id="header-title">
          Contact Us
        </h1>
        {/* <p class="lead">
          TBJ-UTEX INDUSTRIES (M) SDN BHD was established in 1994 , starting off
          as a trading house that stocked and distributed sealing products and
          packing materials that served various market like:
        </p> */}
        {/* <hr class="my-4" />
        <div class="pointer">
          <div class="dot"></div>Chemical & Petrochemical Industries
        </div>
        <div class="pointer">
          <div class="dot"></div>LNG Plant, Oil & Gas Refineries
        </div>
        <div class="pointer">
          <div class="dot"></div>On & Off Shore Industries
        </div>
        <div class="pointer">
          <div class="dot"></div>Power Station & Steel Mills
        </div>
        <div class="pointer">
          <div class="dot"></div>Shipbuilding & Marine Industries
        </div>
        <div class="pointer">
          <div class="dot"></div>Cement Plant, Paper, Pulp & Plywood Mill
        </div>
        <div class="pointer">
          <div class="dot"></div>Manufacturing Industries
        </div>
        <p class="lead mt-5">
          <a class="btn btn-md" href="#timeline" role="button">
            Learn more
          </a>
        </p> */}
      </div>
    </div>
  );
};

const AddressMap=()=>{
    const defaultProps = {
        center: {
          lat: 1.5209962,
          lng: 103.8309888
        },
        zoom: 20
      };

      
    return (
       <>
       <div style={{ height: '500px', width: '100%' }}>
       <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
       </div>
       </>
    );
 };

const ContentRight = () => {
  return (
    <div class="row featurette mb-md-5">
      <div class="col px-3">
        <h2 class="mb-4">Being a renowned gasket supplier in Malaysia</h2>
        <p class="lead">
          TBJ-UTEX INDUSTRIES (M) SDN. BHD. has been serving our valued clients
          with our wide range of quality gaskets supplies as well as sealing and
          fluid control products. For more than 20 years established in the
          industry , we had been distributing gasket products from various
          reputed brands such as Lamons, Garlock, Klinger and Valqua throughout
          the region.
        </p>
        <p class="lead mt-4">
          <a class="btn btn-md" href="/" role="button">
            Discover Our Products
          </a>
        </p>
      </div>
      <div class="col">
        <img
          class="featurette-image img-fluid mx-auto"
          alt="TBJ"
          src="/images/IMG_1655 - Copy.jpg"
        />
      </div>
    </div>
  );
};

const ContentLeft = () => {
  return (
    <div class="row featurette-1">
      <div class="col px-3">
        <h2 class="mb-4">TBJ-UTEX INDUSTRIES (M) SDN.BHD.</h2>
        <p class="lead">
          also has our own expertise in developing and manufacturing our own
          house brand of gasket products such as Spiral Wound Gasket, Ring Joint
          Gasket, Kamprofile Gasket, Metal Jacketed Gasket, Gland Packing, &
          other sealing products. Our brands of products are named Aerolite and
          AeroSil. These house brand products are superior in quality and
          sophisticated features which made us a renowned gasket company in
          Malaysia.
        </p>
        <p class="lead mt-4">
          <a class="btn btn-md" href="/" role="button">
            Contact Us
          </a>
        </p>
      </div>
      <div class="col">
        <img
          class="featurette-image img-fluid mx-auto"
          src="/images/IMG_1627 - Copy.jpg"
          alt="TBJ"
        />
      </div>
    </div>
  );
};

export default Contact;
