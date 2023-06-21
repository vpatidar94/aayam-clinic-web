import React, {useEffect} from 'react'
import Footer from '../Footer/Footer';
import "./Services.css"
import GoToTopButton from '../GoToTopButton/GoToTopButton';

const Services = () => {
    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

  return (
    <>
    <div className="page-title-section text-center">
            <h1 className="page-title">OUR SERVICES</h1>
        </div>
        <div className='common-padding'>
            <div className='ourservice-container'>
                <div className='ourservice-card'>
                    <img src="images/service/skin allergy.png" alt='' className='ourservice-image'/>
                </div>
                <div className='ourservice-card'>
                    <img src="images/service/Dark-circles.png" alt='' className='ourservice-image'/>
                </div>
                <div className='ourservice-card'>
                    <img src="images/service/Mole-removal.png" alt='' className='ourservice-image'/>
                </div>
                <div className='ourservice-card'>
                    <img src="images/service/nail-surgery.png" alt='' className='ourservice-image'/>
                </div>
                <div className='ourservice-card'>
                    <img src="images/service/skin-tag-removal.png" alt='' className='ourservice-image'/>
                </div>
                <div className='ourservice-card'>
                    <img src="images/service/wart-removal.png" alt='' className='ourservice-image'/>
                </div>
            </div>
            </div>
            <GoToTopButton/>
        <Footer/>
    </>
    
  )
}

export default Services