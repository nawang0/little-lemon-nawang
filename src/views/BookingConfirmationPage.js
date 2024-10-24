import React from 'react'
import BookingForm from '../components/BookingForm'
import Hero from '../components/heroBanner/Hero'
import heroImage from '../assets/images/restauranfood.jpg'
import './bookingConfirmation.css'
import { useLocation } from 'react-router-dom';

export default function BookingConfirmationPage() {

  const location = useLocation();
  const { firstName } = location.state || {};

  const heroInfo = {
    title:"Booking Table Confirmation",
    subtitle: "100% table reserved",
    description: "",
    buttonText: "",
    size:"small",

}
  return (
    <>
    <Hero info={heroInfo}/>
    <div className="confirmation-table">
        <h4>Dear {firstName},
          your table reservation has been confirmed. </h4>
        <h4> Thank you and see you soon!</h4>
    </div>
  </>
  )
}
