import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ImageGallery from "../components/imageGallery";
import { MdChevronLeft } from "react-icons/md";

const ProductDetails = ({ item, images }) => {
  return (
    <>
      <LandingSection item={item} />
      <div class="container marketing">
      <a href="/product" class='mt-4 d-flex align-items-center'><MdChevronLeft size={30}/>Back</a>
        <DetailSection item={item} images={images} />
      </div>
    </>
  );
};

const LandingSection = ({ item }) => {
  return (
    <div class="product-container">
      <img src={item.bgimage} className="bg-image-product" />
      <div class="jumbotron">
        <h1 class="display-4" id="header-title">
          {item.name}
        </h1>
        {/* <p class="lead">
          {item.description}
          </p> */}
      </div>
    </div>
  );
};

const DetailSection = ({ item, images }) => {
  return (
    <div class="row featurette-1 py-3 px-md-4 py-md-5">
      <div class="col px-3">
        <h2 class="mb-4">{item.name}</h2>
        <p class="lead">{item.description}</p>
        <img
          src="/images/ISO-1024x267.png"
          className="w-100"
        />
      </div>
      <div class="col">
        {/* <img
            class="featurette-image img-fluid mx-auto"
            src="/images/IMG_1639.jpg"
            alt="TBJ"
          /> */}
        <ImageGallery images={images} />
        <p class="lead mt-4">
          <a class="btn btn-md d-flex justify-content-center" href={item.pdf} role="button" target='blank'>
            Download PDF
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
