import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/IMG_1898.jpg';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const PTFEBondedEPDMGasket = () => {

const Details = {
    bgimage: Bg,
    name: 'PTFE Bonded EPDM Gasket',
    description: <span>Aerolite® PTFE Bonded EPDM Gaskets are manufactured with the highest standard quality of EPDM rubber & PTFE for chemical and corrosion resistance.This gasket has concentric convex sealing rings to aid optimum sealing at lower bolt loads. The self centering gasket offers superior sealing for hazard media at low bolt torque.<br/><br/>The totally bonded elastomer and Teflon construction is ideally suited for fiberglass, glass lined and steel flanges. These gaskets will virtually eliminate cracked flanges, reducing installation cost, while maintaining a high performance seal.<br/><br/>Available in standard full face flange standard ANSI150 & JIS10K.<br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
    pdf: '/pdf/Technical Data-AEROlite PTFE Bonded EPDM Gasket_TBJ-Utex.pdf'
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
    title="PTFE Bonded EPDM Gasket, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default PTFEBondedEPDMGasket;
