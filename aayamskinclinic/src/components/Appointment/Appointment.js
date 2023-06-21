import React,{useEffect} from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Footer from '../Footer/Footer';

const Appointment = () => {
    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
    return (<>
        <div className="page-title-section text-center">
            <h1 className="page-title">BOOK YOUR APPOINTMENT HERE</h1>
        </div>
        <div className='common-padding'>
            <MakeAppointment /></div>
        <Footer />
    </>)
}

export default Appointment;