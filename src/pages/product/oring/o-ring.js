import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/Oring.png';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const ORingandOilSeal = () => {

const Details = {
    bgimage: Bg,
    name: 'O-Ring and Oil Seal',
    description: <span>O-ring:<br/><br/><ul><li style={{listStyleType: 'initial'}}>Provides a seal at the interface between two or more parts.</li><li style={{listStyleType: 'initial'}}>Commonly used in static applications (where there is no relative motion between the parts) and dynamic applications (where there is relative motion, such as in a hydraulic cylinder).</li></ul><br/>Oil Seal:<br/><br/><ul><li style={{listStyleType: 'initial'}}>Used to retain or separate lubricants in rotary shaft equipment.</li><li style={{listStyleType: 'initial'}}>Prevents dirt, dust, water, and other contaminants from entering machinery.</li></ul><br/><br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
    pdf: ''
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
    title="O-Ring and Oil Seal"
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






export default ORingandOilSeal;
