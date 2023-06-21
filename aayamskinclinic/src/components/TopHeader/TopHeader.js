import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import {GrMail} from 'react-icons/gr'
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <>
   
      <div  className="top-most-header-container ">
        <div className='top-contactus-component'>
          <div>
           <BsFillTelephoneFill className='top-most-header-icon ms-2 me-2'/> 
            <a href='tel:+91 7470909055' className='m-1 top-header-contact'>
            <span >+91 7470909055</span>
            </a>
          </div>
         
          <div>
            <GrMail className='top-most-header-icon ms-2 me-2'/>
            <a  href='mailto:mail@aayamskinclinic.com' className='m-1 top-header-contact'>
            <span >mail@aayamskinclinic.com</span>
            </a>
          </div>

        </div>
{/* 
        <div className='top-icons-container'>
            <a href='https://www.facebook.com/aayamcareer/'  target={'_blank'}><FaFacebook className='fa-icon fa-face'/></a>
            <a href='https://www.instagram.com/aayam_career_institute/?hl=en' target={'_blank'}><BsInstagram className='fa-icon fa-insta'/></a>
            <a href='https://www.youtube.com/@aayamcareerinstitute3882' target={'_blank'}><AiFillYoutube className='fa-icon fa-youtube'  /></a>
            <a href='mailto:info@aayamcareerinstitute.in'  target={'_blank'}><SiGmail  className='fa-icon fa-gmail' /></a>
            
          </div>
          */}
      </div>
      
  
    </>
  )
}

export default TopHeader;
