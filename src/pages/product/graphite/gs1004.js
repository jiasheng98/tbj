import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/gs1004.png';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const GS1004 = () => {

  const Details = {
    bgimage: Bg,
    name: 'GS1004',
    description: <span>Aerolite® GS1004 is made with natural pure graphite, it offers reliable services in high temperature applications with excellent performance. <br />
      Available for Pre Cut Gaskets in all types of standard and non-standard size upon request.</span>,
    pdf: '/pdf/Technical Data-AEROlite GS1004_TBJ-Utex.pdf'
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
      title="GS1004, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
      keywords="Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies, spiral wound gasket, rtj gasket, non asbestos gasket, kammprofile gasket, rtj flange, insulation gasket, rubber gasket, cnaf gasket, Teflon sheet., gasket jb, gasket supplier johor bahru, gasket supplier Malaysia, industrial gasket manufacturer Malaysia, sealing products Malaysia, custom gasket Malaysia, order spiral wound gaskets online, oil & gas gaskets, spiral wound gaskets, best gasket material for steam line, where to buy industrial gaskets in Malaysia, custom cut gaskets for flanges, PTFE gaskets, graphite gaskets, rubber gasket sheet, EPDM gaskets, NBR gaskets, Viton gaskets, glass fiber gaskets, metal reinforced gaskets, insulated gasket, insulation kit gasket"
      description="Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies. Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
      <ProjectDetails
        item={Details}
        images={images}
      />
    </Layout>
  );
};






export default GS1004;
