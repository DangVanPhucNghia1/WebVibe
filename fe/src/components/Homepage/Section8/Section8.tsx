import React from "react";

const Section8 = () => {
    return (
        <section className="relative z-10 bg-[#67AE6E]  py-10 px-4 md:px-16 rounded-2xl shadow-xl -mb-20 mt-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Build Successful <br />
                        Websites With Avada
                    </h2>
                    <p className="text-white max-w-md mx-auto md:mx-0">
                        Whether you are a beginner, marketer, or professional, Avada has the tools & resources you can rely on to succeed.
                    </p>
                    <button className="mt-4 bg-green-800 text-white font-semibold px-6 py-3 rounded-sm hover:bg-[#90C67C] transition">
                        Buy Avada For $69 →
                    </button>
                </div>

                {/* Hình ảnh */}
                <div className="flex-1 flex justify-center md:justify-center">
                    <img
                        src="/img/homepage/image_section_8_1.png"
                        alt="Avada UI Preview"
                        className="rounded-xl w-full max-w-sm h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Section8;
