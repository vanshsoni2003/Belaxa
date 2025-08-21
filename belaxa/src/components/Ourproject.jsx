const base = import.meta.env.BASE_URL;

const Ourproject =()=>{

    return(
        <>
        <section className="w-full bg-black flex justify-center items-center py-12 px-4">
  {/* Outer Gradient Border */}
  <div className="w-full max-w-[1100px] p-[2px] rounded-2xl bg-gradient-to-r from-green-400 via-red-500 to-black">
    {/* Inner Content Box */}
    <div className="w-full h-full bg-black rounded-2xl p-6 md:p-8">
      
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
          <span className="text-[#FC31B9]">Our</span>{" "}
          <span className="text-[#09F7CC]">Projects</span>
          <div className="text-sm md:text-base text-gray-400 mt-1">
            What We Create
          </div>
        </h2>
        <p className="mt-4 md:mt-0 text-gray-400 text-center md:text-right">
          Explore Our Creativity
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* Column 1 */}
        <div className="space-y-4 md:space-y-6">
          <img
            src={`${base}images/ourproject/1.jpg`}
            alt="Project 1"
            className="rounded-2xl shadow-lg w-full object-cover h-[250px] md:h-[350px]"
          />
        </div>

        {/* Column 2 */}
        <div className="space-y-4 md:space-y-6">
          <img
            src={`${base}images/ourproject/2.jpg`}
            alt="Project 2"
            className="rounded-2xl shadow-lg w-full object-cover h-[180px] md:h-[200px]"
          />
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img
              src={`${base}images/ourproject/3.jpg`}
              alt="Project 3"
              className="rounded-2xl shadow-lg w-full object-cover h-[120px] md:h-[150px]"
            />
            <img
              src={`${base}images/ourproject/4.jpg`}
              alt="Project 4"
              className="rounded-2xl shadow-lg w-full object-cover h-[120px] md:h-[150px]"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4 md:space-y-6">
          <img
            src={`${base}images/ourproject/5.jpg`}
            alt="Project 5"
            className="rounded-2xl shadow-lg w-full object-cover h-[250px] md:h-[350px]"
          />
        </div>

      </div>
    </div>
  </div>
</section>

        </>
    )

}
export default Ourproject