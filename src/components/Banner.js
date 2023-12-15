import { Link } from "react-router-dom";
import Invest from "../images/invest.svg";

function Banner() {
  return (
    <div className="bg-primary flex items-center justify-between flex-col lg:flex-row px-5 lg:px-[15%] pt-[5vh] lg:pt-[15vh] pb-[15vh] lg:pb-[25vh] shapedividers_1">
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
        <h1 className="text-3xl lg:text-7xl text-white font-black">
          INVEST, GROW AND MAKE MONEY
        </h1>

        <div className="flex  gap-5 sm:gap-10 flex-col sm:flex-row">
          <Link to="/home">
            <button className="bg-secondary hover:bg-[#00daab] py-3 px-5 text-white text-xl rounded-full">
              See Investment Opportunities
            </button>
          </Link>
        </div>
      </div>
      <div
        className="w-[100%] mt-10 lg:w-[40%] p-5 bg-accent"
        style={{ borderRadius: "150% 80% 150% 60%" }}
      >
        <img src={Invest} alt="Invest" className="w-[80%] lg:w-[100%]" />
      </div>
    </div>
  );
}

export default Banner;
