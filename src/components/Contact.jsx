import Mocha from "../assets/Mocha.jpeg";

function Contact() {
  return (
    <>
         <div className="text-center mt-20 ">
          {" "}
          <h1
            style={{ fontFamily: "Poppins" }}
            className="text-center text-3xl font-bold text-[#3e2723] mb-2"
          >
            Contact us
          </h1>
          <h2
            style={{ fontFamily: "Poppins" }}
            className="text-center  text-lg text-blue-600  mb-6"
          >
            Reach Out
          </h2>{" "}
        </div>
      <section className="flex flex-col md:flex-row items-center justify-center">
   
        {/* Contact From  */}
        <div className="w-full  md:w-1/2">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button type="submit">Send Message </button>
          </form>
        </div>
        {/* Image Section  */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={Mocha} className="w-50 h-50" alt="" />
        </div>
      </section>
    </>
  );
}
export default Contact;
