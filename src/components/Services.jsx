import { MdDesignServices as DesignIcon } from "react-icons/md";
import {
  FaMobile as MobileIcon,
  FaDraftingCompass as CompassIcon, FaEnvelope as EnvelopeIcon
} from "react-icons/fa";
import { IoDesktop as DesktopIcon } from "react-icons/io5";

const Services = () => {
  return (
    <section id="services" className="px-36 mt-24 grid grid-cols-1 xl:grid-cols-2 gap-4 mb-[50px] max-[760px]:px-20 max-[600px]:px-[20px]">
      <div className="flex flex-col gap-4 max-[1278px]:items-center">
        <h2 className="text-[40px] font-bold">How We Can Help You</h2>
        <p className="text-lg text-gray-500 mb-6 max-[1278px]:text-center">
          Follow our newsteller. We will regulary update our latest project and
          availability.
        </p>
        <div className="w-[90%] flex items-center gap-0 px-4 py-2 rounded-[12px] bg-secondary max-[1278px]:w-[75%] max-[760px]:w-[100%]">
            <span className="w-[5%] text-gray-500 text-[20px] mr-2">
                <EnvelopeIcon/>
            </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email adress"
            className="w-[65%] mr-4 bg-secondary outline-none text-gray-500"
          />
          <button className="w-[30%] bg-primary py-2 text-white text-lg font-bold rounded-[12px] shadow-md shadow-gray-500/50 max-[500px]:text-[15px]">Subscribe</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-[1278px]:mt-[40px]">
        <div className="flex flex-col gap-3 max-[1278px]:items-center max-[1278px]:text-center">
          <span className="bg-secondary w-[65px] h-[65px] flex justify-center items-center text-4xl rounded-[12px] text-primary">
            <DesignIcon />
          </span>
          <h3 className="text-xl font-bold -mb-[5px]">UI/UX Design</h3>
          <p className="text-[15px] text-gray-500">Sometimes features require a short description</p>
        </div>
        <div className="flex flex-col gap-3 max-[1278px]:items-center max-[1278px]:text-center">
          <span className="bg-secondary w-[65px] h-[65px] flex justify-center items-center text-4xl rounded-[12px] text-primary">
            <CompassIcon />
          </span>
          <h3 className="text-xl font-bold -mb-[5px]">UI/UX Design</h3>
          <p className="text-[15px] text-gray-500">Sometimes features require a short description</p>
        </div>
        <div className="flex flex-col gap-3 max-[1278px]:items-center max-[1278px]:text-center">
          <span className="bg-secondary w-[65px] h-[65px] flex justify-center items-center text-4xl rounded-[12px] text-primary">
            <MobileIcon />
          </span>
          <h3 className="text-xl font-bold -mb-[5px]">UI/UX Design</h3>
          <p className="text-[15px] text-gray-500">Sometimes features require a short description</p>
        </div>
        <div className="flex flex-col gap-3 max-[1278px]:items-center max-[1278px]:text-center">
          <span className="bg-secondary w-[65px] h-[65px] flex justify-center items-center text-4xl rounded-[12px] text-primary">
            <DesktopIcon />
          </span>
          <h3 className="text-xl font-bold -mb-[5px]">UI/UX Design</h3>
          <p className="text-[15px] text-gray-500">Sometimes features require a short description</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
