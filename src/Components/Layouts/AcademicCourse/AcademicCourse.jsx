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
    <div className="max-w-screen-xl mx-auto py-14 grid md:grid-cols-12 gap-7">
      <div className=" col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-7 relative">
        {data.slice(0, 2).map((item) => (
          <Course key={item.id} data={item} />
        ))}
        <div className="absolute -left-64 right-0 bottom-0 top-0  rounded-full ">
          <img className="opacity-50" src={shadow} alt="" />
        </div>
      </div>
      <div className=" col-span-12 md:col-span-4">
        {suggest.map((item) => (
          <SuggestItem key={item.id} data={item} />
        ))}
      </div>

      
    </div>
  );
};
export default AcademicCourse;
