import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/ring.png';
import Bg1 from '../../../../public/images/ring1.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const Ring = () => {

const Details = {
    bgimage: Bg,
    name: 'Ring Joint Gasket',
    description: <span>Aerolite® Ring Type Joint Gaskets (RTJ) are ready stock in a variety of materials and sizes in TBJ Warehouse. All the RTJ gaskets are manufactured in accordance with API 6A, API 7D and ASME B16.20 specifications.</span>,
    pdf: '/pdf/Technical Data-AEROlite Ring Joint Gaskets_TBJ-Utex.pdf'
}

const images = [
  {
    original: Bg,
    thumbnail: Bg,
  },
  {
    original: Bg1,
    thumbnail: Bg1,
  },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
];

  return (
    <Layout 
    title="Ring Joint Gasket, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default Ring;
