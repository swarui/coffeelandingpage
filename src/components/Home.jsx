import coffee from "../assets/Coffee.png";

function Home() {
  return (
    <>
      {/* Main Body */}
      <div className="flex lg:flex-row flex-col ">
        {/* Left Text Body */}
        <div className="w-full lg:w-1/2  mt-10 p-10 flex flex-col  lg:text-left  ">
          <h1 className="text-[7.5em] font-bold  text-orange-800" style={{fontFamily:'moonet'}} >KAHAWA</h1>
          <h2
            style={{ fontFamily: "Poppins" }}
            className=" text-orange-800 font-semibold mt-[-1.5em] text-[1.5em] "
          >
            {" "}
            Awaken your senses
          </h2>
          <h2
            style={{ fontFamily: "Poppins" }}
            className="text-[0.840em] mt-4 "
          >
            Because life is too short for brand coffee.Our brews are an
            invitation to taste, to feel, too savor with our Kenyan Brewed
            Coffee
          </h2>
        </div>
        {/* Image Container */}
        <div className=" w-full lg:w-1/2 flex justify-center  ">
          {" "}
          <img  className="lg:w-[450px] sm:w-[50px] md:w-[250px] " src={coffee} alt="" />{" "}
        </div>
      </div>
    </>
  );
}
export default Home;
