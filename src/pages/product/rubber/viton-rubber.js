import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/VITON RUBBER SHEET.jpg';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const VitonRubber = () => {

const Details = {
    bgimage: Bg,
    name: 'Viton Rubber',
    description: <span>Viton Rubber is a high specification fluoroelastomer that is suitable for demanding environments where elevated temperatures and chemicals are present. Viton Rubber is able to retain its physical and mechanical properties, such as flexibility and fluid resistance, in situations where lesser specification elastomers begin to swell and break down. It displays excellent resistance to acids, oils and petroleum based products, making it a popular gasket and seal choice in the automotive, aerospace, oil and gas, and chemical processing industries.<br/><br/>Available for Pre Cut Gaskets in all types of standard and non-standard size upon request.<br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
    pdf: '/pdf/Technical Data-AEROlite Rubber Viton_TBJ-Utex.pdf'
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
    title="Viton Rubber"
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






export default VitonRubber;
