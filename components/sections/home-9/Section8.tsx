"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".tes6-next-arrow",
        prevEl: ".tes6-prev-arrow",
    },
};
export default function Section8() {
    return (
        <>
            {/*=====TESTIMONIAL AREA START=======*/}
            <div className="tes9 sp overflow-hidden" id="tes" style={{ backgroundColor: "#F3F5F2" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> client testimonials
                                </span>
                                <h2 className="text-anime-style-3">Success Stories From Our Clients</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="arrows-button">
                                <button className="tes6-next-arrow">
                                    <i className="fa-solid fa-angle-left" />
                                </button>
                                <button className="tes6-prev-arrow">
                                    <i className="fa-solid fa-angle-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tes6-all-slider" data-aos="fade-up" data-aos-duration={800}>
                                <Swiper {...swiperOptions} className="tes6-slider">
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>“Qollix helped us assemble a high-performing remote pod (React + Node + QA) in under two weeks. Ramp time was minimal and velocity jumped 35% within the first sprint.”</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img1.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Tina Wilkinson</Link>
                                                <p className="text">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>“The sourcing precision is outstanding—only two interviews per successful hire. We’ve cut hiring overhead while improving quality.”</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img2.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Alex Ferguson</Link>
                                                <p className="text">CEO, Ranboz Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>“Compliance used to slow us down. Qollix's integrated EOR flow eliminated friction and reduced our expansion risk surface.”</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img3.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Alzari Joseph</Link>
                                                <p className="text">CEO, BIGS Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>"Qollix delivered exceptional African developers in just 8 days. The talent quality exceeded our expectations and we saved 65% on development costs. Their compliance support made the entire process seamless."</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img1.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Sarah Mitchell</Link>
                                                <p className="text">CTO, TechFlow Solutions</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>"Working with Qollix transformed our hiring process. We found senior React developers from Kenya in under 2 weeks, and the 70% cost savings allowed us to scale our team faster than ever."</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img2.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Michael Chen</Link>
                                                <p className="text">Founder, StartupLab</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p>"The African developers from Qollix are incredibly skilled and professional. Their EOR services handled all compliance issues, making international hiring stress-free for our growing company."</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img3.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Emma Rodriguez</Link>
                                                <p className="text">VP Engineering, DataCorp</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====TESTIMONIAL AREA END=======*/}
        </>
    );
}
