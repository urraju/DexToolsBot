import { useLoaderData } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
const CourseAll = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
      {data.map((data) => (
        <div key={data.id} className="border rounded-xl  statsCardBorder">
          <div className="p-4">
            <img src={data.img} alt="" />
            <div className="text-white space-y-3 mt-3">
              <h1 className="text-2xl">{data.title.slice(0, 46)}</h1>
              <p className="text-s font-light text-[#E4E4E4]">
                {data.description.slice(0, 150)}
              </p>
            </div>
            <div className="mt-3 flex items-center gap-5">
              <div className="text-white flex items-center gap-2">
                <MdDateRange className="text-[#0AA2C8] text-xl" />
                <p className=" font-light">{data.time}</p>
              </div>
              <div className="text-white flex items-center gap-2">
                <IoTimeOutline className="text-[#0AA2C8] text-xl" />
                <p className="font-light">{data.minute} min read</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CourseAll;
