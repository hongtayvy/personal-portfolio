import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
    return (
        <section className="bg-accent text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-img">
                    <img
                        src={AboutImg}
                        alt="coding illustration"
                        className="lgw-[80%] md:ml-auto"
                    />
                </div>
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] pb-2">
                        About Me
                    </h2>

                    <p className="pb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;