import mask from "../../../assets/all_Img/etcMetarial/mask.png";
import Button from "../Button/Button";
const Token = () => {
  return (
    <div className="py-14">
      <div className="bg-gradient-to-r max-w-screen-md mx-auto h-[2px] to-[#31f5fc00] via-[#31F6FC] from-[#31f5fc00]"></div>
      {/* heading title  */}
      <div className="flex justify-center items-center flex-col mt-10">
        <Button buttonText={"Token"} />
        <p className="text-4xl text-white text-center py-5 font-semibold">
          Discover the DEX Token
        </p>
      </div>

      {/* main content  */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center gap-20 mt-10">
        <div className="relative z-30">
          <img className="z-20" src={mask} alt="" />
          <div className="bg-gradient-to-tl to-[#11323416] from-[#113234] bottom-0 rounded-xl h-full -z-10 w-full absolute"></div>
        </div>
        <div className="space-y-4 text-white">
          <h1 className="text-3xl font-medium">
            The Fasted Trading <br /> DEXTools BOT
          </h1>
          <p className="font-light">
            DEXT is the DEXTools utility token, with which you can access all{" "}
            <br />
            the features of the app and participate in our Ecosystem. It's{" "}
            <br />
            deflationary and available at the following exchanges:
          </p>
          <p className="font-light">
            DEXT is the DEXTools utility token, with which you can access all{" "}
            <br />
            the features of the app and participate.
          </p>
          <div className="md:flex items-center gap-5   py-8">
            <button className="flex justify-center bg-gradient-to-tl w-64 mb-4 md:w-52 md:mb-0 to-[#31F6FC] from-[#0AA2C8] items-center gap-2 rounded-full px-6 py-3  font-light text-white border-opacity-10">
              {" "}
              Buy At Uniswap
            </button>
            <button className="flex items-center justify-center  gap-2  mb-4 w-64 md:mb-0 rounded-full px-6 py-3 border font-light text-white border-gray-500">
              Buy At Pancakeswap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Token;
