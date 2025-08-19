'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

export default function Section1() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitMessage(result.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitMessage('Failed to send message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        // Contact Area Start
        <div className="contact-page sp">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="heading1">
                            <span className="span">Contact Us</span>
                            <h2>Get in Touch Let's Start the Conversation</h2>
                            <div className="space16"></div>
                            <p>We're here to help you access top African tech talent. Whether you're a company looking to scale your development team or seeking compliance support, our experts are ready to assist.</p>
                        </div>

                        <div className="contact-page-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="contact-box">
                                        <div className="icon">
                                            <Image
                                                src="/assets/img/icons/contact-icon1.png"
                                                alt="contact icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="heading1">
                                            <p>Give us a Call</p>
                                            <h4><Link href="tel:+256414673086">+256 414 673 086</Link></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="contact-box contact-box2">
                                        <div className="icon">
                                            <Image
                                                src="/assets/img/icons/contact-icon2.png"
                                                alt="contact icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="heading1">
                                            <p>Send us an Email</p>
                                            <h4><Link href="mailto:hello@qollix.com">hello@qollix.com</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact1-form">
                            <div className="heading1">
                                <h3>Send us a Message</h3>
                                <div className="space16"></div>
                                <p>Ready to scale your team with African tech talent? Tell us about your requirements and we'll get back to you within 24 hours.</p>
                            </div>
                            <div className="space10"></div>

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
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
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
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        {submitMessage && (
                                            <div className={`alert ${submitMessage.includes('Thank you') ? 'alert-success' : 'alert-danger'}`} style={{ marginBottom: '20px', padding: '15px', borderRadius: '5px', backgroundColor: submitMessage.includes('Thank you') ? '#d4edda' : '#f8d7da', color: submitMessage.includes('Thank you') ? '#155724' : '#721c24', border: `1px solid ${submitMessage.includes('Thank you') ? '#c3e6cb' : '#f5c6cb'}` }}>
                                                {submitMessage}
                                            </div>
                                        )}
                                        <div className="button">
                                            <button type="submit" className="theme-btn1" disabled={isSubmitting}>
                                                {isSubmitting ? 'Sending...' : 'Submit Now'} <span><i className="fa-solid fa-arrow-right"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Contact Area End
    );
}
