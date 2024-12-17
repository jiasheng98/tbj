import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/_DSC0160.png';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const PTFEEnvelopedGasket = () => {

const Details = {
    bgimage: Bg,
    name: 'PTFE Enveloped Gasket',
    description: <span>PTFE envelope gaskets are assembled and closed in an envelope of 100% pure PTFE. They are mainly applied as a flange gasket in applications where a high chemical and high pressure resistance is required.<br/><br/>PTFE envelope gaskets combine the low friction and chemical stability of PTFE with the mechanical strength of the gasket material. This provides the user with a gasket that can be used confidently with aggressive media which would attack many other materials. We can supply PTFE envelope gaskets to suit all flange types and sizes.<br/><br/>Available for Pre Cut Gaskets in all types of standard and non-standard size upon request.<br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
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
    title="PTFE Enveloped Gasket, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default PTFEEnvelopedGasket;
