import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import mobileCover from "./assets/hero-cover/mobile-cover.png";
import desktopCover from "./assets/hero-cover/desktop-cover.png";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import cardImage from "./assets/images/card-item.png";
import cardImageDesktop from "./assets/images/card-item-desktop.png";
import { RiTeamLine } from "react-icons/ri";
import { MdSpeed } from "react-icons/md";
import person from "./assets/images/person.png";
import teamCo from "./assets/images/team-co.png";
import teamCEO from "./assets/images/team-ceo.png";
import world from "./assets/images/world.png";
import contact from "./assets/images/contact-team.png";

const App = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    // carousel slider auto move
    // useEffect(() => {
    //     const carousel = document.querySelector(".testimonial-cards .carousel");
    //     let scrollAmount = 0;
    //     const slideWidth = carousel.offsetWidth;

    //     const autoplay = setInterval(() => {
    //         if (carousel.scrollLeft + slideWidth >= carousel.scrollWidth) {
    //             // Go back to start
    //             carousel.scrollTo({ left: 0, behavior: "smooth" });
    //             scrollAmount = 0;
    //         } else {
    //             scrollAmount += slideWidth;
    //             carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    //         }
    //     }, 1000); // Change every 1 second

    //     return () => clearInterval(autoplay); // Cleanup on unmount
    // }, []);

    return (
        <>
            <header className="bg-[#252B42] py-5 text-white">
                <div className="logo-icons flex items-center justify-between md:justify-between w-11/12 m-auto  ">
                    <span className="logo font-semi-bold text-xl cursor-pointer">
                        Divestic
                    </span>

                    <div className="right-icons space-x-10 text-xl flex justify-end gap-4 flex-1/2">
                        {/* desktop menu */}
                        <div className="desktop-menu items-center justify-between gap-10 text-lg hidden md:flex md:justify-between ">
                            <a className="link" href="#">
                                Home
                            </a>
                            <a className="link" href="#">
                                Product
                            </a>
                            <a className="link" href="#">
                                Pricing
                            </a>
                            <a className="link" href="#">
                                Contact
                            </a>
                        </div>
                        {/* desktop menu */}
                        <span className="search cursor-pointer">
                            {" "}
                            <IoSearch className="inline" />{" "}
                        </span>
                        <span className="cart cursor-pointer">
                            {" "}
                            <MdOutlineShoppingCart className="inline" />{" "}
                        </span>
                        <span
                            className="menu cursor-pointer md:hidden"
                            onClick={() => {
                                setIsOpenMenu(!isOpenMenu);
                            }}
                        >
                            {" "}
                            <RiMenu3Fill className="inline" />{" "}
                        </span>
                    </div>
                </div>
                <div
                    className={`${"transition-all duration-300 h-0 flex flex-col items-center justify-around text-lg md:hidden"} ${
                        isOpenMenu ? "h-[300px] opacity-100" : "h-0 opacity-0"
                    }`}
                >
                    <a className="link" href="#">
                        Home
                    </a>
                    <a className="link" href="#">
                        Product
                    </a>
                    <a className="link" href="#">
                        Pricing
                    </a>
                    <a className="link" href="#">
                        Contact
                    </a>
                </div>
            </header>
            {/* hero section */}
            <section id="hero" className="relative text-white h-[90vh]">
                <picture className="absolute inset-0 z-0 w-full h-full">
                    <source media="(min-width: 768px)" srcSet={desktopCover} />
                    <img
                        src={mobileCover}
                        alt="Hero"
                        className="w-full h-full object-cover object-bottom"
                        loading="lazy"
                    />
                </picture>
                {/* Overlay for background dimming */}
                <div className="absolute w-full h-full bg-black/40 z-0"></div>
                {/* content */}
                <div className="z-10 relative w-10/12 m-auto text-center md:text-left text-lg">
                    <div className="hero-headline ">
                        <h1 className="inline-block text-4xl md:text-6xl font-semibold mt-[25%] md:mt-28 mb-8 w-3/4 md:w-1/2 leading-relaxed">
                            Experts are here solve your <br /> business problem.
                        </h1>
                    </div>
                    <div className="hero-slogan mb-8">
                        <p className="inline-block w-4/5 md:w-2/5">
                            We know how large object will act, but things on a
                            small scale just do not act the way.
                        </p>
                    </div>
                    <div className="hero-buttons flex md:block md:space-x-8 flex-col items-center gap-4">
                        <button className="px-8 py-2 bg-orange-400 rounded-3xl transition-colors duration-300 border border-transparent hover:bg-transparent hover:border-white">
                            Get Quote Now
                        </button>
                        <button className="px-6 py-2 bg-transparent border rounded-3xl hover:bg-orange-400 hover:border-transparent transition-colors duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
            {/* why choose us */}
            <section id="why-choose-us" className="bg-[#252B42] text-white">
                <div className="head-slogan md:flex md:flex-col w-10/12 m-auto">
                    <h1 className="inline-block text-4xl md:text-5xl font-semibold mb-4 mt-20  w-3/5 md:w-1/2 leading-normal">
                        WHY CHOOSE US
                    </h1>
                    <p className="inline-block w-11/12 md:w-2/5 mb-8 text-lg">
                        Problems trying to resolve the conflict between the two
                        major realms of Classical physics Newtonian mechanics
                    </p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 w-10/12 m-auto gap-6 md:gap-8">
                    <div className="relative bg-white text-black py-4 px-4 space-x-4 rounded-lg why-cards">
                        <MdOutlineBusinessCenter className="inline bg-orange-400 text-white text-6xl p-4 rounded-full" />
                        <span>Business Growing</span>
                    </div>
                    <div className="bg-white text-black py-4 px-4 space-x-4 rounded-lg relative why-cards">
                        {" "}
                        <MdWeb className="inline bg-orange-400 text-white text-6xl p-4 rounded-full" />{" "}
                        <span>Web Development</span>
                    </div>
                    <div className="bg-white text-black py-4 px-4 space-x-4 rounded-lg relative why-cards">
                        <MdOutlineBusinessCenter className="inline bg-orange-400 text-white text-6xl p-4 rounded-full" />
                        <span>Digital Marketing</span>
                    </div>
                    <div className="bg-white text-black py-4 px-4 space-x-4 rounded-lg relative why-cards">
                        {" "}
                        <MdWeb className="inline bg-orange-400 text-white text-6xl p-4 rounded-full" />{" "}
                        <span>Data Science</span>
                    </div>
                    <div className="bg-white text-black py-4 px-4 space-x-4 rounded-lg relative why-cards">
                        <MdOutlineBusinessCenter className="inline bg-orange-400 text-white text-6xl p-4 rounded-full" />
                        <span>National Top 50 firms</span>
                    </div>
                    <div className="bg-white text-black py-4 px-4 space-x-4 rounded-lg relative why-cards">
                        {" "}
                        <MdWeb className="inline bg-orange-400 text-white text-6xl p-4 rounded-full" />{" "}
                        <span>AI/ML Development</span>
                    </div>
                </div>
                <div className="buttons flex md:block md:space-x-6 flex-col items-start gap-4 mt-10 w-10/12 m-auto">
                    <button className="px-8 py-2 bg-orange-400 rounded-3xl transition-colors duration-300 border border-transparent hover:bg-transparent hover:border-white">
                        Get Quote Now
                    </button>
                    <button className="px-6 py-2 bg-transparent border rounded-3xl hover:bg-orange-400 hover:border-transparent transition-colors duration-300">
                        Learn More
                    </button>
                </div>
            </section>
            {/* we take care customers */}
            <section id="we-take-care" className="bg-[#252B42] text-white">
                <div className="parent w-10/12 m-auto text-center">
                    <div className="head-slogan pb-8">
                        <h2 className="inline-block text-4xl md:text-6xl font-semibold mt-[25%] md:mt-28 mb-8 text-center leading-normal md:hidden">
                            We take care customers out all expert here.
                        </h2>
                        <h2 className="w-2/3 m-auto text-6xl font-semibold mt-28 mb-8 text-center leading-normal hidden md:inline-block">
                            We are providing best business service.
                        </h2>
                        <p className=" text-lg w-2/3 m-auto text-center">
                            Problems trying to resolve the conflict between the
                            two major realms of Classical physics: Newtonian
                            mechanics
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row md:gap-20 text-center p-3">
                        <img
                            src={cardImage}
                            alt="card-item"
                            className="text-center m-auto md:hidden"
                            loading="lazy"
                        />
                        <img
                            src={cardImageDesktop}
                            alt="card-item"
                            className="text-center m-auto hidden md:block"
                            loading="lazy"
                        />
                        <div className="most-trusted mt-16 pb-6 text-left">
                            <h2 className="text-4xl font-semibold w-4/5 mb-6">
                                Most trusted in our field
                            </h2>
                            <p className="text-lg pb-6">
                                Most calendars are designed for teams. Slate is
                                designed for freelancers who want a simple way
                                to plan their schedule.
                            </p>
                            <div className="space-y-6 text-lg">
                                <div className="flex gap-4">
                                    <span>
                                        {" "}
                                        <RiTeamLine className="inline text-blue-400 text-3xl" />
                                    </span>
                                    <span>
                                        <p>
                                            the quick fox jumps over the lazy
                                            dog
                                        </p>
                                        <span className="text-base">
                                            Things on a very small scale ...
                                        </span>
                                    </span>
                                </div>
                                <div className="flex gap-4">
                                    <span>
                                        {" "}
                                        <MdSpeed className="inline text-blue-400 text-3xl" />
                                    </span>
                                    <span>
                                        <p>
                                            the quick fox jumps over the lazy
                                            dog
                                        </p>
                                        <span className="text-base">
                                            Things on a very small scale ...
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* what clients say */}
            <section
                id="what-clients-say"
                className="bg-[#16697A] text-white text-lg pb-20"
            >
                <div className="w-10/12 m-auto pt-10">
                    <div className="head-slogan text-center">
                        <h2 className="inline-block w-1/2 text-[2rem] md:text-6xl font-semibold md:mt-28 mb-8 text-center leading-normal">
                            What Clients Say
                        </h2>
                        <p className="w-3/4 m-auto pb-8">
                            Problems trying to resolve the conflict between the
                            two major realms of Classical physics: Newtonian
                            mechanics{" "}
                        </p>
                    </div>
                    <div className="testimonial-cards w-full">
                        <div className="carousel flex-row rounded-box">
                            <div className=" carousel-item  w-full text-black bg-white py-4">
                                <img
                                    src={person}
                                    className="w-[100px] h-[100px] rounded-full relative top-8 space-x-3"
                                    alt="Tailwind CSS Carousel component"
                                    loading="lazy"
                                />
                                <div className="pl-4">
                                    <h3 className="text-3xl font-bold py-2 pt-10">
                                        Regina Miles
                                    </h3>
                                    <p>Designer</p>
                                    <p className="py-4">⭐⭐⭐⭐⭐</p>
                                    <p className="text-base opacity-65 w-4/5">
                                        This proved to be impossible using the
                                        traditional concepts of space and time.
                                        Einstein developed a new view of time
                                        first and then space. This proved to be
                                        impossible using the traditional
                                        concepts of space and time. Einstein
                                        developed a new view of time first and
                                        then space.
                                    </p>
                                </div>
                            </div>
                            <div className=" carousel-item w-full text-black bg-white py-4">
                                <img
                                    src={person}
                                    className="w-[100px] h-[100px] rounded-full relative top-8 space-x-3"
                                    alt="Tailwind CSS Carousel component"
                                    loading="lazy"
                                />
                                <div className="pl-4">
                                    <h3 className="text-3xl font-bold py-2 pt-10">
                                        Regina Miles
                                    </h3>
                                    <p>Designer</p>
                                    <p className="py-4">⭐⭐⭐⭐⭐</p>
                                    <p className="text-base opacity-65 w-4/5">
                                        This proved to be impossible using the
                                        traditional concepts of space and time.
                                        Einstein developed a new view of time
                                        first and then space. This proved to be
                                        impossible using the traditional
                                        concepts of space and time. Einstein
                                        developed a new view of time first and
                                        then space.
                                    </p>
                                </div>
                            </div>
                            <div className=" hidden md:flex carousel-item w-full text-black bg-white py-4">
                                <img
                                    src={person}
                                    className="w-[100px] h-[100px] rounded-full relative top-8 space-x-3"
                                    alt="Tailwind CSS Carousel component"
                                    loading="lazy"
                                />
                                <div className="pl-4">
                                    <h3 className="text-3xl font-bold py-2 pt-10">
                                        Regina Miles
                                    </h3>
                                    <p>Designer</p>
                                    <p className="py-4">⭐⭐⭐⭐⭐</p>
                                    <p className="text-base opacity-65 w-4/5">
                                        This proved to be impossible using the
                                        traditional concepts of space and time.
                                        Einstein developed a new view of time
                                        first and then space. This proved to be
                                        impossible using the traditional
                                        concepts of space and time. Einstein
                                        developed a new view of time first and
                                        then space.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* meet our team */}
            <section
                id="meet-our-team"
                className="bg-[#252B42] text-white text-lg pb-20"
            >
                <div className="w-10/12 m-auto pt-10">
                    <div className="head-slogan text-center">
                        <h2 className="inline-block w-1/2 text-[2rem] md:text-6xl font-semibold md:mt-28 mb-8 text-center leading-normal">
                            Meet Our Team
                        </h2>
                        <p className="w-3/4 m-auto pb-8">
                            Problems trying to resolve the conflict between the
                            two major realms of Classical physics: Newtonian
                            mechanics{" "}
                        </p>
                    </div>
                    <div className="testimonial-cards w-full">
                        <div className="carousel carousel-center space-x-4 rounded-box w-full">
                            <div className="carousel-item flex flex-col justify-center items-center w-[80vw]  max-w-xl text-black bg-white py-6 px-4 rounded-xl shadow-md">
                                <img
                                    src={teamCo}
                                    className="w-[200px] h-[200px] rounded-full object-cover"
                                    alt="Tailwind CSS Carousel component"
                                    loading="lazy"
                                />
                                <div className="text-center">
                                    <h4 className="text-[#FFA62B] mt-3 font-semibold">
                                        CO Founder
                                    </h4>
                                    <h3 className="text-3xl font-bold py-2">
                                        Avie Beaton
                                    </h3>
                                    <p>Designer</p>
                                    <p className="py-4">⭐⭐⭐⭐⭐</p>
                                    <p className="text-base opacity-65 max-w-md mx-auto">
                                        the quick fox jumps over the lazy dog
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item flex flex-col justify-center items-center w-[80vw] max-w-xl text-black bg-white py-6 px-4 rounded-xl shadow-md">
                                <img
                                    src={teamCEO}
                                    className="w-[200px] h-[200px] rounded-full object-cover"
                                    alt="Tailwind CSS Carousel component"
                                    loading="lazy"
                                />
                                <div className="text-center">
                                    <h4 className="text-[#FFA62B] mt-3 font-semibold">
                                        CEO
                                    </h4>
                                    <h3 className="text-3xl font-bold py-2">
                                        Ashley Fletcher
                                    </h3>
                                    <p>Designer</p>
                                    <p className="py-4">⭐⭐⭐⭐⭐</p>
                                    <p className="text-base opacity-65 max-w-md mx-auto">
                                        the quick fox jumps over the lazy dog
                                    </p>
                                </div>
                            </div>

                            <div className="carousel-item flex flex-col justify-center items-center w-[80vw] max-w-xl text-black bg-white py-6 px-4 rounded-xl shadow-md">
                                <img
                                    src={teamCo}
                                    className="w-[200px] h-[200px] rounded-full object-cover"
                                    alt="Tailwind CSS Carousel component"
                                    loading="lazy"
                                />
                                <div className="text-center">
                                    <h4 className="text-[#FFA62B] mt-3 font-semibold">
                                        CO Founder
                                    </h4>
                                    <h3 className="text-3xl font-bold py-2">
                                        Avie Beaton
                                    </h3>
                                    <p>Designer</p>
                                    <p className="py-4">⭐⭐⭐⭐⭐</p>
                                    <p className="text-base opacity-65 max-w-md mx-auto">
                                        the quick fox jumps over the lazy dog
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our branches */}
            <section
                id="our-branches"
                className="bg-[#252B42] text-white text-lg text-left z-10 "
            >
                <div className="w-10/12 m-auto pt-10 md:flex items-center justify-between md:pb-96">
                    <div className="md:w-1/2 space-y-4">
                        <h2 className="inline-block text-[2rem] md:text-6xl font-semibold md:mt-28 mb-8 leading-normal">
                            We Have Branches All Over The World{" "}
                        </h2>
                        <p>
                            The gradual accumulation of information about atomic
                            and small-scale behaviour during the first quarter
                            of the 20th century, which gave some indications
                            about how small things do behave, produced an
                            increasing confusion which was Heisenberg, and Born.
                        </p>
                    </div>
                    <div className="py-20">
                        <img src={world} alt="world map" loading="lazy" />
                    </div>
                </div>
                {/* contact-form */}
                <section
                    id="contact-form"
                    className="bg-white pb-4 md:absolute"
                >
                    <form
                        id="contact-form"
                        className="md:w-4/6 m-auto bg-white text-black md:flex gap-6 justify-center items-center md:-mt-72 md:pb-24 z-50"
                    >
                        <div className="md:w-2/5 m-auto md:h-[80vh] md:overflow-hidden">
                            <img
                                src={contact}
                                alt="contact-team"
                                loading="lazy"
                                className=" md:h-full md:object-cover m-auto w-full"
                            />
                        </div>

                        <div className=" m-auto w-10/12 md:px-6">
                            <h2 className="form-title text-3xl md:text-6xl font-semibold md:mt-28 mb-10 leading-snug text-[#252B42]">
                                Get A Free Quote Here
                            </h2>

                            <div className="gap-6">
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Name
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        htmlFor="Email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Email
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="Email"
                                        placeholder="free-palestine@gmail.com"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Department Field */}
                                <div className="md:col-span-2">
                                    <label
                                        htmlFor="department"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Department
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="department"
                                        id="department"
                                        defaultValue=""
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="" disabled>
                                            Select
                                        </option>
                                        <option value="Customer care">
                                            Customer care
                                        </option>
                                        <option value="Call Center">
                                            Call Center
                                        </option>
                                        <option value="Troubleshoot">
                                            Troubleshoot
                                        </option>
                                    </select>
                                    {/* time selection */}
                                    <label
                                        htmlFor="Time"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Time
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="Time"
                                        id="Time"
                                        defaultValue=""
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="" disabled>
                                            Select
                                        </option>
                                        <option value="Customer care">
                                            4:00 PM Avalilable
                                        </option>
                                        <option value="Call Center">
                                            6:00 PM Avalilable
                                        </option>
                                        <option value="Troubleshoot">
                                            8:00 PM Avalilable
                                        </option>
                                    </select>
                                </div>
                                <button className="bg-[#FFA62B] text-white w-full mt-8 py-2 rounded-lg">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </section>
            {/* filler */}
            <div className="hidden md:block h-[70vh]"></div>
            {/* filler */}

            {/* footer */}
            <footer className="relative pt-10 z-50">
                <div className="footer-main">
                    <div className="get-in-touch"></div>
                    <div className="company-info"></div>
                    <div className="features"></div>
                    <div className="resources"></div>
                </div>
                <div className="footer-bottom bg-[#252B42]">
                    <p>Made With Love By Figmaland All Right Reserved</p>
                </div>
            </footer>
        </>
    );
};

export default App;
