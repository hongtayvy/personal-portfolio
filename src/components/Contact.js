import React from "react";

const Contact = () => {
    return (
        <section className="px-5 py-32 h-72 bg-gradient-to-t from-[#ACD8AA] to-[#FFFFFF]" id="contact">
            <div className="text-center md:w-[60%] mx-auto text-black">
                <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto pb-2">
                    Contact Me
                </h2>
                <p>
                    I am currently open for a fulltime Frontend Developer role. If you
                    want to discuss about that feel free to email me or call me.
                </p>

                <p className="py-2">
                    <span className="font-bold">Email:</span> coderamrin@gmail.com
                </p>
                <p className="py-2">
                    <span className="font-bold">Phone:</span> +88 01624-890723
                </p>
            </div>
        </section>
    );
};

export default Contact;