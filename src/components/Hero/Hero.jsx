import React from 'react'
import heroImage1 from "../../assets/heroImage1.png"

const Hero = () => {
    return (
        <section className="relative bg-white py-12 px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Welcome to the{" "}
                        <span className="text-green-600">Saylani Microfinance</span>
                        <br></br>
                        Empowering Communities Through Accessible Microfinance
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        The largest NGO offering free{" "}
                        <span className="text-blue-600 font-semibold">clean water</span>.
                    </p>
                    <p className="mt-4 text-gray-600">
                        Saylani Welfare is on the ground and already working with local
                        communities to assess how best to support underprivileged families
                        in more than 63 areas of day-to-day lives.
                    </p>
                    <button className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow cursor-pointer">
                        Apply Loan
                    </button>
                </div>

                {/* Images */}
                <div>
                    <img src={heroImage1} alt="image1" />
                </div>
            </div>
        </section>
    );
};

export default Hero