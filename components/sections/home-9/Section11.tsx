'use client';
import Link from "next/link";
import { useState } from "react";

export default function Section11() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        serviceType: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.serviceType,
                    message: formData.message
                }),
            });

            if (response.ok) {
                setSubmitMessage('Message sent successfully! We will get back to you soon.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    serviceType: '',
                    message: ''
                });
            } else {
                setSubmitMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            setSubmitMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            {/*=====CONTACT AREA START=======*/}
            <div className="contact9 sp overflow-hidden" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> Contact Us
                                </span>
                                <h2 className="text-anime-style-3">Let's Start The Conversation</h2>
                            </div>
                        </div>
                    </div>
                    <div className="contact9-content-area">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="form-area">
                                    <h3>Send Us A Message</h3>
                                    <div className="space16" />
                                    <p>Our response time is within 30 minutes during business hours</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input 
                                                        type="text" 
                                                        name="firstName"
                                                        placeholder="First Name"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input 
                                                        type="text" 
                                                        name="lastName"
                                                        placeholder="Last Name"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input 
                                                        type="tel" 
                                                        name="phone"
                                                        placeholder="Phone Number"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input 
                                                        type="email" 
                                                        name="email"
                                                        placeholder="Email Address"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input">
                                                    <input 
                                                        type="text" 
                                                        name="serviceType"
                                                        placeholder="Service Type"
                                                        value={formData.serviceType}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input">
                                                    <textarea 
                                                        rows={4} 
                                                        name="message"
                                                        placeholder="Message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                {submitMessage && (
                                                    <div className={`alert ${submitMessage.includes('successfully') ? 'alert-success' : 'alert-danger'} mt-3`}>
                                                        {submitMessage}
                                                    </div>
                                                )}
                                                <div className="button-area">
                                                    <button 
                                                        className="theme-btn15" 
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                                        <span>
                                                            <i className="fa-solid fa-arrow-right" />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="" data-aos="fade-left" data-aos-duration={700}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact9-icon1.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Our Location</h5>
                                            <Link href="#">
                                                Plot 19-21 PortBell Road, <br /> Nakawa, Kampala, Uganda
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={900}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact9-icon2.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Call Or Text</h5>
                                            <Link href="tel:+256414673086">+256 414 673 086</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                                    <div className="contact9-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact9-icon3.svg" alt="" />
                                        </div>
                                        <div className="heading">
                                            <h5>Email Us Today</h5>
                                            <Link href="mailto:hello@qollix.com">hello@qollix.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CONTACT AREA END=======*/}
        </>
    );
}
