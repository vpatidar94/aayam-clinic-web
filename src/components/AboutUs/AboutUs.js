import React, { useEffect } from 'react';
import "./AboutUs.css"
import Footer from '../Footer/Footer';
import GoToTopButton from '../GoToTopButton/GoToTopButton';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="page-title-section text-center">
                <h1 className="page-title">ABOUT US</h1>
            </div>
            <div className='aboutus-page-container'>
                <h1 className='director-heading'>About Aayam Skin Clinic</h1>
                <div className='director-container'>
                    <div className='director-img-container'>
                        <img src="/images/about/aayam-skin-1.jpg" alt="director" className='director-img' />
                    </div>
                    <div className='director-description'>

                        <p className='director-info'>"Aayam Skin Clinic is a dedicated skin care unit which serves you with complete skin , cosmetology and hair care. It is driven by Dr. Abhilasha Patidar who has done her M.D. Dermatology from R.N.T medical college, Udaipur. Our dermatologist is well experienced and aims to use best technology, treatment protocols and equipments. We have treatment facility for acne, acne scar, dark spots, vitiligo (white spots), dark circle, stretch marks. Facility of wart and corn removal, cyst removal, lipoma removal, and ear lobe repair. For hair loss, dandruff we have medical, PRP and mesotherapy treatments."</p>
                    </div>
                </div>
                <h1 className='director-heading'>About Doctor</h1>
                <div className='director-container'>

                    <div className='director-description'>

                        <p className='director-info'>Dr. Abhilasha Patidar is one of the best skin specialist in Indore. Aayam Skin Clinic is one of the leading providers of advanced cosmetic treatments, anti ageing skin care and hair treatment. At Aayam Skin Clinic we work at 3 stages: Prevent, Treat and Maintain.Our treatment preserve your skin and keep it glowing and blemish-free! FEEL GOOD ABOUT YOUR SKIN Aayam Skin Clinic brings the solution to the entire dermatological issues. Be it a medical condition bothering your skin, which affects not only your health but also quality of your life or be it a condition that has to be surgically treated or excised.</p>
                    </div>
                    <div className='director-img-container'>
                        <img src="/images/about/about-dr.jpg" alt="director" className='director-img' />
                        <h5 className='mb-0'>Dr. Abhilasha Patidar</h5>
                        <p className='mb-0'>M.D. Dermatology</p>
                    </div>
                </div>
                <GoToTopButton/>
               
            </div> 
            <Footer />
            
        </>
    )
}

export default AboutUs