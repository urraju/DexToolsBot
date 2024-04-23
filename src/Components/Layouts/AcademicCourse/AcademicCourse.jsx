import { useEffect, useState } from "react";
import Course from "./CourseItem/Course";
import SuggestItem from "./Suggest/SuggestItem";
import shadow from "../../../assets/all_Img/etcMetarial/shadow.png";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const AcademicCourse = () => {
  const [data, setData] = useState([]);
  const [suggest, setSuggest] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch("/suggest.json")
      .then((res) => res.json())
      .then((data) => setSuggest(data));
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-14 grid md:grid-cols-12 gap-7 overflow-hidden">
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-7 relative">
          {data.slice(0, 2).map((item) => (
            <Course key={item.id} data={item} />
          ))}
          <div className="absolute -left-44 right-0 bottom-0 top-5 w-[600px] rounded-full">
            <img className="opacity" src={shadow} alt="" />
          </div>

          <div className="absolute -left-16 right-0 -bottom-52 w-[700px] rounded-full">
            <img className="opacity-60" src={shadow} alt="" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          {suggest.map((item) => (
            <SuggestItem key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center ">
        {" "}
        {/* Added mt-8 for margin top */}
        <Link to={`/courseall/${data}`}>
          {" "}
          <button className="flex bg-gradient-to-tl to-[#31F6FC] from-[#0AA2C8] items-center gap-2 rounded-full px-6 py-2 font-light text-white border-opacity-10">
            View All Courses <HiOutlineArrowNarrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AcademicCourse;
