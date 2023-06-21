import React, { useState } from 'react';
import "./MakeAppointment.css";
import AppointmentApi from '../../api/AppointmentApi';


const MakeAppointment = () => {
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dob, setDob] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [preferableTime, setPreferableTime] = useState('');
    const [address, setAddress] = useState('');
    const [consultationFor, setConsultationFor] = useState('');
    const [showMessage, setShowMessage] = useState('');

    const handleDateOfBirthChange = (event) => {

        const dateOfBirth = event.target.value;
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        const diffInMilliseconds = today - birthDate;
        const ageDate = new Date(diffInMilliseconds);
        const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        setDob(dateOfBirth);
        setAge(calculatedAge);
    };

    const formatDate = (dateString) => {
        const dateParts = dateString.split("-");
        const day = dateParts[2];
        const month = dateParts[1];
        const year = dateParts[0];
        return `${day}/${month}/${year}`;
    };

    const sendDetails = async (event) => {
        event.preventDefault();
        try {
            const formattedDob = formatDate(dob);
            const formattedAppointmentDate = formatDate(appointmentDate);
            /*CHECK THE DETAILS OF THIS GETWATTSAPPAPI IN AppointmentApi.JS FILE IN API FOLDER*/
            await new AppointmentApi().getWattsappApi(`Name:${name} \nMobile No:${phoneNumber} \nAge:${age} \nAddress:${address} \nAppointment Date:${formattedAppointmentDate} \nPreferable Time:${preferableTime} \nDOB:${formattedDob} \nConsultation For:${consultationFor}`);
            setShowMessage("Appointment Successful");
            // Reset the form values to null
            setAge('');
            setName('');
            setPhoneNumber('');
            setDob('');
            setAppointmentDate('');
            setPreferableTime('');
            setAddress('');
            setConsultationFor('');
        } catch (e) {
            setShowMessage("Appointment Successful")
            console.log("error")
            // continue;
            // Reset the form values to null
            setAge('');
            setName('');
            setPhoneNumber('');
            setDob('');
            setAppointmentDate('');
            setPreferableTime('');
            setAddress('');
            setConsultationFor('');
        }
    }
    return (
        <>
            <div className='appointment-form-container'>
                <h1 className='form-heading'>BOOK APPOINTMENT </h1>
                <form id="appoinment-form" className="appoinment-form" onSubmit={sendDetails}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="mt-1">Patient Name<span style={{ color: "red" }}> *</span></label>
                                <input
                                    name="name" id="name" type="text" className="form-control" placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="mt-1">Contact Number<span style={{ color: "red" }}> *</span></label>
                                <input name="phone" id="phone" type="text" className="form-control" placeholder="Contact Number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="mt-1">Date Of Birth</label>
                                <input name="date" id="date" type="date" className="form-control" placeholder="Date Of Birth"
                                    value={dob}
                                    onChange={handleDateOfBirthChange} />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="mt-1">Age<span style={{ color: "red" }}> *</span></label>
                                <input name="age" id="age" type="text" className="form-control" placeholder="Age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="mt-1">Appointment Date<span style={{ color: "red" }}> *</span></label>
                                <input name="date" id="appointment-date" type="date" className="form-control" placeholder="Appointment date"
                                    value={appointmentDate}
                                    onChange={(e) => setAppointmentDate(e.target.value)}
                                    required />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="mt-1">Choose Preferable Time<span style={{ color: "red" }}> *</span></label>
                                <select className="form-control" id="exampleFormControlSelect1"
                                    onChange={(e) => setPreferableTime(e.target.value)}
                                    value={preferableTime}
                                    required>
                                    <option>Select Slot</option>
                                    <option>Morning</option>
                                    <option>Evening</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="mt-1">Address<span style={{ color: "red" }}> *</span></label>
                                <input name="address" id="address" type="text" className="form-control" placeholder="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="mt-1">Consultation For</label>
                                <input name="consultationFor" id="consultationFor" type="text" className="form-control" placeholder="Consultation For"
                                    value={consultationFor}
                                    onChange={(e) => setConsultationFor(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <button className='button-appointment' type='submit' >Book Appoinment</button>

                </form>
                {showMessage && <div className='message'>{showMessage}</div>}
            </div>
        </>
    )
}

export default MakeAppointment;