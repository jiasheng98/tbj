import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/na3909.png';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const NA3909 = () => {

const Details = {
    bgimage: Bg,
    name: 'NA3909',
    description: <span>Aerolite NA3909 CNAF Jointing Sheet is a premium metallic grade suitable for medium stress conditions. <br/>
    Available for Pre Cut Gaskets in all types of standard and non-standard size upon request. </span>,
    pdf: '/pdf/Technical Data-AEROlite CNAF NA3909_TBJ-Utex.pdf'
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
    title="NA3909"
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






export default NA3909;
