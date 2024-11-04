import Mocha from "../assets/Mocha.jpeg";

function Contact() {
  return (
    <>
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
        className="flex flex-col md:flex-row items-start justify-center p-8"
      >
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col space-y-4 p-10  border bg-orange-100 border-orange-800 rounded-lg">
            <div className="flex flex-row w-full space-x-4">
              <div className="flex flex-col w-1/2">
                <h2 className="mb-1">First Name</h2> {/* Reduced margin-bottom */}
                <input
                  type="text"
                  className=" border-b border-black focus:outline-none focus:border-orange-800 "
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
                <h2 className="mb-1">Last Name</h2> {/* Reduced margin-bottom */}
                <input
                  type="text"
                  className=" border-b border-black focus:outline-none focus:border-orange-800 "
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
              <h2 className="">Email Address</h2> {/* Reduced margin-bottom */}
              <input
                type="email"
                className=" border-b border-black focus:outline-none focus:border-orange-800 "
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
              <h2 className="">Phone Number</h2> {/* Reduced margin-bottom */}
              <input
                type="tel"
                className=" border-b border-black focus:outline-none focus:border-orange-800 "
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
              <h2 className="">Your Message</h2> {/* Reduced margin-bottom */}
              <textarea
                rows={3}
                className=" border-b border-black focus:outline-none focus:border-orange-800 "
                 style={{
                  borderRadius: "0",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              />
            </div>
            <button type="submit" className="mt-4">Send Message</button>
          </form>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={Mocha} className="w-3/4" alt="" />
        </div>
      </section>
    </>
  );
}

export default Contact;
