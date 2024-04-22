import React from "react";
import background from "../../assets/all_Img/etcMetarial/bol-bg.png";
import arrow_left from "../../assets/all_Img/etcMetarial/arrow-left.png";
import arrow_right from "../../assets/all_Img/etcMetarial/arrow-right.png";
import arrowBg from "../../assets/all_Img/etcMetarial/arrowBg.png";
import shadow from "../../assets/all_Img/etcMetarial/shadow.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import BannerTow from "./BannerTow";
import Button from "../Layouts/Button/Button";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div
        className="my-10  z-50"
        style={{
          backgroundImage: `url(${background})`, // Corrected style syntax
          backgroundRepeat: "no-repeat",

          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center justify-between ">
          {/* arrow left side  */}
          <div
            style={{
              backgroundImage: `url(${arrowBg})`, // Corrected style syntax
            }}
          >
            <img src={arrow_left} alt="" />
          </div>
          {/* center content  */}
          <div className="text-center relative z-50">
            <Button buttonText={"DexToolsBot"} />
            <h1 className="text-5xl font-semibold text-white leading-snug">
              The Fastest Trading <br />{" "}
              <span className="text-[#31F6FC]">DEXTools BOT</span>
            </h1>
            <p className="font-light leading-normal text-sm py-2">
              It is a long established fact that a reader will be distracted
              bythe readable <br /> content of a page when looking at its layout
              The point of using Lorem Ipsum is that it <br /> has a
              more-or-less normal distribution
            </p>
            <div className="flex items-center gap-5 justify-center py-8">
              <button className="flex items-center gap-2 rounded-full px-6 py-2 border font-light text-white border-gray-500">
                Start Trading <HiOutlineArrowNarrowRight />
              </button>

              <button className="flex bg-gradient-to-tl to-[#31F6FC] from-[#0AA2C8] items-center gap-2 rounded-full px-6 py-2  font-light text-white border-opacity-10">
                {" "}
                Explore More <HiOutlineArrowNarrowRight />
              </button>
            </div>

            <div className="absolute left-0 right-0 bottom-0 top-16 rounded-full ">
              <img src={shadow} alt="" />
            </div>
          </div>

          {/* arrow right side  */}
          <div
            className="mt-20"
            style={{
              backgroundImage: `url(${arrowBg})`, // Corrected style syntax
            }}
          >
            <img src={arrow_right} alt="" />
          </div>
        </div>

        <div>
          <BannerTow />
        </div>
      </div>
    </div>
  );
};

export default Banner;
