import { Link } from "react-router-dom";
import Pending from "../images/pending.svg";

function Investment() {
  return (
    <div className="px-5 lg:px-[15%] py-[5vh] lg:py-[10vh] text-center">
      <h1 className="text-2xl font-bold text-center">KNOW ABOUT INVESTMENT</h1>
      <div className="flex justify-center w-[100%] my-3">
        <span className="bg-secondary h-2 w-[150px]"></span>
      </div>
      <div className="flex gap-5 mt-24 items-center flex-col lg:flex-row text-start">
        <div className="w-[100%] lg:w-[33.3%]">
          <div className="py-5">
            <h2 className="font-bold text-xl pb-3">Proven Track Record</h2>
            <p>
              Our investment company boasts a solid track record of delivering
              impressive returns and consistent performance, providing evidence
              of our ability to generate value for our investors.
            </p>
          </div>
          <div className="py-5">
            <h2 className="font-bold text-xl pb-3">Expert Team of Advisors</h2>
            <p>
              With a team of seasoned financial experts, our investment company
              offers valuable insights, in-depth market analysis, and
              personalized advice, ensuring well-informed investment decisions.
            </p>
          </div>
          <div className="py-5">
            <h2 className="font-bold text-xl pb-3">
              Diversified Investment Options
            </h2>
            <p>
              We provide access to a diverse range of investment opportunities,
              spanning various asset classes and industries, enabling you to
              build a well-rounded and balanced portfolio.
            </p>
          </div>
        </div>
        <div className="w-[50%] lg:w-[33.3%]">
          <img src={Pending} alt="What" />
        </div>
        <div className="text-end w-[100%] lg:w-[33.3%]">
          <div className="py-5">
            <h2 className="font-bold text-xl pb-3">Risk Management</h2>
            <p>
              Our focus on comprehensive risk management strategies safeguards
              your investments and minimizes exposure to market volatility,
              ensuring a more secure and stable investment experience.
            </p>
          </div>
          <div className="py-5">
            <h2 className="font-bold text-xl pb-3">
              Transparent and Trustworthy
            </h2>
            <p>
              Transparency is at the core of our operations, and we maintain
              open communication with our investors, keeping them informed about
              their investments&apos; performance and progress.
            </p>
          </div>
          <div className="py-5">
            <h2 className="font-bold text-xl pb-3">Client-Centric Approach</h2>
            <p>
              Our investment company prioritizes the needs and goals of our
              clients, offering tailored investment solutions and personalized
              services that align with individual financial aspirations.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-[100px] flex-col lg:flex-row items-center gap-10 text-start">
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-5">
          <h2 className="text-xl w-[100%] lg:w-[90%]">
            Our innovation and track record set us apart from others
          </h2>
          <p className="w-[100%] lg:w-[90%]">Investment per month in 5 years</p>
          <div className="w-[100%] lg:w-[90%] mt-5">
            <div className="bg-slate-300 relative h-[10px] w-full rounded-2xl">
              <div className="bg-primary absolute top-0 left-0 h-full w-[55%] rounded-2xl">
                <span className="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                  <span className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                  $6,500
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] shadow-[2px_2px_15px_-1px_rgba(0,0,0,0.1)] flex flex-wrap">
          <div className="w-[100%] lg:w-[50%] p-5">
            <h2>Wealth Building</h2>
            <p className="text-secondary">$12,000</p>
          </div>
          <div className="w-[100%] lg:w-[50%] p-5">
            <h2>Retirement Planning</h2>
            <p className="text-secondary">$9,200</p>
          </div>
          <div className="w-[100%] lg:w-[50%] p-5">
            <h2>Funding Education</h2>
            <p className="text-secondary">$13,500</p>
          </div>
          <div className="w-[100%] lg:w-[50%] p-5 bg-secondary">
            <h2 className="text-white">Business Growth</h2>
            <p className="text-white">$20,600</p>
          </div>
        </div>
      </div>
      <Link to="/home">
        <button className="mt-8 bg-secondary hover:bg-[#00daab] py-3 px-5 text-white text-xl rounded-full">
          See Investment Opportunities
        </button>
      </Link>
    </div>
  );
}

export default Investment;
