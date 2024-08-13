import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";

const LandingSection = () => {
    return (
      <div class="about-container">
        <div class="jumbotron">
          <h1 class="display-4" id="header-title">
            Search Results
          </h1>
          {/* <p class="lead">
            TBJ Group was established in 1994, starting off as a trading house
            that stocked and distributed industrial sealing products and packing
            materials that served various market like:
          </p> */}
        </div>
      </div>
    );
  };

const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query; // Extract the search query from the URL
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Perform the search across all pages (this example is very basic and might require improvement)
      const allPages = [
        { path: "/about", title: "About Us", content: "TBJ Group was established in 1994, starting off as a trading house that stocked and distributed industrial sealing products and packing materials that served various market like:..." },
        { path: "/product", title: "Product", content: "Aerolite®’s products deliver solutions that solve unique sealing challenges, improve plant productivity, reduce costs, and help our customers comply with increasingly stringent environmental regulations..." },
        { path: "/contact", title: "Contact Us", content: "Let's Get Connected!" },
        { path: "/", title: "Home", content: "Over the years of our company’s establishment, TBJ Group has served numerous clients in supplying them our gasket products..." },
        { path: "/product/gasket/spiral-wound-gasket", title: "Spiral Wound Gasket", content: "Aerolite® Spiral Wound Gaskets are available in a wide variety of styles & sizes..." },
        { path: "/product/gasket/ring-joint-gasket", title: "Ring Joint Gasket", content: "Aerolite® Ring Type Joint Gaskets (RTJ) are ready stock in a variety of materials and sizes in TBJ Warehouse..." },
        { path: "/product/gasket/kammprofile-metal-grooved-gasket", title: "Kammprofile Metal Grooved Gasket", content: "Aerolite® Kammprofile Metal Grooved Gaskets..." },
        { path: "/product/gasket/metal-jacketed-gasket", title: "Metal Jacketed Gasket", content: "Aerolite® Metal Jacketed Gaskets are normally manufactured with a non-asbestos, high temperature filler..." },
        { path: "/product/gasket/insulation-gasket-kit-set", title: "Insulation Gasket Kit Set", content: "Aerolite® Flange Insulation Sets are designed and manufactured to suit flanged joints to ASME, BS, DIN and customer designs..." },
        { path: "/product/joint/na3100", title: "NA3100", content: "Aerolite® NA3100 CNAF Jointing Sheet is a general purpose grade for low stress conditions..." },
        { path: "/product/joint/na3900", title: "NA3900", content: "Aerolite® NA3900 CNAF Jointing Sheet is a general purpose grade for medium stress conditions..." },
        { path: "/product/joint/na3909", title: "NA3909", content: "Aerolite® NA3909 CNAF Jointing Sheet is a premium metallic grade suitable for medium stress conditions..." },
        { path: "/product/joint/na4420", title: "NA4420", content: "Aerolite® NA4420 CNAF Jointing Sheet is a high-pressure material with outstanding stress relaxation and resistance to hot water and steam as to oils and hydrocarbons..." },
        { path: "/product/ptfe/expanded-ptfe", title: "Expanded PTFE", content: "Expanded PTFE..." },
        { path: "/product/ptfe/ptfe-joint-sealant", title: "Expanded PTFE Joint Sealant", content: "Aerolite PTFE Joint Sealant is a universal joint sealant manufactured from 100% expanded PTFE and combined with a self-adhesive backing for easy application..." },
        { path: "/product/ptfe/glass-filled-ptfe", title: "Glass Filled PTFE", content: "Aerolite Glass Filled PTFE Sheet provided enhanced resistance to creep and wear in comparison to Virgin PTFE..." },
        { path: "/product/ptfe/ptfe-bonded-epdm", title: "PTFE Bonded EPDM Gasket", content: "Aerolite PTFE Bonded EPDM Gaskets are manufactured with the highest standard quality of EPDM rubber & PTFE for chemical and corrosion resistance..." },
        { path: "/product/ptfe/ptfe-envelope-gasket", title: "PTFE Enveloped Gasket", content: "PTFE envelope gaskets are assembled and closed in an envelope of 100% pure PTFE..." },
        { path: "/product/ptfe/virgin-ptfe-teflon", title: "Pure PTFE Sheet", content: "We have the largest stock of PTFE stock, both in Virgin, Filled, Etched or Reprocessed materials..." },
        { path: "/product/graphite/gs1004", title: "GS1004", content: "Aerolite® GS1004 is made with natural pure graphite, it offers reliable services in high temperature applications with excellent performance..." },
        { path: "/product/graphite/gs3004", title: "GS3004", content: "Aerolite® GS3004 is a graphite laminated sheet with SS316L Tanged Insert Reinforcement..." },
        { path: "/product/graphite/gs7004", title: "GS7004", content: "Aerolite® GS7004 is made with graphite laminated sheet with SS316 Foil Insert Reinforcement..." },
        { path: "/product/graphite/psm", title: "PSM", content: "Aerolite® PSM Universal is a graphite laminated sheet with SS316L Tanged Insert Reinforcement..." },
        { path: "/product/rubber/black-neoprene-rubber", title: "Black Neoprene Rubber", content: "Our Industrial Grade Black Neoprene Rubber Material has excellent mechanical strength and is flexible and resilient with high temperature and flame resistance..." },
        { path: "/product/rubber/insertion-neoprene-rubber", title: "Insertion Neoprene Rubber", content: "The combination of neoprene and the fabric insertion creates a material that provides outstanding strength and durability in physically demanding applications..." },
        { path: "/product/rubber/epdm-rubber", title: "EPDM Rubber", content: "EPDM Rubber is a synthetic material that is commonly used in external applications due to the elastomers excellent resistance to aging, ozone, water and adverse environmental conditions..." },
        { path: "/product/rubber/silicone-rubber", title: "Silicone Rubber", content: "Silicone rubber is a synthetic elastomer manufactured from a blend of silicon, carbon, hydrogen and oxygen..." },
        { path: "/product/rubber/viton-rubber", title: "Viton Rubber", content: "Viton Rubber is a high specification fluoroelastomer that is suitable for demanding environments where elevated temperatures and chemicals are present..." },
        { path: "/product/rubber/white-neoprene-rubber", title: "White Neoprene Rubber", content: "White Neoprene Rubber is an abrasion, impact resistant, highly elastic rubber sheet made from chloroprene rubber..." },
        { path: "/product/tape/ceramic-tape", title: "Ceramic Tape", content: "Ceramic tape is a flexible, high-temperature-resistant tape made from ceramic fibers..." },
        { path: "/product/tape/glass-fiber", title: "Glass Fiber", content: "Glass fiber, also known as fiberglass, consists of numerous extremely fine fibers of glass..." },
        { path: "/product/gauge/level-gauge", title: "Level Gauge and Gauge Glass", content: "Aerolite gauge glasses are suitable for installation in liquid level gauges of almost any make..." },
        { path: "/product/packing/packing-sleeve", title: "Packing Sleeve and Gland Ring", content: "Provides a smooth surface for the packing material to press against, enhancing the sealing capability..." },
        { path: "/product/oring/o-ring", title: "O-Ring and Oil Seal", content: "Provides a seal at the interface between two or more parts..." },
        // Add more pages here with their content
      ];

      const filteredResults = allPages.filter((page) =>
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.content.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filteredResults);
    }
  }, [query]);

  return (
    <Layout 
    title="Search Results"
    keywords="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    description="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
         <LandingSection />
         <div class="my-5 container marketing">
      {/* <h1>Search Results</h1> */}
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.path} class='mb-4 py-4' style={{borderBottom: '1px solid #b2b2b2'}}>
            <h2><a href={result.path}>{result.title}</a></h2>
            <p>{result.content}</p>
          </div>
        ))
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
    </Layout>
  );
};

export default SearchResults;
