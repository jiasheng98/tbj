import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/spiral.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const Spiral = () => {

const Details = {
    bgimage: Bg,
    name: 'Spiral Wound Gasket',
    description: <span>Aerolite Spiral Wound Gaskets are available in a wide variety of styles & sizes. Furthermore, it is Fire Safe and Intergranular Corrosion Test Certified.</span>,
    pdf: '/pdf/Technical Data-AEROlite Spiral Wound Gaskets_TBJ-Utex.pdf'
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
    title="Spiral Wound Gasket"
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






export default Spiral;
