const base = import.meta.env.BASE_URL;

const About = ()=>{
    return(
        <>
         <section className="relative bg-black py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-14 ">
        
        {/* Left Side Image */}
        <div className="flex-1 flex justify-center xl:mr-8">
          <img
            src={`${base}images/About/Mask group.png`}
            alt="About Us"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Side Text */}
        <div className="flex-1 space-y-6 text-center md:text-left text-white">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-[#FC31B9]">Us</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a team of passionate innovators dedicated to delivering top-notch IT solutions. 
            With expertise in modern technologies, we empower businesses to achieve digital transformation 
            and unlock new opportunities.  
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to provide scalable, reliable, and cost-effective services that help 
            organizations stay ahead in today’s fast-paced world.
          </p>
         <button className="px-6 py-3 rounded-2xl hover:bg-[#FC31B9] transition font-semibold text-white shadow-lg flex items-center gap-3">
  Explore More
  <img
    src={`${base}images/About/Group 20.png`}
    alt="Arrow"
    className="h-6 w-6"
  />
</button>

        </div>
      </div>
    </section>
        </>
    )

}
export default About 