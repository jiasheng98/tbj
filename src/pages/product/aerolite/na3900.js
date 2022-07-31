import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectDetails from '../../../components/productDetails';
import Bg from '../../../../public/images/IMG_1659.jpg';
// import PDF from '../../../../public/pdf/gauge.pdf';

const NA3100 = () => {

const Details = {
    bgimage: Bg,
    name: 'AEROLITE NA3900',
    description: <span>Suitable for oils, fuels, lubricants, alcohols, gases, hydrocarbons, steam, water, cooling liquids, most diluted acids and alkalies for medium stress conditions. <br/> <br/> The suitability of a gasket material for an application is dependent upon a multiplicity of factors as shown in the above digram. Max.temperature and pressure values can not define the suitability for application. It’s always advisable to consider these factors when selecting a material for a given application</span>,
    pdf: '/pdf/gauge.pdf'
}

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

  return (
    <Layout 
    title="NA3900"
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






export default NA3100;
