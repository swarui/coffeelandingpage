import coffee from "../assets/Coffee.png";
import Kahawa1 from '../assets/Kahawa1.png'
import Kahawa2 from '../assets/Kahawa2.png'
function Home() {
  return (
    <>
      {/* Main Body */}
      <div className="flex lg:flex-row flex-col  ">
        {/* Left Text Body */}
        <div className="w-full lg:w-1/2  lg:mt-20 p-10 lg:ml-10 flex flex-col  lg:text-left  ">
          <h1
            className="text-[10.5em] font-bold  text-orange-800"
            style={{ fontFamily: "moonet" }}
          >
            KAHAWA
          </h1>
          <h2
            style={{ fontFamily: "Poppins" }}
            className=" text-orange-800 font-semibold mt-[-1.5em] text-[1.5em] "
          >
            {" "}
            Awaken your senses
          </h2>
          <h2
            style={{ fontFamily: "Poppins" }}
            className="text-[0.940em] mt-4 "
          >
            Because life is too short for brand coffee.Our brews are an
            invitation to taste, to feel, too savor with our Kenyan Brewed
            Coffee
          </h2>
          <div className="w-auto flex gap-8 ">
            <button
              style={{ fontFamily: "Poppins" }}
              className="  cursor-pointer flex justify-between px-4 py-2 text-white  shadow-lg hover:scale-105 duration-500 hover:ring-1 border border-black bg-green-800 mt-6"
            >
              Download App
            </button>
            <button
              style={{ fontFamily: "Poppins" }}
              className="   cursor-pointer flex justify-between px-4 py-2 text-black  shadow-lg hover:scale-105 duration-500 hover:ring-1 border border-orange-300  mt-6"
            >
              Newsletter
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className=" w-full lg:w-1/2 flex justify-center  ">
          {" "}
          <img
            className="  lg:w-[600px] sm:w-[50px] md:w-[250px] "
            src={Kahawa2}
            alt=""
          />{" "}
        </div>
        <div className="">
          <button></button>
        </div>
      </div>
    </>
  );
}
export default Home;
