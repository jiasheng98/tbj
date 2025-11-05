import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/LevelGauge.png';
import Bg1 from '../../../../public/images/LevelGauge1.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const LevelGauge = () => {

  const Details = {
    bgimage: Bg,
    name: 'Level Gauge and Gauge Glass',
    description: <span>Key points:<br /><br /><ul><li style={{ listStyleType: 'initial' }}>Aerolite® gauge glasses are suitable for installation in liquid level gauges of almost any make.</li><li style={{ listStyleType: 'initial' }}>Aerolite® gauge glasses have high mechanical strength and are exceptionally resistant to alkalis, acids and boiler water (within the service limitation).</li><li style={{ listStyleType: 'initial' }}>Aerolite® reflex and transparent glasses are manufactured according to the most varied international standards</li></ul><br /><br /><br />Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
    pdf: '/pdf/Technical Data-AEROlite Borosilicate Gauge Glasses_TBJ-Utex.pdf'
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
      title="Level Gauge and Gauge Glass, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default LevelGauge;
