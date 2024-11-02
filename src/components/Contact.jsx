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
      <section
        style={{ fontFamily: "Poppins" }}
        className="flex flex-col md:flex-row items-center justify-center p-8"
      >
        {/* Contact From  */}
        <div className="w-full  md:w-1/2">
          <form className="flex flex-col space-y-4 p-10  bg-orange-800 border rounded-lg ">
            <div className="flex flex-row w-full space-x-4">
              <div className="flex flex-col w-1/2">
                <h2 className="">First Name</h2>

                <input
                  
                  placeholder="First Name"
                  type="text"
                  className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  style={{ borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none",height:'7vh' }}                  
                />
              </div>
              <div className="flex flex-col w-1/2">
                <h2>Last Name</h2>
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" flex flex-row p-3   rounded-md  "
                  style={{ borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none",height:'7vh' }}                  

                />
              </div>
            </div>
            <div className="flex flex-col ">
            <h2>Email Adress</h2>
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              style={{ borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none",height:'7vh' }}                  

            />
            </div>
            <div className="flex flex-col ">
            <h2>Phone Number</h2>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              style={{ borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none",height:'7vh' }}                  

            />
            </div>
            <div className="flex flex-col ">
            <h2>Last Name</h2>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              style={{ borderRadius: "0", borderTop: "none", borderLeft: "none", borderRight: "none", }}                  

            />
            
            </div>
            <button type="submit">Send Message </button>
          </form>
        </div>
        {/* Image Section  */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={Mocha} className="w-3/4 " alt="" />
        </div>
      </section>
    </>
  );
}
export default Contact;
