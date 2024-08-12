import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/CeramicTape.png';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const CeramicTape = () => {

const Details = {
    bgimage: Bg,
    name: 'Ceramic Tape',
    description:  <span>Ceramic tape is a flexible, high-temperature-resistant tape made from ceramic fibers. It is used primarily for thermal insulation and heat resistance.<br/><br/>Function:<br/><br/><ul><li style={{listStyleType: 'initial'}}>Provides thermal insulation.</li><li style={{listStyleType: 'initial'}}>Protects against fire and heat.</li><li style={{listStyleType: 'initial'}}>Offers electrical insulation.</li></ul><br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
    pdf: ''
}

const images = [
  {
    original: Bg,
    thumbnail: Bg,
  }
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
];

  return (
    <Layout 
    title="Ceramic Tape"
    keywords="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    description="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
    <ProjectDetails
    item={Details}
    images={images}
    />
    </Layout>
  );
};






export default CeramicTape;
