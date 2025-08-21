const base = import.meta.env.BASE_URL;

const Getintouch =()=>{
    return(
        <>
        <section className="bg-black xl:h-[700px] h-full px-4 py-10">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-pink-400 to-black bg-clip-text text-transparent">
            Get in Touch
          </h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 mt-12 gap-8">
          {/* left side */}
          <div className="mt-2 w-full xl:ml-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* input boxes */}
              <div className="inline-block p-[2px] bg-gradient-to-r from-black to-[#09F7CC] rounded-md">
                <div className="h-[45px] w-full bg-black rounded-md"></div>
              </div>

              <div className="inline-block p-[2px] bg-gradient-to-r from-black to-[#09F7CC] rounded-md">
                <div className="h-[45px] w-full bg-black rounded-md"></div>
              </div>

              <div className="inline-block p-[2px] bg-gradient-to-l from-black to-[#FC31B9] rounded-md">
                <div className="h-[45px] w-full bg-black rounded-md"></div>
              </div>

              <div className="inline-block p-[2px] bg-gradient-to-l from-black to-[#FC31B9] rounded-md">
                <div className="h-[45px] w-full bg-black rounded-md"></div>
              </div>
            </div>

            {/* textarea */}
            <div className="mt-6 inline-block p-[2px] bg-gradient-to-r from-black to-[#09F7CC] rounded-md w-full">
              <div className="h-[120px] w-full bg-black rounded-md"></div>
            </div>

            {/* submit button */}
            <div className="mt-6 inline-block p-[2px] bg-gradient-to-r from-[#FC31B9] to-[#09F7CC] rounded-md w-full sm:w-[250px]">
              <div className="h-[50px] w-full bg-black rounded-md flex items-center justify-center">
                <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#FC31B9] to-[#09F7CC] bg-clip-text text-transparent">
                  Submit
                </h1>
              </div>
            </div>
          </div>

          {/* right side image */}
          <div className="w-full h-full flex justify-center">
            <img
              src={`${base}images/Getintouch/1.jpg`}
              alt="Get in touch"
              className="w-full max-w-[500px] h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
        </>
    )
}
export default Getintouch
