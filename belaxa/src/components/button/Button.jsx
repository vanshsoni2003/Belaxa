// Button.jsx
const base = import.meta.env.BASE_URL;

const Button = () => {
  return (
    <button className="px-5 py-2 md:px-6 md:py-3 rounded-2xl hover:bg-[#FC31B9] transition font-semibold text-white shadow-lg flex items-center gap-3 mt-4">
      Explore More
      <img
        src={`${base}images/About/Group 20.png`}
        alt="Arrow"
        className="h-5 w-5 md:h-6 md:w-6"
      />
    </button>
  );
};

export default Button;
