import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import mobileCover from "./assets/hero-cover/mobile-cover.png";
import desktopCover from "./assets/hero-cover/desktop-cover.png";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { MdWeb } from "react-icons/md";

const App = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
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
                    className={`${"menu transition-all duration-300 h-0 flex flex-col items-center justify-around text-lg md:hidden"} ${
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
                    <p className="inline-block w-11/12 md:w-2/5 mb-8">
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
                <div className="parent w-10/12 m-auto">
                    <div className="head-slogan">
                        <h2 className="inline-block text-4xl md:text-6xl font-semibold mt-[25%] md:mt-28 mb-8 text-center leading-relaxed">
                            We take care customers out all expert here.
                        </h2>
                        <p>
                            Problems are trying to resolve the conflict between
                            the two major realms of Classical physics; Newtonian
                            mechanics
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;
