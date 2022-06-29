import Logo from "../../public/images/tbjlogo.png";

function Footer() {
  return (
    <>
    <div class="pt-5 footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12 about-company">
          <img src={Logo}  class='mb-5 logo'/>
          <p class='text-muted'>50 , Jalan Sri Plentong 8 , <br/> Taman Perindustrian Sri Plentong ,81750 <br/>Masai , Johor Bahru , Malaysia</p>
          <p class="text-muted mb-0"><i class="fa fa-phone mr-3"></i>+607-3863 777</p>
          <p class="text-muted mb-0"><i class="fa fa-phone mr-3"></i>+607-3868 777</p>
          <p class='text-muted'><i class="fa fa-envelope-o mr-3"></i>enquiry@tbj.com.my</p>
        </div>
        <div class="col-lg-3 col-xs-12 links">
          <h4 class="mt-lg-0 mt-sm-3">Navigation</h4>
            <ul class="m-0 p-0">
              <li>- <a href="#">Home</a></li>
              <li>- <a href="#">About Us</a></li>
              <li>- <a href="#">Product</a></li>
              <li>- <a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div class="col-lg-4 col-xs-12 location">
          <h4 class="mt-lg-0 mt-sm-4">Location</h4>
          <p>50 , Jalan Sri Plentong 8 , <br/> Taman Perindustrian Sri Plentong ,81750 <br/>Masai , Johor Bahru , Malaysia</p>
          <p class="mb-0"><i class="fa fa-phone mr-3"></i>+607-3863 777</p>
          <p class="mb-0"><i class="fa fa-phone mr-3"></i>+607-3868 777</p>
          <p><i class="fa fa-envelope-o mr-3"></i>enquiry@tbj.com.my</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col copyright">
          <p class=""><small class="text-white-50">© 2022. All Rights Reserved. Designed by Seyefactory</small></p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Footer;