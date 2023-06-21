import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { CDBModalFooter,  CDBBox, CDBIcon } from 'cdbreact';
import {SiGmail} from 'react-icons/si';
import {ImPhone} from 'react-icons/im';
import {RiTimer2Line} from 'react-icons/ri'
const Footer = () => {
  return (
    <CDBModalFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto p-5 footer" style={{ width: '100%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="./images/logo.jpg" className="logo"/>
            </a>
            <p className="my-3 footer-title" style={{ width: '250px' }}>
            <strong>Address:</strong> 9/3 Manoramaganj, Near Geeta Bhawan Hospital Aayam Institue Campus, Indore
            </p>
            <CDBBox display="flex" className="mt-4 mb-3">
             
                <CDBIcon fab icon="facebook-f" className="p-2 mx-3 icon" href="https://www.facebook.com/people/Aayam-Skin-Clinic/100077431158744/"/>
           
                <CDBIcon fab icon="twitter" className="p-2 mx-3 icon" href="https://instagram.com/aayam_skin_clinic?igshid=YmMyMTA2M2Y="/>
              
                <CDBIcon fab icon="instagram" className="p-2 mx-3 icon" href="https://instagram.com/aayam_skin_clinic?igshid=YmMyMTA2M2Y="/>
        
            </CDBBox>
          </CDBBox>
           <CDBBox>
            <h5 className="mb-2 mt-3"  style={{ fontWeight: '600' }}>
              Treatments
            </h5>
            <div  className=' d-flex flex-column' style={{ cursor: 'pointer', padding: '0',lineHeight:'1.8', color:"GrayText" }}>
              <Link to="/SkinTreatment" className='footer-item'>Skin Treatment</Link>
              <Link to="/ProceduralTreatment" className='footer-item'>Procedural Treatment</Link>
              <Link to="/CosmeticTreatment" className='footer-item'>Cosmetic Treatment</Link>
              <Link to="/DermatoSurgery" className='footer-item'>Dermato Surgeries</Link>
            </div>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-2 mt-3" style={{ fontWeight: '600' }}>
              Quik Links
            </p>
            <div  className='footer-title d-flex flex-column' style={{ cursor: 'pointer', padding: '0',color:"GrayText"}}>
              <Link to="/" className='footer-item'>Home</Link>
              <Link to="/AboutUs" className='footer-item'>About Us</Link>
              <Link to="/ContactUs" className='footer-item'>Contact</Link>
              <Link to="/Appointment" className='footer-item'>Online Appointment</Link>
              <Link to="/TermsAndCondition" className='footer-item'>Terms & Condition</Link>
              
            </div>
          </CDBBox>
         
          <CDBBox>
            <p className="h5 mb-2 mt-3" style={{ fontWeight: '600' }}>
              Get In Touch
            </p>
            <div className='d-flex flex-column' style={{ cursor: 'pointer', padding: '0',lineHeight:'2.2' }} >
              <span><a href='mailto:mail@aayamskinclinic.com' className='footer-item'><SiGmail/> <strong>mail@aayamskinclinic.com</strong></a></span>
              <span ><a href='tel:+91 7470909055' className='footer-item'><ImPhone/><strong> +91-7470909055</strong></a></span>
              <div className="icon d-flex align-items-center mt-2">
							<i className="icofont-support mr-1"></i>
							<span className="h6 mb-2"><RiTimer2Line/> Mon to Sat : 9:00 am - 7:00 pm</span>	
						</div>
            <p className="text-sunday">Sunday Closed</p>
            </div>
          </CDBBox>
        </CDBBox>
        <br/>
        <hr/>
        <small className="text-center mt-5">&copy; Aayam Skin Clinic, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBModalFooter>
  

  );
}

export default Footer;