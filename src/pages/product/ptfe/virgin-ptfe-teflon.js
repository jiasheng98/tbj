import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/PTFE_Sheet_1024x1024.webp';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const PurePTFESheet = () => {

const Details = {
    bgimage: Bg,
    name: 'Pure PTFE Sheet',
    description: <span>We have the largest stock of PTFE stock, both in Virgin, Filled, Etched or Reprocessed materials.<br/><br/>PTFE is used when conditions of operation require:-<br/><br/><ul><li style={{listStyleType: 'initial'}}>High operating temperature (continuous 270°C), excellent chemical resistance, or low coefficient of friction.</li><li style={{listStyleType: 'initial'}}>It has good electrical insulation and thermal expansion rates.</li><li style={{listStyleType: 'initial'}}>Non-toxic food grade and chemically inert.</li><li style={{listStyleType: 'initial'}}>The following types of PTFE Products are available:-</li><li>- Virgin PTFE in sheets or gaskets</li><li>- Expanded PTFE sheets</li><li>- Glass Filled PTFE Sheet</li><li>- Joint Sealant</li><li>- Flexible & Rigid Tubes</li></ul><br/>Available for Pre Cut Gaskets in all types of standard and non-standard size upon request.<br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
    pdf: '/pdf/Technical Data-AEROlite PTFE Teflon_TBJ-Utex.pdf'
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
    title="Pure PTFE Sheet, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default PurePTFESheet;
