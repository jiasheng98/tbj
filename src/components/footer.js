import Logo from "../../public/images/tbjlogo.png";
import { FaPhoneAlt, FaFax } from 'react-icons/fa';
import {IoMail} from 'react-icons/io5';

function Footer() {
  return (
    <>
    <div class="pt-5 footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-xs-12 about-company">
          <img src={Logo}  class='mb-5 logo'/>
          <p class='footer-text text-white-50'>50, Jalan Sri Plentong 8, <br/> Taman Perindustrian Sri Plentong, 81750,<br/>Masai, Johor Bahru, Malaysia</p>
          <p class="footer-text text-white-50 mb-0"><FaPhoneAlt color="var(--secondary)"/>&nbsp;+607-3863 777</p>
          <p class="footer-text text-white-50 mb-0"><FaFax color="var(--secondary)"/>&nbsp;+607-3868 777</p>
          <p class='footer-text text-white-50'><IoMail color="var(--secondary)"/> &nbsp;enquiry@tbj.com.my</p>
        </div>
        <div class="col-lg-3 col-xs-12 links">
          <h4 class="mt-lg-0 mt-sm-3 mb-3 footer-header">Navigation</h4>
          <hr class="footer-divider" />
            <ul class="m-0 p-0">
              <li class='mb-1'><a class='footer-link' href="/">Home</a></li>
              <li class='mb-1'><a class='footer-link' href="/about">About Us</a></li>
              <li class='mb-1'><a class='footer-link' href="/">Product</a></li>
              <li class='mb-1'><a class='footer-link' href="/">Contact Us</a></li>
            </ul>
        </div>
        <div class="col-lg-5 col-xs-12 links">
          <h4 class="mt-lg-0 mt-sm-3 mb-3 footer-header">Working Hours</h4>
          <hr class="footer-divider" />
          <table class="opening-hours table table-condensed borderless">

	<tbody>
		<tr>
			<th>Monday</th>
			<td>
				09:00 - 18:00
			</td>
		</tr>
		<tr>
			<th>Tuesday</th>
			<td>
      09:00 - 18:00
			</td>
		</tr>
		<tr>
			<th>Wednesday</th>
			<td>
      09:00 - 18:00
			</td>
		</tr>
		<tr>
			<th>Thursday</th>
			<td>
      09:00 - 18:00
			</td>
		</tr>
		<tr>
			<th>Friday</th>
			<td>
      09:00 - 18:00
			</td>
		</tr>
		<tr>
			<th><span className="text-white-50">Saturday</span></th>
			<td>
				Closed
			</td>
		</tr>
		<tr>
			<th><span className="text-white-50">Sunday</span></th>
			<td>
				Closed
			</td>
		</tr>

	</tbody>
</table>

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