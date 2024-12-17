import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/na4420.png';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const NA4420 = () => {

const Details = {
    bgimage: Bg,
    name: 'NA4420',
    description: <span>Aerolite® NA4420 CNAF Jointing Sheet is a high-pressure material with outstanding stress relaxation and resistance to hot water and steam as to oils and hydrocarbons. <br/>
    Available for Pre Cut Gaskets in all types of standard and non-standard size upon request. </span>,
    pdf: '/pdf/Technical Data-AEROlite CNAF NA4420_TBJ-Utex.pdf'
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
    title="NA4420, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default NA4420;
