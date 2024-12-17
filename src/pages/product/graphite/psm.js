import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/psm.png';
import Bg1 from '../../../../public/images/psm1.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const PSM = () => {

const Details = {
    bgimage: Bg,
    name: 'PSM',
    description: <span>Aerolite® PSM Universal is a graphite laminated sheet with SS316L Tanged Insert Reinforcement. Furthermore, it is Fire Safe Certified. <br/>
    Available for Pre Cut Gaskets in all types of standard and non-standard size upon request. </span>,
    pdf: '/pdf/Technical Data-AEROlite PSM Universal_TBJ-Utex.pdf'
}

const images = [
  {
    original: Bg,
    thumbnail: Bg,
  },
  {
    original: Bg1,
    thumbnail: Bg1,
  }
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
];

  return (
    <Layout 
    title="PSM, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
    keywords="Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies. Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    description="Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies. Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
    <ProjectDetails
    item={Details}
    images={images}
    />
    </Layout>
  );
};






export default PSM;
