import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/GlassFiber.png';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const GlassFiber = () => {

const Details = {
    bgimage: Bg,
    name: 'Glass Fiber',
    description: <span>Glass fiber, also known as fiberglass, consists of numerous extremely fine fibers of glass. It is used as a reinforcing agent for many polymer products and is also used for thermal and electrical insulation.<br/><br/>Function:<br/><br/><ul><li style={{listStyleType: 'initial'}}>Provides structural strength and rigidity.</li><li style={{listStyleType: 'initial'}}>Offers thermal insulation.</li><li style={{listStyleType: 'initial'}}>Acts as an electrical insulator.</li></ul><br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
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
    title="Glass Fiber"
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






export default GlassFiber;
