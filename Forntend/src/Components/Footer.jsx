import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Footer = () => {
    const [Showbtn, setShowbtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowbtn(true);
            } else {
                setShowbtn(false);
            }
        });
    }, []);

    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='footer-bg'>
            <section className='footer'>
                <div className="dp-ft">
                    <h4>Quick Links</h4>
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>About us</NavLink></li>
                    <li><NavLink>Services</NavLink></li>
                    <li><NavLink>Emergency</NavLink></li>
                    <li><NavLink>contact us</NavLink></li>
                </div>
                <div className="dp-ft">
                    <h4>Department</h4>
                    <li><NavLink>Cardiology</NavLink></li>
                    <li><NavLink>Orthopedics</NavLink></li>
                    <li><NavLink>Neurology</NavLink></li>
                    <li><NavLink>pediatrics</NavLink></li>
                </div>
                <div className="dp-ft">
                    <h4>Contact Information</h4>
                    <li><NavLink><i class="fa-solid fa-location-arrow"></i>Address</NavLink></li>
                    <li><NavLink><i class="fa-solid fa-phone"></i>Phone</NavLink></li>
                    <li><NavLink><i class="fa-solid fa-envelope"></i>Email</NavLink></li>
                </div>
                <div className="dp-ft dp-ft-responsive">
                    <h4>Follow us</h4>
                    <li><NavLink><i class="fa-brands fa-instagram"></i>Instagram</NavLink></li>
                    <li><NavLink><i class="fa-brands fa-facebook-f"></i>Facebook</NavLink></li>
                    <li><NavLink><i class="fa-brands fa-x-twitter"></i>Twitter</NavLink></li>
                </div>
            </section>
            <section className='timing'>
                <h4><i class="fa-regular fa-calendar"></i>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM to 6:00 PM</p>
                <p>Saturday: 9:00 AM to 2:00 PM</p>
                <p>Sunday: Only Emergency</p>
            </section>
            {Showbtn && <button onClick={scrolltotop} className='BacktoTop'><i className="fa-solid fa-arrow-up"></i></button>}
            <section className='copyright'>
                <h6>&copy; 2026 Allied Hospital | All rights reserved | Designed by Moeez Ali</h6>
            </section>
        </div>
    )
}

export default Footer
