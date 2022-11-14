import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/gs3004.png';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const GS3004 = () => {

const Details = {
    bgimage: Bg,
    name: 'GS3004',
    description: <span>Aerolite® GS3004 is a graphite laminated sheet with SS316L Tanged Insert Reinforcement. It offers reliable services in high temperature applications with excellent performance. 
    Furthermore, it is Fire Safe Certified. <br/>
    Available for Pre Cut Gaskets in all types of standard and non-standard size upon request. </span>,
    pdf: '/pdf/Technical Data-AEROlite GS3004_TBJ-Utex.pdf'
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
    title="GS3004"
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






export default GS3004;
