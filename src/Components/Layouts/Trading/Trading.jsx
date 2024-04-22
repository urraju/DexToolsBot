import Button from "../Button/Button";
import background from "../../../assets/all_Img/etcMetarial/bol-bg.png";
import maskGroup from "../../../assets/all_Img/etcMetarial/maskGroup.png";
import maskLeft from "../../../assets/all_Img/etcMetarial/maskLeft.png";
import maskRight from "../../../assets/all_Img/etcMetarial/maskRight.png";
import icon1 from "../../../assets/all_Img/color_icon/colorIcon-1.png";
import icon2 from "../../../assets/all_Img/color_icon/colorIcon-2.png";
import icon3 from "../../../assets/all_Img/color_icon/colorIcon-3.png";
import icon4 from "../../../assets/all_Img/color_icon/colorIcon-4.png";
 
import { IoIosArrowForward } from "react-icons/io";

const Trading = () => {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto" style={{
          backgroundImage: `url(${background})`, // Corrected style syntax
          backgroundRepeat: "no-repeat",
 
          backgroundSize: "cover",
        }}>
        <div className="flex flex-col justify-center items-center">
          {" "}
          <Button buttonText={"Trading"} />
          <p className="text-4xl font-semibold text-white py-5 text-center tracking-wider">
            Trading in the foreign <br /> exchange market
          </p>
          {/* main content section  */}
          <div className="flex justify-between w-full mt-20">
            {/* left site content  */}
            <div className="flex flex-col gap-16">
              {/* card one  */}
              <div className="flex justify-between items-center py-4 px-4 md:w-[430px] border rounded-xl border-gray-700 hover:bg-gradient-to-tl duration-200 hover:to-[#31F6FC] hover:from-[#0AA2C8]">
                <div className="flex gap-4 items-center">
                  <img src={icon1} alt="" />
                  <p className="text-white text-xl">Create your Chatbot</p>
                </div>
                <IoIosArrowForward className="text-2xl text-white" />
              </div>
              {/* card two  */}
              <div className="flex justify-between items-center py-4 px-4 md:w-[430px] border rounded-xl border-gray-700 hover:bg-gradient-to-tl duration-200 hover:to-[#31F6FC] hover:from-[#0AA2C8]">
                <div className="flex gap-4 items-center">
                  <img src={icon2} alt="" />
                  <p className="text-white text-xl">Build your workflows</p>
                </div>
                <IoIosArrowForward className="text-2xl text-white" />
              </div>
              {/* card three  */}
              <div className="flex justify-between items-center py-4 px-4 md:w-[430px] border rounded-xl border-gray-700 hover:bg-gradient-to-tl duration-200 hover:to-[#31F6FC] hover:from-[#0AA2C8]">
                <div className="flex gap-4 items-center">
                  <img src={icon3} alt="" />
                  <p className="text-white text-xl">Integrate your apps</p>
                </div>
                <IoIosArrowForward className="text-2xl text-white" />
              </div>
              {/* card four  */}
              <div className="flex justify-between items-center py-4 px-4 md:w-[430px] border rounded-xl border-gray-700 hover:bg-gradient-to-tl duration-200 hover:to-[#31F6FC] hover:from-[#0AA2C8]">
                <div className="flex gap-4 items-center">
                  <img src={icon4} alt="" />
                  <p className="text-white text-xl">Complete your process</p>
                </div>
                <IoIosArrowForward className="text-2xl text-white" />
              </div>
            </div>
            {/* right side content  */}

            <div className="relative z-30">
              <img className="z-20 -mt-8" src={maskGroup} alt="" />
              <div>
                <img className="absolute bottom-8 -left-24 z-20" src={maskLeft} alt="" />
                <img className="absolute top-20 -right-24" src={maskRight} alt="" />
                <div className="bg-gradient-to-tl to-[#11323416] from-[#113234] h-96 bottom-0 rounded-xl -z-10 w-full absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trading;
