import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = (props) => {
  return (
    <Layout
      title="Product"
      keywords="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
      description="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
      <LandingSection />
      <div class="container marketing">
        <ProductTab/>

      </div>
    </Layout>
  );
};

const LandingSection = () => {
  return (
    <div class="product-container">
          <video className="product-video-overlay" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source  src='https://cdn.shopify.com/videos/c/o/v/26480dd5f2a54b2dab9ebad637671b76.mp4' type="video/mp4"></source>
  </video>
      <div class="jumbotron">
        <h1 class="display-4" id="header-title">
          Product
        </h1>
        <p class="lead">
          When you think sealing products, hoses or fasteners, think Lamons.
          With 600,000+ square feet of manufacturing and warehouse space around
          the globe, we have complete control over the deliverables that we
          source and produce for you, our valued customers. Regardless of
          industry, Lamons has the sealing or fastening solution that’s the
          right fit.
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
          link="product/aerolite/na3900"
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

const ProductTab = () => {
    return (
        <Tabs
      defaultActiveKey="all"
      id="justify-tab-example"
      className="my-5 mx-5 product-tab"
      justify
    >
      <Tab eventKey="all" title="All Projects" style={{ whiteSpace: 'nowrap' }}>
        <CardList/>
      </Tab>
      <Tab eventKey="aerolite" title="Aerolite" style={{ whiteSpace: 'nowrap' }}>
      <CardList/>
      </Tab>
      <Tab eventKey="aerosil" title="Aerosil" style={{ whiteSpace: 'nowrap' }}>
      <CardList/>
      </Tab>
      <Tab eventKey="metal" title="Metal Jacketed" style={{ whiteSpace: 'nowrap' }}>
      <CardList/>
      </Tab>
      <Tab eventKey="rubbersteel" title="Rubber Steel" style={{ whiteSpace: 'nowrap' }}>
      <CardList/>
      </Tab>
      <Tab eventKey="rubbersheet" title="Rubber Sheet" style={{ whiteSpace: 'nowrap' }}>
      <CardList/>
      </Tab>
      <Tab eventKey="ptfe" title="PTFE" style={{ whiteSpace: 'nowrap' }}>
      <CardList/>
      </Tab>
      <Tab eventKey="klinger" title="Klinger" style={{ whiteSpace: 'nowrap' }}>
      <CardList/>
      </Tab>
    </Tabs>
    )
}

export default Product;
