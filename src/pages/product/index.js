import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Gasket = [
  {
    title: "Insulation Gasket Kit Set",
    source: "/images/insu.png",
    link: "product/gasket/insulation-gasket-kit-set",
  },
  {
    title: "Kammprofile Metal Grooved Gasket",
    source: "/images/kamm1.png",
    link: "product/gasket/kammprofile-metal-grooved-gasket",
  },
  {
    title: "Metal Jacketed Gasket",
    source: "/images/metal.png",
    link: "product/gasket/metal-jacketed-gasket",
  },
  {
    title: "Ring Joint Gasket",
    source: "/images/ring.png",
    link: "product/gasket/ring-joint-gasket",
  },
  {
    title: "Spiral Wound Gasket",
    source: "/images/spiral.png",
    link: "product/gasket/spiral-wound-gasket",
  }
]

const Rubber = [
  {
    title: "AEROLITE® NA3900",
    source: "/images/IMG_1986.jpg",
    link: "product/aerolite/na3900",
  }
]

const PTFE = [
  {
    title: "AEROLITE® NA3900",
    source: "/images/IMG_1986.jpg",
    link: "product/aerolite/na3900",
  }
]

const Packing = [
  {
    title: "AEROLITE® NA3900",
    source: "/images/IMG_1986.jpg",
    link: "product/aerolite/na3900",
  }
]

const Oring = [
  {
    title: "AEROLITE® NA3900",
    source: "/images/IMG_1986.jpg",
    link: "product/aerolite/na3900",
  }
]

const Gauge = [
  {
    title: "AEROLITE® NA3900",
    source: "/images/IMG_1986.jpg",
    link: "product/aerolite/na3900",
  }
]

const Joint = [
  {
    title: "NA3100",
    source: "/images/na3100.png",
    link: "product/joint/na3100",
  },
  {
    title: "NA3900",
    source: "/images/na3900.png",
    link: "product/joint/na3900",
  },
  {
    title: "NA3909",
    source: "/images/na3909.png",
    link: "product/joint/na3909",
  },
  {
    title: "NA4420",
    source: "/images/na4420.png",
    link: "product/joint/na4420",
  }
]

const Insulation = [
  {
    title: "AEROLITE® NA3900",
    source: "/images/IMG_1986.jpg",
    link: "product/aerolite/na3900",
  }
]

const Graphite = [
  {
    title: "GS1004",
    source: "/images/gs1004.png",
    link: "product/graphite/gs1004",
  },
  {
    title: "GS3004",
    source: "/images/gs3004.png",
    link: "product/graphite/gs3004",
  },
  {
    title: "GS7004",
    source: "/images/gs7004.png",
    link: "product/graphite/gs7004",
  },
  {
    title: "PSM",
    source: "/images/psm.png",
    link: "product/graphite/psm",
  }
]

const Glass = [
  {
    title: "AEROLITE® NA3900",
    source: "/images/IMG_1986.jpg",
    link: "product/aerolite/na3900",
  }
]

const Product = (props) => {
  return (
    <Layout
      title="Product"
      keywords="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
      description="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
      <LandingSection />
      <div class="container marketing">
        <ProductTab
        Gasket={Gasket}
        Rubber={Rubber}
        PTFE={PTFE}
        Packing={Packing}
        Oring={Oring}
        Gauge={Gauge}
        Joint={Joint}
        Insulation={Insulation}
        Graphite={Graphite}
        Glass={Glass}
        />

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

const InformationCard = ({ title, content, source, link, item }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={item.source} />
      <Card.Body>
        <Card.Title class="mb-3">{item.title}</Card.Title>
        <Card.Text>{item.content}</Card.Text>
        <Button variant="primary" href={item.link}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

const CardList = ({item}) => {
    return (
      <div class="m-4 card-list-container">
            {item.map((item, index) => {
              return (
              <InformationCard
            item={item}
            />
              );
            })}
      </div>
    );
  };

const ProductTab = ( {Gasket, Rubber, PTFE, Packing, Oring, Gauge, Joint, Insulation, Graphite, Glass}) => {
    return (
        <Tabs
      defaultActiveKey="gasket"
      id="justify-tab-example"
      className="my-5 mx-3 product-tab"
      justify
    >
      <Tab eventKey="gasket" title="Semi Metallic & Metallic Gasket" style={{ whiteSpace: 'nowrap' }}>
        <CardList item={Gasket} />
      </Tab>
      <Tab eventKey="rubber" title="Rubber Sheet" style={{ whiteSpace: 'nowrap' }}>
      <CardList item={Rubber} />
      </Tab>
      <Tab eventKey="ptfe" title="PTFE Products" style={{ whiteSpace: 'nowrap' }}>
      <CardList item={PTFE}/>
      </Tab>
      <Tab eventKey="packing" title="Packing Sleeve & Gland Ring" style={{ whiteSpace: 'nowrap' }}>
      <CardList item={Packing}/>
      </Tab>
      <Tab eventKey="oring" title="O-Ring & Oil Seal" style={{ whiteSpace: 'nowrap' }}>
      <CardList item={Oring}/>
      </Tab>
      <Tab eventKey="gauge" title="Level Gauge & Gauge Glass" style={{ whiteSpace: 'nowrap' }}>
      <CardList item={Gauge} />
      </Tab>
      <Tab eventKey="joint" title="Jointing Material" style={{ whiteSpace: 'nowrap' }}>
      <CardList item={Joint}/>
      </Tab>
      <Tab eventKey="insulation" title="Insulation Gasket Kit Set" style={{ whiteSpace: 'nowrap' }}>
      <CardList item={Insulation}/>
      </Tab>
      <Tab eventKey="graphite" title="Graphite Series" style={{ whiteSpace: 'nowrap' }}>
      <CardList item={Graphite} />
      </Tab>
      <Tab eventKey="glass" title="Glass Fiber & Ceramic Tape" style={{ whiteSpace: 'nowrap' }}>
      <CardList item={Glass}/>
      </Tab>
    </Tabs>
    )
}

export default Product;
