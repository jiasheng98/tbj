import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Gasket = [
  {
    title: "Spiral Wound Gasket",
    source: "/images/spiral.png",
    link: "product/gasket/spiral-wound-gasket",
  },
  {
    title: "Ring Joint Gasket",
    source: "/images/ring.png",
    link: "product/gasket/ring-joint-gasket",
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
    title: "Insulation Gasket Kit Set",
    source: "/images/insu.png",
    link: "product/gasket/insulation-gasket-kit-set",
  },
];

const Rubber = [
  {
    title: "Black Neoprene Rubber",
    source: "/images/Black Neoprene Rubber.png",
    link: "product/rubber/black-neoprene-rubber",
  },
  {
    title: "Insertion Neoprene Rubber",
    source: "/images/Rubber with 1Ply Insertion.jpg",
    link: "product/rubber/insertion-neoprene-rubber",
  },
  {
    title: "EPDM Rubber",
    source: "/images/EPDM Rubber Sheet.webp",
    link: "product/rubber/epdm-rubber",
  },
  {
    title: "Silicone Rubber",
    source: "/images/Silicone Rubber Sheet.jpg",
    link: "product/rubber/silicone-rubber",
  },
  {
    title: "Viton Rubber",
    source: "/images/VITON RUBBER SHEET.jpg",
    link: "product/rubber/viton-rubber",
  },
  {
    title: "White Neoprene Rubber",
    source: "/images/WHITE NEOPRENE RUBBER.jpg",
    link: "product/rubber/white-neoprene-rubber",
  },
];

const PTFE = [
  {
    title: "Expanded PTFE",
    source: "/images/ptfeexpanded.png",
    link: "product/ptfe/expanded-ptfe",
  },
  {
    title: "Expanded PTFE Joint Sealant",
    source: "/images/IMG_1936.jpg",
    link: "product/ptfe/ptfe-joint-sealant",
  },
  {
    title: "Glass Filled PTFE",
    source:
      "/images/Hot-Sale-White-and-Pure-PTFE-Sheet-Big-Discount-Free-Sample-Support-Insulation-Expanded-Sheet-1mm-PTFE.webp",
    link: "product/ptfe/glass-filled-ptfe",
  },
  {
    title: "PTFE Bonded EPDM Gasket",
    source: "/images/IMG_1898.jpg",
    link: "product/ptfe/ptfe-bonded-epdm",
  },
  {
    title: "PTFE Enveloped Gasket",
    source: "/images/_DSC0160.png",
    link: "product/ptfe/ptfe-envelope-gasket",
  },
  {
    title: "Pure PTFE Sheet",
    source: "/images/PTFE_Sheet_1024x1024.webp",
    link: "product/ptfe/virgin-ptfe-teflon",
  },
];

const Packing = [
  {
    title: "Packing Sleeve and Gland Ring",
    source: "/images/PackingSleeve.png",
    link: "product/packing/packing-sleeve",
  },
];

const Oring = [
  {
    title: "O-Ring and Oil Seal",
    source: "/images/Oring.png",
    link: "product/oring/o-ring",
  },
];

const Gauge = [
  {
    title: "Level Gauge and Gauge Glass",
    source: "/images/LevelGauge.png",
    link: "product/gauge/level-gauge",
  },
];

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
  },
];

const Insulation = [
  {
    title: "Insulation Gasket Kit Set",
    source: "/images/insu.png",
    link: "product/insulation/insulation-gasket-kit-set",
  },
];

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
  },
];

const Glass = [
  {
    title: "Ceramic Tape",
    source: "/images/CeramicTape.png",
    link: "product/tape/ceramic-tape",
  },
  {
    title: "Glass Fiber",
    source: "/images/GlassFiber.png",
    link: "product/tape/glass-fiber",
  },
];

const Product = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActivated, setSearchActivated] = useState(false);

  const handleSearchClick = () => {
    setSearchActivated(true);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    if (e.target.value === "") {
      setSearchActivated(false); // Reset the search when the input is cleared
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the form from submitting or reloading the page
      handleSearchClick();
    }
  };

  const allProducts = [
    ...Gasket,
    ...Rubber,
    ...PTFE,        // Assume PTFE contains similar objects
    ...Packing,     // Assume Packing contains similar objects
    ...Oring,       // Assume Oring contains similar objects
    ...Gauge,       // Assume Gauge contains similar objects
    ...Joint,       // Assume Joint contains similar objects
    ...Insulation,  // Assume Insulation contains similar objects
    ...Graphite,    // Assume Graphite contains similar objects
    ...Glass        // Assume Glass contains similar objects
  ];

  // Filter products based on search query
  const filteredProducts = allProducts.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery)
  );

  return (
    <Layout
      title="Product, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
      keywords="Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies, spiral wound gasket, rtj gasket, non asbestos gasket, kammprofile gasket, rtj flange, insulation gasket, rubber gasket, cnaf gasket, Teflon sheet., gasket jb, gasket supplier johor bahru, gasket supplier Malaysia, industrial gasket manufacturer Malaysia, sealing products Malaysia, custom gasket Malaysia, order spiral wound gaskets online, oil & gas gaskets, spiral wound gaskets, best gasket material for steam line, where to buy industrial gaskets in Malaysia, custom cut gaskets for flanges, PTFE gaskets, graphite gaskets, rubber gasket sheet, EPDM gaskets, NBR gaskets, Viton gaskets, glass fiber gaskets, metal reinforced gaskets, insulated gasket, insulation kit gasket"
      description="Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies. Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
      <LandingSection />
      <div class="container marketing">
        <Form className="d-flex my-5 mx-3 ">
          <Form.Control
            type="text"
            placeholder="Search"
            className="me-2"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyPress={handleKeyPress} // Handle the Enter key press
          />
          <Button onClick={handleSearchClick} variant="outline-success">Search</Button>
        </Form>
        {searchActivated ? (
          <div>
            <h3 class="my-5 mx-3">Search Results</h3>
            <CardList item={filteredProducts} />
          </div>
        ) : (
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
        )}
      </div>
    </Layout>
  );
};

