import Button from "./button/Button.jsx";
const base = import.meta.env.BASE_URL;

const Founder = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto text-center text-white mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">Meet Our Founders</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2   px-6 md:px-56">
        {/* Founder 1 */}
        <div className="flex flex-col items-center text-center  p-6 rounded-2xl shadow-lg xl:w-[500px]">
         <div className="w-44 h-44 rounded-full p-[3px] bg-gradient-to-r from-[#09F7CC] to-[#FC31B9]">
  <img
    src={`${base}images/Founder/2.jpg`}
    alt="Founder 1"
    className="w-full h-full object-cover rounded-full"
  />
</div>
          <h3 className="text-2xl font-semibold mb-2 text-white">Harsh N Patel</h3>
          <Button/>
        </div>

        {/* Founder 2 */}
        <div className="flex flex-col items-center text-center  p-6 rounded-2xl shadow-lg xl:w-[500px]">
            <div className="w-44 h-44 rounded-full p-[3px] bg-gradient-to-r from-[#09F7CC] to-[#FC31B9]">
          <img
             src={`${base}images/Founder/1.jpg`}
            alt="Founder 2"
            className="w-full h-full object-cover rounded-full mb-4"
          />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-white">Another Founder</h3>
          <Button/>
        </div>

      </div>
      <div className="container flex justify-center">
     <div className="inline-block  p-[3px] bg-gradient-to-r from-[#09F7CC] to-[#FC31B9]">
  <button className="w-[200px] h-[40px]  bg-black text-white font-semibold">
    Meet our Team
  </button>
</div>
</div>

    </section>
  );
};

export default Founder;
