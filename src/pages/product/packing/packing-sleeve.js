import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/PackingSleeve.png';
import Bg1 from '../../../../public/images/kamm.png';
// import PDF from '../../../../public/pdf/gauge.pdf';

const PackingSleeve = () => {

const Details = {
    bgimage: Bg,
    name: 'Packing Sleeve and Gland Ring',
    description:  <span>Packing sleeve:<br/><br/><ul><li style={{listStyleType: 'initial'}}>Provides a smooth surface for the packing material to press against, enhancing the sealing capability.</li><li style={{listStyleType: 'initial'}}>Ensures even compression of the packing material around the shaft.</li><li style={{listStyleType: 'initial'}}>Reduces wear on the shaft by providing a replaceable sealing surface.</li></ul><br/>A gland ring is a component used in conjunction with packing material to compress and hold the packing in place within a stuffing box or gland.<br/><br/>Function:<br/><br/><ul><li style={{listStyleType: 'initial'}}>Provides the necessary compression to the packing material to ensure a tight seal.</li><li style={{listStyleType: 'initial'}}>Helps distribute the compression evenly around the packing material.</li><li style={{listStyleType: 'initial'}}>Holds the packing in place, preventing it from moving or extruding under pressure.</li></ul><br/><br/>Please <a href="/contact">contact us</a> for more information or inquiries.</span>,
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
    title="Packing Sleeve and Gland Ring, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
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






export default PackingSleeve;
