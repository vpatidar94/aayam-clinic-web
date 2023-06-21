import React,{useEffect} from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { IoMdContact } from 'react-icons/io';
import {ImLocation2} from 'react-icons/im'
import Footer from '../Footer/Footer';
import GoToTopButton from '../GoToTopButton/GoToTopButton';


const ContactUs = () => {
    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
  return (
    <>
    <div className="page-title-section text-center">
            <h1 className="page-title">CONTACT US</h1>
        </div>

        <div className="contact-card-container">
        <div className="contact-cards">
          <FaUserMd className='card-icon' />
          <h4 className='card-tittle mb-2'>Call Us</h4>
          <h6 className='card-tittle'>+91-7470909055</h6>
        </div>
        <div className="contact-cards">
          <HiMail className='contact-card-icon' />
          <h4 className='card-tittle mb-2'>Email Us</h4>
          <h6 className='card-tittle'>mailto:mail@aayamskinclinic.com</h6>
        </div>
        <div className="contact-cards">
          <ImLocation2 className='contact-card-icon' />
          <h4 className='card-tittle mb-2'>Location</h4>
          <p className='head-title'><strong>9/3 Manoramaganj, Near Geeta Bhawan Hospital Aayam Institue Campus, Indore</strong></p>
        </div>
      </div>
      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29441.98524523198!2d75.88831!3d22.719016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdca3ca3bff9%3A0x7256d4689e54e304!2sAAYAM%20Skin%20Clinic%20-%20Dr.%20Abhilasha%20Patidar%20%7C%20Dermatologist%20%7C%20Skin%20specialist%20in%20Indore!5e0!3m2!1sen!2sin!4v1686645102303!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <GoToTopButton/>
      <Footer/>
    </>
  )
}

export default ContactUs