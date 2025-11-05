import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/Hot-Sale-White-and-Pure-PTFE-Sheet-Big-Discount-Free-Sample-Support-Insulation-Expanded-Sheet-1mm-PTFE.webp';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const GlassFilledPTFE = () => {

  const Details = {
    bgimage: Bg,
    name: 'Glass Filled PTFE',
    description: <span>Aerolite® Glass Filled PTFE Sheet provided enhanced resistance to creep and wear in comparison to Virgin PTFE.<br /><br />25% Glass filled PTFE has improved dimensional stability with a lower coefficient of linear thermal expansion and higher deformation under load.<br /><br />Glass filled PTFE also provides outstanding resistance to chemicals, with the exception of hydrofluoric acid and some alkali metals, and is an excellent electrical insulator.<br /><br />Available in Sheets, Pre Cut Gaskets in all types of standard and non-standard size upon request.<br /><br />Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
    pdf: '/pdf/Technical Data-AEROlite PTFE Glass Filled_TBJ-Utex.pdf'
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
      title="Glass Filled PTFE, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default GlassFilledPTFE;