const LandingSection = () => {
  return (
    <div class="product-container">
      <video
        className="product-video-overlay"
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source
          src="https://cdn.shopify.com/videos/c/o/v/26480dd5f2a54b2dab9ebad637671b76.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div class="jumbotron">
        <h1 class="display-4" id="header-title">
          Product
        </h1>
        <p class="lead">
          Aerolite<sup>&reg;</sup>’s products deliver solutions that solve
          unique sealing challenges, improve plant productivity, reduce costs,
          and help our customers comply with increasingly stringent
          environmental regulations.
          <br /> <br />
          Browse below to view our time-tested products that serve a wide
          variety of markets, including Chemical Processing, Food and Beverage,
          Marine, Oil and Gas, Pharmaceutical, Power Generation, Primary Metals,
          and more.
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
        <Card.Title class="mb-3" style={{ whiteSpace: "normal" }}>
          {item.title}
        </Card.Title>
        <Card.Text>{item.content}</Card.Text>
        <Button variant="primary" href={item.link}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

const CardList = ({ item, searchQuery, searchActivated }) => {
  const filteredItems = item.filter(({ title }) =>
    searchActivated ? title.toLowerCase().includes(searchQuery) : true
  );
  return (
    <div class="m-4 card-list-container">
      {filteredItems.map((item, index) => (
        <InformationCard key={index} item={item} />
      ))}
    </div>
  );
};

const ProductTab = ({
  Gasket,
  Rubber,
  PTFE,
  Packing,
  Oring,
  Gauge,
  Joint,
  Insulation,
  Graphite,
  Glass,
  searchQuery,
  searchActivated
}) => {
  return (
    <>
      <Tabs
        defaultActiveKey="gasket"
        id="justify-tab-example"
        className="my-5 mx-3 product-tab"
        justify
      >
        <Tab
          eventKey="gasket"
          title="Semi Metallic & Metallic Gasket"
          style={{ whiteSpace: "nowrap" }}
        >
          <CardList item={Gasket} searchQuery={searchQuery} searchActivated={searchActivated} />
        </Tab>
        <Tab
          eventKey="joint"
          title="Jointing Material"
          style={{ whiteSpace: "nowrap" }}
        >
          <CardList item={Joint} searchQuery={searchQuery} searchActivated={searchActivated} />
        </Tab>
        <Tab
          eventKey="ptfe"
          title="PTFE Products"
          style={{ whiteSpace: "nowrap" }}
        >
          <CardList item={PTFE} searchQuery={searchQuery} searchActivated={searchActivated} />
        </Tab>
        <Tab
          eventKey="gauge"
          title="Level Gauge & Gauge Glass"
          style={{ whiteSpace: "nowrap" }}
        >
          <CardList item={Gauge} searchQuery={searchQuery} searchActivated={searchActivated} />
        </Tab>
        <Tab
          eventKey="packing"
          title="Packing Sleeve & Gland Ring"
          style={{ whiteSpace: "nowrap" }}
        >
          <CardList item={Packing} searchQuery={searchQuery} searchActivated={searchActivated} />
        </Tab>
        <Tab
          eventKey="insulation"
          title="Insulation Gasket Kit Set"
          style={{ whiteSpace: "nowrap" }}
        >
          <CardList item={Insulation} searchQuery={searchQuery} searchActivated={searchActivated} />
        </Tab>
        <Tab
          eventKey="graphite"
          title="Graphite Series"
          style={{ whiteSpace: "nowrap" }}
        >
          <CardList item={Graphite} searchQuery={searchQuery} searchActivated={searchActivated} />
        </Tab>
        <Tab
          eventKey="rubber"
          title="Rubber Sheet"
          style={{ whiteSpace: "nowrap" }}
        >
          <CardList item={Rubber} searchQuery={searchQuery} searchActivated={searchActivated} />
        </Tab>
        <Tab
          eventKey="glass"
          title="Glass Fiber & Ceramic Tape"
          style={{ whiteSpace: "nowrap" }}
        >
          <CardList item={Glass} searchQuery={searchQuery} searchActivated={searchActivated} />
        </Tab>
        <Tab
          eventKey="oring"
          title="O-Ring & Oil Seal"
          style={{ whiteSpace: "nowrap" }}
        >
          <CardList item={Oring} searchQuery={searchQuery} searchActivated={searchActivated} />
        </Tab>
      </Tabs>
    </>
  );
};

export default Product;
