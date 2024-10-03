import React from 'react';

const AboutUs = () => {
    return (
        <main className="bg-white min-h-screen flex flex-col items-center justify-center">
            {/* Header Section */}
            <div 
                className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden h-[75vh] bg-cover bg-center" 
                style={{ backgroundImage: "url('header.png')" }} // This sets the background image
            >
                {/* Overlay Text Section */}
                <div className="absolute bottom-10 right-16 flex items-end justify-end p-4">
                    <div className="bg-red-700 px-7 py-9 rounded-lg text-white text-left max-w-sm">
                        <h1 className="text-lg md:text-xl font-bold poppins-bold leading-tight">
                            We Promote Social Justice through Research, Capacity Building, Advocacy, and<br /> Public Participation
                        </h1>
                    </div>
                </div>
            </div>

            {/* Middle Section with Quote */}
            <div className="mt-16 mb-10 text-center"> {/* Adjusted margin-bottom here */}
                <p className="text-lg md:text-xl text-red-700 font-medium italic relative">
                    <span className="text-orange-500 text-7xl font-bold poppins-bold font-weight-700 absolute -left-2 -top-9">“</span>
                    Envisioning a resilient, informed &<br /> transformative society
                    <span className="text-orange-600 text-4xl font-bold absolute -bottom-6">”</span>
                </p>
            </div>

            <div className="mt-9 flex justify-center w-full">
                <div className="bg-red-600 h-4 w-3/4"></div>
                <div className="bg-orange-500 h-4 w-1/4"></div>
            </div>
        </main>
    );
};

export default AboutUs;