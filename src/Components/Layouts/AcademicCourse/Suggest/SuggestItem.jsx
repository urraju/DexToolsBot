import { IoTimeOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
const SuggestItem = ({ data }) => {
  return (
    <div className=" ">
      <div className="flex items-center gap-5 border-b border-gray-700 py-6">
        <img src={data.img} alt="" />
        <div>
          <div className="text-white space-y-3 mt-3">
            <h1 className=" text-lg md:text-xl">{data.title.slice(0, 46)}</h1>
          </div>
          <div className="mt-3 flex items-center gap-5">
            <div className="text-white flex items-center gap-2">
              <MdDateRange className="text-[#0AA2C8] text-xl" />
              <p className=" font-light">{data.time}</p>
            </div>
            <div className="text-white flex items-center gap-2">
              <IoTimeOutline className="text-[#0AA2C8] text-xl" />
              <p className=" text-sm md:text-[18px] font-light">{data.minute} min read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuggestItem;
