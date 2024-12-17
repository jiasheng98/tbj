import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/EPDM Rubber Sheet.webp';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const EPDMRubber = () => {

const Details = {
    bgimage: Bg,
    name: 'EPDM Rubber',
    description: <span>EPDM Rubber is a synthetic material that is commonly used in external applications due to the elastomers excellent resistance to aging, ozone, water and adverse environmental conditions. The material's surface is watertight, provides good resistance to abrasion and performs well when in contact with chemicals such as alkanes, diluted acids and ketones. Common uses for EPDM include pipe seals, gaskets, weather strips and sleeves.<br/><br/>Available for Pre Cut Gaskets in all types of standard and non-standard size upon request.<br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
    pdf: '/pdf/Technical Data-AEROlite Rubber EPDM_TBJ-Utex.pdf'
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
    title="EPDM Rubber, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default EPDMRubber;
