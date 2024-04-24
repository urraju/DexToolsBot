import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/all_Img/etcMetarial/logo.png";
import shadow from "../../assets/all_Img/etcMetarial/shadow.png";
const Footer = () => {
  return (
    <div className="mt-14 px-2 md:px-0">
      <div className="bg-gradient-to-r max-w-screen-md mx-auto h-[2px] to-[#31f5fc00] via-[#31F6FC] from-[#31f5fc00]"></div>
      <div className="max-w-screen-xl mx-auto relative overflow-hidden">
        {/* header part  */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center py-16 border-b border-gray-700 ">
          <h1 className=" text-2xl md:text-3xl font-medium text-white leading-normal">
            Stay Connected with <br /> DEXTools BOT platform
          </h1>
          <div className="flex items-center border rounded-lg border-gray-700 py-2 px-3">
            <input
              className="text-white placeholder:text-white placeholder:font-light outline-none  font-light"
              type="text"
              placeholder="Enter your email"
            />
            <button className="flex bg-gradient-to-tl to-[#31F6FC] from-[#0AA2C8] items-center gap-2 rounded-md px-6 py-2  font-light text-white border-opacity-10 w-full  md:w-32 md:mb-0 text-sm justify-center">
              {" "}
              Subscribe
            </button>
          </div>
        </div>

        {/* foooter center part  */}

        <div className=" grid grid-cols-2 md:flex md:justify-between gap-5 py-16 border-b border-gray-700">
          {/* item 1  */}
          <div className="space-y-3">
            <h1 className="text-white text-xl">Links</h1>
            <div className="text-[#D7D7D7] space-y-2 list-none font-light">
              <li>Plan</li>
              <li>Roadmap</li>
              <li>Token</li>
              <li>About Us</li>
              <li>FAQ'S</li>
            </div>
          </div>

          {/* item 2  */}
          <div className="space-y-3">
            <h1 className="text-white text-xl">Socials</h1>
            <div className="text-[#D7D7D7] space-y-2 list-none font-light">
              <li>Telegram</li>
              <li>Channel</li>
              <li>Trading</li>
              <li>Revenue</li>
              <li>Buy</li>
            </div>
          </div>

          {/* item 3  */}
          <div className="space-y-3">
            <h1 className="text-white text-xl">Resources</h1>
            <div className="text-[#D7D7D7] space-y-2 list-none font-light">
              <li>Academy</li>
              <li>Twitter</li>
              <li>Telegram</li>
              <li>Blog</li>
              <li>Social</li>
            </div>
          </div>

          {/* item 4  */}
          <div className="space-y-3">
            <h1 className="text-white text-xl">Company</h1>
            <div className="text-[#D7D7D7] space-y-2 list-none font-light">
              <li>Docs</li>
              <li>Token</li>
              <li>Migration</li>
              <li>Report</li>
              <li>Explore</li>
            </div>
          </div>

          {/* item 5  */}
          <div className="space-y-3">
            <h1 className="text-white text-xl">Legals</h1>
            <div className="text-[#D7D7D7] space-y-2 list-none font-light">
              <li>Conditions</li>
              <li>Privacy</li>
              <li>Donate</li>
              <li>Donation</li>
              <li>Manage</li>
            </div>
          </div>
        </div>

        {/* footer bottom part  */}
        <div className="py-6 flex justify-center gap-5 md:justify-between flex-wrap  items-center">
          <img src={logo} alt="" />

          <p>Copyrights &copy; 2024.DEXTools BOT</p>

          <div className="flex items-center gap-3 py-4">
            <FaFacebook className="w-8 h-8 border border-gray-700 rounded-full p-2 text-white hover:bg-gradient-to-tl hover:to-[#31F6FC] hover:from-[#0AA2C8]" />
            <FaLinkedinIn className="w-8 h-8 hover:bg-gradient-to-tl hover:to-[#31F6FC] hover:from-[#0AA2C8] rounded-full p-2 text-white" />
            <FaInstagram className="w-8 h-8 border border-gray-700 rounded-full p-2 text-white hover:bg-gradient-to-tl hover:to-[#31F6FC] hover:from-[#0AA2C8]" />
          </div>
        </div>
        <div className="bg-gradient-to-r max-w-screen-md mx-auto h-[2px] to-[#31f5fc00] via-[#31F6FC] from-[#31f5fc00]"></div>
            {/* shadow part  */}
        <div className="absolute  -right-52 bottom-0 top-10 w-[1000px] rounded-full">
          <img className="opacity-50" src={shadow} alt="" />
        </div>
        <div className="absolute -left-72  bottom-0 -top-52 w-[1000px] rounded-full">
          <img className="opacity-30" src={shadow} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
