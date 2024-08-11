import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { MdPrecisionManufacturing } from "react-icons/md";
import { RiTimer2Fill, RiTeamFill } from "react-icons/ri";

const About = (props) => {
  return (
    <Layout
      title="About Us"
      keywords="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
      description="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
      <LandingSection />
      <Timeline />
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
          About Us
        </h1>
        <p class="lead">
          TBJ Group was established in 1994, starting off as a trading house
          that stocked and distributed industrial sealing products and packing
          materials that served various market like:
        </p>
        <hr class="my-4" />
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
        </p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div id="timeline" class="container">
      <div class="timeline">
        <div class="timeline-row">
          {/* <div class="timeline-time">
            Over These 20 Years
			</div> */}
          <div class="timeline-content">
            {/* <i class="icon-attachment"></i> */}
            <RiTimer2Fill
              size={50}
              color="var(--white)"
              class="timeline-icon"
            />
            <h4>For more than 30 Years</h4>
            <p>
            TBJ Group has become one of the leading manufacturers and suppliers of industrial sealings and fluid control in Malaysia. We provide certified, highest quality gaskets that complies with international regulations. Our own house brand, Aerolite<sup>&reg;</sup> has been widely accepted & used in the industries.
            </p>
          </div>
        </div>

        <div class="timeline-row">
          {/* <div class="timeline-time">
			Besides Fabricate
			</div> */}
          <div class="timeline-content">
            {/* <i class="icon-code"></i> */}
            <MdPrecisionManufacturing
              size={50}
              color="var(--white)"
              class="timeline-icon"
            />
            <h4>Besides Fabricating</h4>
            <p>
            and custom making most semi-metallic and metallic gaskets in our workshop at Johor Bahru, our in house latest cutting machine is able to fulfill the demand of any common and odd sizes soft Pre-cut gaskets (CNAF, CAF, Pure Graphite, Tanged Insert, Foil Insert, PTFE, Rubber and etc.) in very short lead-time. 
            </p>
          </div>
        </div>

        <div class="timeline-row">
          {/* <div class="timeline-time">
            In TBJ
			</div> */}
          <div class="timeline-content">
            {/* <i class="icon-turned_in_not"></i> */}
            <RiTeamFill size={50} color="var(--white)" class="timeline-icon" />
            <h4>In TBJ</h4>
            <p>
            Our team of dedicated staff will endeavor to understand your requirements and commit to answer your enquiries promptly. Maintaining customer relationships with our clients is one of the top priorities. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentRight = () => {
  return (
    <div class="row featurette mb-md-5">
      <div class="col px-3">
        <h2 class="mb-4">Being a renowned sealing gaskets supplier in Malaysia</h2>
        <p class="lead">
        TBJ Group has been serving our valued clients with our wide range of quality sealing gasket supplies as well as sealing and fluid control products. For more than 20 years established in the industry, we have been distributing gasket products from various reputed brands such as Lamons, Garlock, Klinger and Valqua throughout the region.
        </p>
        <p class="lead mt-4">
          <a class="btn btn-md" href="/product" role="button">
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
    <div class="row featurette-1 mb-md-5">
      <div class="col px-3">
        <h2 class="mb-4">TBJ Group</h2>
        <p class="lead">
          also has our own expertise in developing and manufacturing our own
          house brand of gasket products such as Spiral Wound Gasket, Ring Joint
          Gasket, Kamprofile Gasket, Metal Jacketed Gasket, Gland Packing, &
          other sealing products. Our brands of products are named Aerolite<sup>&reg;</sup>. These house brand products are superior in quality and
          sophisticated features which made us a renowned gasket company in
          Malaysia.
        </p>
        <p class="lead mt-4">
          <a class="btn btn-md" href="/contact" role="button">
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

export default About;
