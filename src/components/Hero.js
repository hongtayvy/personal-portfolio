import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
    AiOutlineTwitter,
    AiOutlineYoutube,
    AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
    return (
        <section className="bg-primary px-5 text-black py-32">
            {/*
                justify-center - flex and grid items are positioned along a container's main axis
                md:justify-center - flex and grid items are positioned along a container's main axis on medium level screens
                container - does not center automatically can use mx-auto to center             
            */}
            {/* <div className="container mx-auto grid grid-cols-3 md:grid-cols-2 items-center justify-center md:justify-between"> */}
            <div class="container mx-auto grid grid-cols-3 justify-center items-center">
                <div className="hero-info -ml-3">
                    <h1 className="text-[300px] text-black tracking-widest">
                        FULL
                    </h1>
                </div>
                <div className="hero-img object-contain">
                    <img
                        src={HeroImg}
                        alt="coding illustration"
                        className="lgw-[50%] ml-auto"
                    />
                </div>
                <div className="hero-info -ml-60 -mr-40">
                    <h1 className="text-[300px] text-white tracking-widest">
                        STACK
                    </h1>
                </div>
                {/* <div class="relative rounded-full overflow-hidden">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="object-cover w-full h-full" />
                    <div class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4">this is a text</div>
                </div> */}
            </div>


        </section>
    );
};

export default Hero;