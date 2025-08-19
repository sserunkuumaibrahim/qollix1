"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".testimonial-next-arrow1",
        prevEl: ".testimonial-prev-arrow1",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
};

export default function Section8({ classList }: any) {
    return (
        <>
            {/*=====TESTIMONIAL AREA START=======*/}
            <div className={`tes1 sp overflow-hidden ${classList}`}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={800}>
                                    Testimonial
                                </span>
                                <h2 className="text-anime-style-3">Success Stories from Global Companies</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    See how companies worldwide are scaling their teams with Africa's top tech talent through Qollix.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tes7-buttons" data-aos="fade-right" data-aos-duration={900}>
                                <button className="testimonial-prev-arrow1">
                                    <i className="fa-regular fa-arrow-left" />
                                </button>
                                <button className="testimonial-next-arrow1">
                                    <i className="fa-regular fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <Swiper {...swiperOptions} className="tes1-slider" data-aos="fade-up" data-aos-duration={900}>
                            <SwiperSlide className="single-slider">
                                <div className="row">
                                    <div className="col-md-8">
                                        <ul className="stars">
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
                                        <div className="pera">
                                            <p>"Qollix delivered exceptional developers within 10 days. The quality of African talent exceeded our expectations, and we've saved 70% on development costs while maintaining premium quality."</p>
                                        </div>
                                        <div className="bottom-heading">
                                            <h4>
                                                <Link href="#">Sarah Mitchell</Link>
                                            </h4>
                                            <p>CTO, TechFlow Solutions</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tes1-image">
                                            <img src="assets/img/testimonial/tes1-img1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="row">
                                    <div className="col-md-8">
                                        <ul className="stars">
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
                                        <div className="pera">
                                            <p>"The compliance support across multiple African countries was seamless. Qollix handled all legal requirements while we focused on building our product. Highly recommended!"</p>
                                        </div>
                                        <div className="bottom-heading">
                                            <h4>
                                                <Link href="#">Marcus Weber</Link>
                                            </h4>
                                            <p>VP Engineering, InnovateLabs</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tes1-image">
                                            <img src="assets/img/testimonial/tes1-img2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="row">
                                    <div className="col-md-8">
                                        <ul className="stars">
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
                                        <div className="pera">
                                            <p>"Working with Qollix transformed our development capacity. The African developers integrated seamlessly with our team, and the time zone coverage gave us 24/7 productivity."</p>
                                        </div>
                                        <div className="bottom-heading">
                                            <h4>
                                                <Link href="#">David Chen</Link>
                                            </h4>
                                            <p>Founder, StartupScale</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tes1-image">
                                            <img src="assets/img/testimonial/tes1-img1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="row">
                                    <div className="col-md-8">
                                        <ul className="stars">
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
                                        <div className="pera">
                                            <p>"The vetting process is incredibly thorough. Every developer we've hired through Qollix has been top-tier, with strong technical skills and excellent communication."</p>
                                        </div>
                                        <div className="bottom-heading">
                                            <h4>
                                                <Link href="#">Lisa Rodriguez</Link>
                                            </h4>
                                            <p>Head of Product, FinTech Pro</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tes1-image">
                                            <img src="assets/img/testimonial/tes1-img2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/*=====TESTIMONIAL AREA END=======*/}
        </>
    );
}
