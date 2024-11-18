import Mocha from "../assets/Mocha.jpeg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_sn70eas', 'template_440rfhp', form.current, 'LsQydn94cP5h4yB-f')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Message sent successfully!');
                    form.current.reset(); // Reset the form after successful submission
                },
                (error) => {
                    console.error('FAILED...', error);
                    alert(`Failed to send message. Error: ${error.text}`);
                }
            );
    };

    return (
        <>
            <div id="contact">
                <div className="text-center mt-20">
                    <h1
                        style={{ fontFamily: "Poppins" }}
                        className="text-center text-3xl font-bold text-[#3e2723] mb-2"
                    >
                        Contact us
                    </h1>
                    <h2
                        style={{ fontFamily: "Poppins" }}
                        className="text-center text-md text-[#3e2723]  mb-6"
                    >
                        Reach Out
                    </h2>
                </div>
            <section
    style={{ fontFamily: "Poppins" }}
    className="flex flex-col md:flex-row items-stretch justify-center p-4 md:p-8 gap-8"
>
    {/* Contact Form */}
    <div className="w-full md:w-[55%] flex flex-col bg-orange-100 border border-orange-800 rounded-lg p-6 md:p-10 shadow-md">
        <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4 h-full"
        >
            <div className="flex flex-row w-full space-x-4">
                <div className="flex flex-col w-1/2">
                    <h2 className="mb-1">First Name</h2>
                    <input
                        type="text"
                        name="from_name"
                        className="border-b border-black focus:outline-none focus:border-orange-800"
                        style={{
                            borderRadius: "0",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                            height: "7vh",
                        }}
                    />
                </div>
                <div className="flex flex-col w-1/2">
                    <h2 className="mb-1">Last Name</h2>
                    <input
                        type="text"
                        name="from_name"
                        className="border-b border-black focus:outline-none focus:border-orange-800"
                        style={{
                            borderRadius: "0",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                            height: "7vh",
                        }}
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <h2>Email Address</h2>
                <input
                    type="email"
                    name="user_email"
                    className="border-b border-black focus:outline-none focus:border-orange-800"
                    style={{
                        borderRadius: "0",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        height: "7vh",
                    }}
                />
            </div>
            <div className="flex flex-col">
                <h2>Phone Number</h2>
                <input
                    type="tel"
                    name="phone_number"
                    className="border-b border-black focus:outline-none focus:border-orange-800"
                    style={{
                        borderRadius: "0",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        height: "7vh",
                    }}
                />
            </div>
            <div className="flex flex-col">
                <h2>Your Message</h2>
                <textarea
                    name="message"
                    rows={3}
                    className="border-b border-black focus:outline-none focus:border-orange-800"
                    style={{
                        borderRadius: "0",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                    }}
                />
            </div>
            <button
                type="submit"
                className="mt-4 bg-orange-800 text-white py-2 px-4 rounded-md"
            >
                Send Message
            </button>
        </form>
    </div>
    {/* Image Section */}
    <div className="w-full md:w-[45%] flex items-center justify-center h-full">
        <div className="w-full max-w-lg">
            <img
                src={Mocha}
                className="w-full h-full object-cover border border-black rounded-lg shadow-lg"
                alt="Coffee with heart latte art"
            />
        </div>
    </div>
</section>


            </div>
        </>
    );
}

export default Contact;