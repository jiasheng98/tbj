import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/insu.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const Insulation = () => {

const Details = {
    bgimage: Bg,
    name: 'Insulation Gasket Kit Set',
    description: <span>Aerolite® Flange Insulation Sets are designed and manufactured to suit flanged joints to ASME, BS, DIN and customer designs. Three common gasket types available are: Type F (Raised Faced), Type E (Full Face) and Type D (Ring Joint Gasket).</span>,
    pdf: '/pdf/Technical Data-AEROlite Flange Insulation Set_TBJ-Utex.pdf'
}

const images = [
  {
    original: Bg,
    thumbnail: Bg,
  },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
];

  return (
    <Layout 
    title="Insulation Gasket Kit Set, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default Insulation;
