const Group =()=>{

    return(
        <>
       <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-24">
        
        {/* Card 1 */}
        <div className="w-[200px] h-[200px] rounded-2xl p-[1px] bg-gradient-to-t from-black to-pink-500 flex items-center justify-center">
          <div className="bg-black rounded-2xl w-full h-full flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">+500</h3>
            <p className="text-gray-300 mt-2">Projects</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[200px] h-[200px] rounded-2xl p-[1px] bg-gradient-to-t from-green-400 to-black flex items-center justify-center">
          <div className="bg-black rounded-2xl w-full h-full flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">5</h3>
            <p className="text-gray-300 mt-2">Countries</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[200px] h-[200px] rounded-2xl p-[1px] bg-gradient-to-t from-black to-purple-500 flex items-center justify-center">
          <div className="bg-black rounded-2xl w-full h-full flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">450</h3>
            <p className="text-gray-300 mt-2">Clients</p>
          </div>
        </div>

      </div>
    </section>
        </>
    )

}
export default Group