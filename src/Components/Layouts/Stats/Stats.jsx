import user from "../../../assets/all_Img/white-icon/user.png";
import icon2 from "../../../assets/all_Img/white-icon/white-icon-2.png";
import icon3 from "../../../assets/all_Img/white-icon/white-icon-3.png";
import icon4 from "../../../assets/all_Img/white-icon/white-icon-1.png";
import shadow from "../../../assets/all_Img/etcMetarial/shadow.png";

const Stats = () => {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto statsCardBorder  overflow-hidden relative ">
        <div className=" p-20 h-[364px]">
          <h1 className="text-center text-white text-2xl mb-5">
            Our Current Stats
          </h1>

          <div className=" flex justify-between items-center flex-wrap gap-10 md:gap-0 ">
            {/* card one  */}
            <div className="text-center ">
              <img
                className="w-16 mx-auto h-16 p-3 mb-2 border border-gray-500 bg-cyan-700 bg-opacity-30 rounded-full"
                src={user}
                alt=""
              />
              <p className="text-white font-medium text-2xl">19,900,000</p>
              <p className="text-white font-light text-sm">Visitor Per Month</p>
            </div>

            <div className="statsBorder h-24 "></div>

            {/* card 2  */}
            <div className="text-center ">
              <img
                className="w-16 mx-auto h-16 p-3 mb-2 border border-gray-500 bg-cyan-700 bg-opacity-30 rounded-full"
                src={icon2}
                alt=""
              />
              <p className="text-white font-medium text-2xl">77</p>
              <p className="text-white font-light text-sm">Blockchains</p>
            </div>
            <div className="statsBorder h-24 hidden md:flex"></div>

            {/* card 3 */}

            <div className="text-center ">
              <img
                className="w-16 mx-auto h-16 p-3 mb-2 border border-gray-500 bg-cyan-700 bg-opacity-30 rounded-full"
                src={icon3}
                alt=""
              />
              <p className="text-white font-medium text-2xl">2,422,448</p>
              <p className="text-white font-light text-sm">Pools</p>
            </div>
            <div className="statsBorder h-24"></div>

            {/* card 4  */}
            <div className="text-center ">
              <img
                className="w-16 mx-auto  h-16 p-3 mb-2 border border-gray-500 bg-cyan-700 bg-opacity-30 rounded-full"
                src={icon4}
                alt=""
              />
              <p className="text-white font-medium text-2xl">2,013,021</p>
              <p className="text-white font-light text-sm">Tokens</p>
            </div>
          </div>

          <div className="absolute w-[450px] -left-52 bottom-0 -top-10 rounded-full ">
            <img src={shadow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
