import Mocha from "../assets/Mocha.jpeg";

function Contact() {
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
            className="text-center text-lg text-blue-600 mb-6"
          >
            Reach Out
          </h2>
        </div>
        <section
          style={{ fontFamily: "Poppins" }}
          className="flex flex-col md:flex-row items-start justify-center p-4 md:p-8"
        >
          {/* Contact Form */}
          <div className="w-full min-h-[300px] md:w-1/2 mb-6 md:mb-0  ">
            <form className="flex flex-col space-y-4 p-6 md:p-10 border bg-orange-100 border-orange-800 rounded-lg">
              <div className="flex flex-row w-full space-x-4">
                <div className="flex flex-col w-1/2">
                  <h2 className="mb-1">First Name</h2>
                  <input
                    type="text"
                    className="border-b border-black focus:outline-none focus:border-orange-800"
                    style={{
                      borderRadius: "0",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      height: '7vh'
                    }}
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <h2 className="mb-1">Last Name</h2>
                  <input
                    type="text"
                    className="border-b border-black focus:outline-none focus:border-orange-800"
                    style={{
                      borderRadius: "0",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      height: '7vh'
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h2>Email Address</h2>
                <input
                  type="email"
                  className="border-b border-black focus:outline-none focus:border-orange-800"
                  style={{
                    borderRadius: "0",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    height: '7vh'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <h2>Phone Number</h2>
                <input
                  type="tel"
                  className="border-b border-black focus:outline-none focus:border-orange-800"
                  style={{
                    borderRadius: "0",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    height: '7vh'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <h2>Your Message</h2>
                <textarea
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
              <button type="submit" className="mt-4 bg-orange-800 text-white py-2 px-4 rounded-md">
                Send Message
              </button>
            </form>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={Mocha} className="w-full md:w-3/4 h-auto object-cover border border-black rounded-lg" alt="Contact" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
