const Footer =() =>{

    return(
        <>
        <div className="xl:h-[300px] bg-black">
       <div className="container flex justify-center bg-black ">
  {/* Outer wrapper for gradient border */}
  <div className="p-[2px] rounded-md bg-gradient-to-r from-[#FC31B9] to-[#09F7CC] xl:w-[1400px]">
    <footer className="footer bg-black text-white p-10 rounded-md sm:footer-horizontal place-content-between">
      <aside>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight 
                       bg-gradient-to-r from-[#09F7CC8C] to-[#FC31B9] 
                       bg-clip-text text-transparent">
          Belaxa
        </h1>
        <div className="flex space-x-4 mt-4 text-3xl">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
        <p className="mt-4">
        Lorem ipsum dolor sit amet con Lorem ipsum dolor sit <br /> amet consectetur adipisicing elitit sequi tempore incidunt modi verita
        </p>
      </aside>

      <nav className="text-2xl">
        <h6 className="footer-title">Services</h6>
     
        <a className="link link-hover font-[Inter]" >web development</a>
       
        <a className="link link-hover font-[Inter]">Graphic Designs</a>
      </nav>

      <nav className="text-2xl">
        <h6 className="footer-title">Portfolio</h6>
       
        <a className="link link-hover font-[Inter]">web development</a>
      
        <a className="link link-hover font-[Inter]">Graphic Designs</a>
      </nav>

      <nav className="text-2xl">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover font-[Inter]">about</a>
        <a className="link link-hover  font-[Inter]">portfolio</a>
        <a className="link link-hover font-[Inter]">Team</a>
        <a className="link link-hover font-[Inter]">Blogs</a>
        <a className="link link-hover font-[Inter]">Service</a>

      </nav>
    </footer>
  </div>
</div>
</div>
        </>
    )

}
export default Footer 