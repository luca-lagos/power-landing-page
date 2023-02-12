import { HashLink as Link } from "react-router-hash-link";
import {
  RiInstagramLine as InstagramIcon,
  RiFacebookCircleLine as FacebookIcon,
  RiTwitterLine as TwitterIcon,
  RiGithubLine as GithubIcon,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2e3e5c] px-36 max-[700px]:px-8">
      <div className="flex justify-between items-center py-[24px] pt-[40px] max-[740px]:flex-col max-[740px]:gap-8">
        <h2 className="text-3xl font-bold text-white">
          Power<strong className="text-primary text-4xl">.</strong>
        </h2>
        <div className="flex gap-6">
          <span className="text-2xl bg-primary p-4 rounded-full text-white opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Link to="/">
              <InstagramIcon />
            </Link>
          </span>
          <span className="text-2xl bg-primary p-4 rounded-full text-white opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Link to="/">
              <FacebookIcon />
            </Link>
          </span>
          <span className="text-2xl bg-primary p-4 rounded-full text-white opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Link to="/">
              <TwitterIcon />
            </Link>
          </span>
          <span className="text-2xl bg-primary p-4 rounded-full text-white opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Link to="/">
              <GithubIcon />
            </Link>
          </span>
        </div>
      </div>
      <hr/>
      <div className="flex flex-col gap-8 mt-[30px]">
        <h3 className="text-xl text-white font-bold max-[970px]:text-center max-[970px]:mb-6">Company</h3>
        <div className="flex justify-between items-center text-white mb-16 opacity-60 hover:opacity-100 transition-all duration-300 max-[970px]:flex-col max-[970px]:gap-10 max-[970px]:text-xl">
          <Link to="/">About Us</Link>
          <Link to="/">Press</Link>
          <Link to="/">Investors</Link>
          <Link to="/">Events</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/" className="bg-primary py-3 px-8 opacity-100 rounded-[15px]">Contact Us</Link>
        </div>
      </div>
      <span className="text-[18px] text-white flex justify-center pb-10">
        Developed by<Link to={"https://luca-lagos.vercel.app"} className="px-3 text-primary font-bold hover:underline" target={"_blank"}>Luca Lagos</Link> © 2023
      </span>
    </footer>
  );
};

export default Footer;
