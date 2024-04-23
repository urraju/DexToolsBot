import member1 from "../../../assets/all_Img/etcMetarial/man-3.png";
import member2 from "../../../assets/all_Img/etcMetarial/man-1.png";
import member3 from "../../../assets/all_Img/etcMetarial/man-2.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Button from "../Button/Button";

const TeamMember = () => {
  return (
    <div className="py-14 mt-10">
        <div className="text-white flex flex-col items-center justify-center">
            <Button buttonText={'Team Members'}/>
            <h1 className="text-center py-4 text-4xl font-semibold">About us of dextools</h1>
        </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/* card number 1  */}
        <div className=" border border-gray-900 hover:border transition duration-200 hover:border-[#31F6FC] rounded-xl bg-gradient-to-t from-[#02171800]   via-[#31f5fc14] to-[#31f5fc7a]   p-8 flex flex-col justify-center items-center">
          <img
            className="w-32 rounded-full border border-[#31F6FC] p-1"
            src={member1}
            alt=""
          />
          <div className="text-center text-white py-2">
            <h1 className="text-xl">Javier Palomino</h1>
            <p className="font-light py-3 text-sm">CEO & Co-Founder</p>
          </div>
          <div className="flex items-center gap-3 py-4">
            <FaFacebookF className="w-10 h-10 border border-gray-700 rounded-lg p-2 text-white" />
            <FaLinkedinIn className="w-10 h-10 bg-gradient-to-tl to-[#31F6FC] from-[#0AA2C8]  rounded-lg p-2 text-white" />
            <FaInstagram className="w-10 h-10 border border-gray-700 rounded-lg p-2 text-white" />
          </div>
        </div>

        {/* card number 2  */}
       
        <div className="hover:border duration-200 hover:border-[#31F6FC] rounded-xl bg-gradient-to-t from-[#02171800]   via-[#00252614] to-[#9631fc8a]   p-8 flex flex-col justify-center items-center">
          <img
            className="w-32 rounded-full border border-[#31F6FC] p-1"
            src={member2}
            alt=""
          />
          <div className="text-center text-white py-2">
            <h1 className="text-xl">Frederic Fernandez</h1>
            <p className="font-light py-3 text-sm">Co-Founder, CMO</p>
          </div>
          <div className="flex items-center gap-3 py-4">
            <FaFacebookF className="w-10 h-10 border border-gray-700 rounded-lg p-2 text-white" />
            <FaLinkedinIn className="w-10 h-10 bg-gradient-to-tl to-[#31F6FC] from-[#0AA2C8]  rounded-lg p-2 text-white" />
            <FaInstagram className="w-10 h-10 border border-gray-700 rounded-lg p-2 text-white" />
          </div>
        </div>

          {/* card number 3  */}
          <div className="hover:border duration-200 hover:border-[#31F6FC] rounded-xl bg-gradient-to-t from-[#02171800]   via-[#00252614] to-[#ff995e7a]   p-8 flex flex-col justify-center items-center">
          <img
            className="w-32 rounded-full border border-[#31F6FC] p-1"
            src={member3}
            alt=""
          />
          <div className="text-center text-white py-2">
            <h1 className="text-xl"> Pablo Ojanguren</h1>
            <p className="font-light py-3 text-sm">CTD & Lead Engineer</p>
          </div>
          <div className="flex items-center gap-3 py-4">
            <FaFacebookF className="w-10 h-10 border border-gray-700 rounded-lg p-2 text-white" />
            <FaLinkedinIn className="w-10 h-10 bg-gradient-to-tl to-[#31F6FC] from-[#0AA2C8]  rounded-lg p-2 text-white" />
            <FaInstagram className="w-10 h-10 border border-gray-700 rounded-lg p-2 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamMember;
