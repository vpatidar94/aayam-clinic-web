import React,{useEffect} from 'react';
import './HomePage.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { IoMdContact } from 'react-icons/io';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Footer from '../Footer/Footer';
import SlidingReviews from '../SlidingReviews/SlidingReviews';
import GoToTopButton from '../GoToTopButton/GoToTopButton';

const HomePage = () => {
  useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

  return (
    <>
    <div className='common-padding'>
      <div className="block-container">
        <div className="top-container">
          <span class="title-s ">Total Skin Care Solution</span>
          <hr className="top-hr" />
          <h2 className="mb-3 mt-3 title">ARE YOU LOOKING FOR DERMATOLOGIST/SKIN SPECIALIST IN INDORE?</h2>

          <p className="mb-4 pr-5 text-justify top-head-title">Dr. Abhilasha Patidar is one of the best skin specialist in Indore. Aayam Skin Clinic is one of the leading providers of advanced cosmetic treatments, anti ageing skin care and hair treatment. At Aayam Skin Clinic we work at 3 stages: Prevent, Treat and Maintain.Our treatment preserve your skin and keep it glowing and blemish-free!

            FEEL GOOD ABOUT YOUR SKIN
            Aayam Skin Clinic brings the solution to the entire dermatological issues. Be it a medical condition bothering your skin, which affects not only your health but also quality of your life or be it a condition that has to be surgically treated or excised.

          </p>
          <div className="btn-container ">
            <button href="appoinment.html" target="_blank" className="button-appointment">Make appoinment </button>
          </div>
        </div>
        <div className='image-container'>
          <img src='./images/skin-care-homepage.png' alt='img' className='top-image' />
        </div>
      </div>

      <div className="card-containers">
        <div className="home-cards">
          <FaUserMd className='card-icon' />
          <h4 className='card-tittle mb-2'>Online Appointment</h4>
          <p className='head-title'>Book Your Appointment Here</p>
          <Link to="/foundationoneneet">
            <button type="button" className='button'>Make Your Appoinment</button>
          </Link>
        </div>
        <div className="home-cards">
          <BiTimeFive className='card-icon' />
          <h6 className='card-tittle mb-0'>Timing Schedule</h6>
          <h4 className='card-tittle'>Working Hours</h4>
          <p className='head-title mb-0'>Mon-Sat : 11:00am to 2:00pm</p>
          <p className='head-title mb-0'>Mon-Sat : 5:00pm to 7:00pm</p>
          <p className='head-title'>Sun : Closed</p>
        </div>
        <div className="home-cards">
          <IoMdContact className='card-icon' />
          <h6 className='card-tittle'>Contact Us</h6>
          <h4 className='card-tittle'>+91-7470909055</h4>
          <p className='head-title'>You can send us your request by phone or e-mail and we will get back to you the soonest possible.</p>
        </div>
      </div>

      <div className='middle-container'>
        <div className='result-container'>
          <h1 className='head'>Our Results</h1>
          <div className='d-flex justify-content-center'>
            <Carousel className="carousel-style">

              <Carousel.Item interval={2000}>
                <img
                  className="carousel-img"
                  src="/images/results/dr1.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item interval={2000}>
                <img
                  className="carousel-img"
                  src="/images/results/dr2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item interval={2000}>
                <img
                  className="carousel-img"
                  src="/images/results/dr3.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item interval={2000}>
                <img
                  className="carousel-img"
                  src="/images/results/dr4.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>

            </Carousel>
          </div>
        </div>
        <div className='mt-5 m-4 why-to-choose-container'>
          <h1 className='title color-2'>Why to Choose <span className='color-3'>AAYAM</span></h1>
          <p className='top-head-title'>Aayam Skin Clinic is a dedicated skin care unit which serves you with complete skin , cosmetology and hair care. It is driven by Dr. Abhilasha Patidar who has done her M.D. Dermatology from R.N.T medical college, Udaipur. Our dermatologist is well experienced and aims to use best technology, treatment protocols and equipments. We have treatment facility for acne, acne scar, dark spots, vitiligo (white spots), dark circle, stretch marks. Facility of wart and corn removal, cyst removal, lipoma removal, and ear lobe repair. For hair loss, dandruff we have medical, PRP and mesotherapy treatments."</p>
        </div>
      </div>

      <div className=''>
        <h1 className='head '>Our Services</h1>
        <div className='services-container'>
          <div className="service-container">
            <h4 class="title-s card-head">SKIN TREATEMENT</h4>
            <div className='service-info-container'>
              <img src="./images/service/skin-care.jpg" alt='img' className='service-image' />
              <div>
                <div className='service-list-container'>
                  <ul className='service-list'>
                    <li>Pimples its Marks & Scars</li>
                    <li>Dark circles</li>
                    <li>Psoriasis</li>
                    <li>Leukoderma/ Vitiligo</li>
                    <li>Hairfall/ Baldness</li>
                    <li>Eczema</li>
                    <li>Skin allergy</li>
                    <li>Skin Rashes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="service-container">
            <h4 class="title-s card-head">COSMETIC TREATMENT</h4>
            <div className='service-info-container'>
              <img src="./images/service/Cosmetic-image1.jpg" alt='img' className='service-image' />
              <div>
                <div className='service-list-container'>
                  <ul className='service-list'>
                    <li>Platelet-Rich Plasma </li>
                    <li>(PRP) Therapy For Hair loss & Skin Rejuvenation</li>
                    <li>Chemical peeling for Pimples & Dark Spots</li>
                    <li>Dermaroller Therapy For Acne Scars And Stretch Marks</li>
                    <li>Mezo Therapy</li>
                    <li>Laser Hair Reduction</li>
                    <li>Hydra Facial/Medi Facial</li>
                    <li>Vampire Facial/PRP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="service-container">
            <h4 class="title-s card-head">PROCEDURAL TREATMENT</h4>
            <div className='service-info-container'>
              <img src="./images/service/prt.jpg" alt='img' className='service-image' />
              <div>
                <div className='service-list-container'>
                  <ul className='service-list'>
                    <li>Wart Removal</li>
                    <li>Skin Tag Removal</li>
                    <li>Mole Removal</li>
                    <li>Keloid Reduction</li>
                    <li>Keloid Treatement</li>
                    <li>Xanthelasma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="service-container">
            <h4 class="title-s card-head">DERMATOSURGERIES</h4>
            <div className='service-info-container'>
              <img src="./images/service/demt.jpg" alt='img' className='service-image' />
              <div>
                <div className='service-list-container'>
                  <ul className='service-list'>
                    <li>Vitiligo surgery</li>
                    <li>Nail surgery</li>
                    <li>Sebaceous Cyst Removal</li>
                    <li>Ear lobe repair</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 d-lg-flex flex-md-row align-item-start ">
            <div className="col-lg-5 ">
              <div className="appoinment-content">
                <img src="images/about-dr.jpg" alt="" className="img-appointment" />
                <div className="text-phno-container">
                  <h2 className="text-phno "><i className="icofont-phone-circle text-lg"></i>+91-7470909055</h2>
                </div>
              </div>
            </div>

            <MakeAppointment />
          </div>


        </div>

      </div>




     



      <SlidingReviews />
      
    </div>
    <GoToTopButton/>
    <Footer/>
    </>
  )
}

export default HomePage