import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { FaFax } from "react-icons/fa";
import { RiMap2Fill, RiHome4Fill, RiPhoneFill, RiPhoneLine, RiMailFill, RiWhatsappFill } from "react-icons/ri";
import GoogleMapReact from 'google-map-react';
import Logo from "../../../public/images/tbjlogo.png";
import ContactForm from "../../components/contact-form";

const Contact = (props) => {
  return (
    <Layout 
    title="Contact Us"
    keywords="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    description="Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
    >
      <LandingSection />
      <AddressMap />
      <div class="container marketing">
        <ContentRight />
      </div>
    </Layout>
  );
};

const LandingSection = () => {
  return (
    <div class="about-container">
      <div class="jumbotron">
        <h1 class="display-4" id="header-title">
          Contact Us
        </h1>
        {/* <p class="lead">
          TBJ-UTEX INDUSTRIES (M) SDN BHD was established in 1994 , starting off
          as a trading house that stocked and distributed sealing products and
          packing materials that served various market like:
        </p> */}
        {/* <hr class="my-4" />
        <div class="pointer">
          <div class="dot"></div>Chemical & Petrochemical Industries
        </div>
        <div class="pointer">
          <div class="dot"></div>LNG Plant, Oil & Gas Refineries
        </div>
        <div class="pointer">
          <div class="dot"></div>On & Off Shore Industries
        </div>
        <div class="pointer">
          <div class="dot"></div>Power Station & Steel Mills
        </div>
        <div class="pointer">
          <div class="dot"></div>Shipbuilding & Marine Industries
        </div>
        <div class="pointer">
          <div class="dot"></div>Cement Plant, Paper, Pulp & Plywood Mill
        </div>
        <div class="pointer">
          <div class="dot"></div>Manufacturing Industries
        </div>
        <p class="lead mt-5">
          <a class="btn btn-md" href="#timeline" role="button">
            Learn more
          </a>
        </p> */}
      </div>
    </div>
  );
};

const AddressMap=()=>{
    const defaultProps = {
        center: {
          lat: 1.5209962,
          lng: 103.8309888
        },
        zoom: 20
      };

      const AnyReactComponent = () => <div><img style={{height: '50px', width: '50px', objectFit: 'contain'}} src={Logo}/></div>;
      
    return (
       <>
       <div style={{ height: '500px', width: '100%' }}>
       {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}

      >
          <AnyReactComponent
          lat={1.5210441198456037}
          lng={103.83109602883796}
        />
      </GoogleMapReact> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4124974939605!2d103.83109510000001!3d1.5210347000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6b9cdab5f86d%3A0xfd10428905e685ae!2sTBJ-Utex%20Industries%20(M)%20Sdn.%20Bhd.!5e0!3m2!1sen!2smy!4v1659362027141!5m2!1sen!2smy"  style={{border: '0', width: '100%', height: '100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
       </>
    );
 };

const ContentRight = () => {
  return (
    <div class="row featurette mb-md-5 py-5">
      <div class="col px-3">
        {/* <h2 class="mb-4">Being a renowned gasket supplier in Malaysia</h2>
        <p class="lead">
          TBJ-UTEX INDUSTRIES (M) SDN. BHD. has been serving our valued clients
          with our wide range of quality gaskets supplies as well as sealing and
          fluid control products. For more than 20 years established in the
          industry , we have been distributing gasket products from various
          reputed brands such as Lamons, Garlock, Klinger and Valqua throughout
          the region.
        </p>
        <p class="lead mt-4">
          <a class="btn btn-md" href="/" role="button">
            Discover Our Products
          </a>
        </p> */}
        <ContactForm />
      </div>
      <div class="col">
      <div class="contacts-container">
          <h4 class="mt-lg-0 mt-sm-3 mb-3 ">Let's Get Connected!</h4>
          <hr class="footer-divider" />
          <table class="contacts table table-condensed borderless">

	<tbody>
		<tr>
			<th><RiHome4Fill/></th>
			<td>
            TBJ-UTEX INDUSTRIES (M) SDN.BHD.
			</td>
		</tr>
		<tr>
			<th><RiMap2Fill/></th>
			<td>
            50 , Jalan Sri Plentong 8 , Taman Perindustrian Sri Plentong , 81750 Masai , Johor Bahru , Malaysia
			</td>
		</tr>
		<tr>
			<th><RiPhoneFill/></th>
			<td>
            <a class='link' href="https://wa.me/6073863777">+607-3863 777</a>
			</td>
		</tr>
		<tr>
			<th><RiPhoneLine/></th>
			<td>
      <a class='link' href="https://wa.me/6073863777">+607-3861 666</a>
			</td>
		</tr>
		<tr>
			<th><FaFax/></th>
			<td>
      +607-3868 777
			</td>
		</tr>
		{/* <tr>
			<th><FaFax/></th>
			<td>
            +607-3862 666
			</td>
		</tr> */}
		<tr>
			<th><RiMailFill/></th>
			<td>
            enquiry@tbj.com.my
			</td>
		</tr>

        <tr>
			<th><RiMailFill/></th>
			<td>
            sales@tbj.com.my
			</td>
		</tr>

	</tbody>
</table>
<p>
                <a class="whatsappbtn btn btn-md mt-2" href="https://wa.me/6073863777" role="button">
                <RiWhatsappFill/> Whatsapp Us
                </a>
              </p>

        </div>
      </div>
    </div>
  );
};


export default Contact;
