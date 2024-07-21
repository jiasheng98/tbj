import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/Silicone Rubber Sheet.jpg';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const SiliconeRubber = () => {

const Details = {
    bgimage: Bg,
    name: 'Silicone Rubber',
    description: <span>Silicone rubber is a synthetic elastomer manufactured from a blend of silicon, carbon, hydrogen and oxygen. The material provides excellent flexibility across a broad temperature range (-60°C up to +200°C), offers high release properties and performs exceptionally well when exposed to ozone, weathering and ultraviolet light. It has a good compression set, is highly resistant to moisture and is an excellent electrical insulator.<br/><br/>Available for Pre Cut Gaskets in all types of standard and non-standard size upon request.<br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
    pdf: '/pdf/Technical Data-AEROlite Rubber Silicone_TBJ-Utex.pdf'
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
    title="Silicone Rubber"
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






export default SiliconeRubber;
