import { Link } from "react-router-dom";
import Logo from "../images/growth.png";

function Footer2() {
  return (
    <div>
      <div className="bg-primary px-5 lg:px-[15%] pt-[2.5vh] lg:pt-[5vh] pb-[5vh] lg:pb-[10vh] flex items-center justify-center flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] py-5  text-center lg:text-start">
          <h1 className="text-2xl text-white">
            Invest Now and Make Partnership
          </h1>
        </div>
        <div className="w-[100%] lg:w-[50%] flex justify-center lg:justify-start gap-5 sm:gap-10 flex-col sm:flex-row  p-5">
          <Link to="/home">
            <button className="bg-secondary hover:bg-[#00daab] py-3 px-5 text-white text-xl rounded-full">
              See Investment Opportunities
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-accent justify-center px-10 lg:px-[15%] text-center py-[5vh] lg:py-[10vh] flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 items-center">
        <div className="w-[100%] lg:w-[50%] text-center ">
          <p className="text-white">Copyright © 2023. All rights reserved.</p>
        </div>
        <div className="flex lg:hidden justify-center w-[100%]">
          <span className="bg-secondary h-1 w-[20%]"></span>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
