const base = import.meta.env.BASE_URL;

const Ourservices = () => {
    return (
        <>
          <section className="w-full bg-black flex justify-center px-4 md:px-8">
  <div className=" w-full max-w-[1230px] p-6 md:p-8">
    
    {/* Heading */}
    <div className="mb-6 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#09F7CC8C] to-[#FC31B9] bg-clip-text text-transparent">
        Our services
      </h1>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
      
      {/* Card 1 */}
      <div className="w-full h-[250px] md:h-[300px] rounded-2xl p-[1px] bg-gradient-to-b from-pink-400 to-black flex items-center justify-center">
        <div className="bg-black rounded-2xl w-full h-full flex flex-col items-center justify-center p-4">
          <p className="text-3xl md:text-5xl font-bold leading-tight text-center bg-gradient-to-r from-[#09F7CC8C] to-[#FC31B9] bg-clip-text text-transparent">
            Web <br /> Developer
          </p>
          <button className="px-5 py-2 md:px-6 md:py-3 rounded-2xl hover:bg-[#FC31B9] transition font-semibold text-white shadow-lg flex items-center gap-3 mt-4">
            Explore More
            <img
              src={`${base}images/About/Group 20.png`}
              alt="Arrow"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full h-[250px] md:h-[300px] rounded-2xl p-[1px] bg-gradient-to-t from-green-400 to-black flex items-center justify-center">
        <div className="bg-black rounded-2xl w-full h-full flex flex-col items-center justify-center p-4">
          <p className="text-3xl md:text-5xl font-bold leading-tight text-center bg-gradient-to-r from-[#09F7CC8C] to-[#FC31B9] bg-clip-text text-transparent">
            Graphic Design
          </p>
          <button className="px-5 py-2 md:px-6 md:py-3 rounded-2xl hover:bg-[#FC31B9] transition font-semibold text-white shadow-lg flex items-center gap-3 mt-4">
            Explore More
            <img
              src={`${base}images/About/Group 20.png`}
              alt="Arrow"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

        </>
    )
}
export default Ourservices