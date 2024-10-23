import img from '../assets/Coffee.png'
function AboutUs(){
    return(<>

<div className="mt-10">
        <h1
          style={{ fontFamily: "Poppins" }}
          className="text-center text-[1.5em] text-black "
        >
          Who are we?
        </h1>
        <h2 style={{ fontFamily: "Poppins" }}
          className="text-center text-[0.8em] text-blue-600" >About Us</h2>
    <div className="flex lg:flex-row flex-col">
        {/* Left Image body */}
        <div className="w-full lg:w-1/2">
        <img src={img}  className='mt-[-20vh] lg:w-[550px] sm:w-[250px] md:w-[550px] ' alt="" />
        </div>
        {/* Right text Area */}
        <div className='w-full lg:w-1/2 mt-20  p-10'>
        <h2  style={{fontFamily:'Poppins'}} >Kahawa Ke, where coffee and comfort come together in perfect harmony. Nestled in the heart of Nairobi,Kenya.We pride ourselves on offering a unique experience for coffee lovers and travelers alike. At Kahawa Ke, we believe that great coffee isn't just a drink—it's a lifestyle.</h2>
        </div>
        </div>
    </div>
    </>)
}
export default AboutUs  