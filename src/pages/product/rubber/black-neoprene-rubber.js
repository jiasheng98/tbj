import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/Black Neoprene Rubber.png';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const BlackNeopreneRubber = () => {

const Details = {
    bgimage: Bg,
    name: 'Black Neoprene Rubber',
    description: <span>Our Industrial Grade Black Neoprene Rubber Material has excellent mechanical strength and is flexible and resilient with high temperature and flame resistance.<br/><br/>As well as our standard, in stock range of grades of Neoprene rubber, we are able to supply specialist grades as required. Available for Pre Cut Gaskets in all types of standard and non-standard size upon request.<br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
    pdf: '/pdf/Technical Data-AEROlite Rubber Black Neoprene_TBJ-Utex.pdf'
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
    title="Black Neoprene Rubber"
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






export default BlackNeopreneRubber;
