import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/IMG_1936.jpg';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const ExpandedPTFEJointSealant = () => {

const Details = {
    bgimage: Bg,
    name: 'Expanded PTFE Joint Sealant',
    description: <span>Aerolite® PTFE Joint Sealant is a universal joint sealant manufactured from 100% expanded PTFE and combined with a self-adhesive backing for easy application.</span>,
    pdf: '/pdf/Technical Data-AEROlite PTFE Joint Sealant_TBJ-Utex.pdf'
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
    title="Expanded PTFE Joint Sealant, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default ExpandedPTFEJointSealant;
