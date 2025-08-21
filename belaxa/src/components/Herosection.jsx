const base = import.meta.env.BASE_URL;

const Herosection =()=>{
    return(
        <>
       <section className="relative bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        
        {/* Left Side Content */}
        <div className="flex-1 text-center md:text-left space-y-6 xl:ml-24">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight  bg-gradient-to-r from-[#09F7CC8C] to-[#FC31B9] bg-clip-text text-transparent">
            Welcome To Balaxa  <span className="text-[#09F7CC]"></span>  <br />
            Balaxa Design  <span className="text-[#FC31B9]">& tech</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            We deliver innovative technology services that help your business grow,
            scale, and stay ahead of the competition.
          </p>
          <div className="flex justify-center md:justify-start gap-4 ">
            <button className="px-6 py-3 rounded-2xl bg-[#FC31B9] bg-gradient-to-r from-[#FC31B9] to-[#09F7CC]  hover:bg-[#09F7CC] transition font-semibold shadow-lg">
              Get Started
            </button>
           
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 mt-12 md:mt-0 flex justify-center">
          <img
            src={`${base}images/Hero/Group 5.png`}
            alt="Hero Illustration"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
        
        </>
    )
}
export default Herosection