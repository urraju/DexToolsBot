import img1 from "../../../assets/all_Img/logoImg/logo-1.png";
import img2 from "../../../assets/all_Img/logoImg/logo-2.png";
import img3 from "../../../assets/all_Img/logoImg/logo-3.png";
import img4 from "../../../assets/all_Img/logoImg/logo-4.png";
import img5 from "../../../assets/all_Img/logoImg/logo-5.png";
import img6 from "../../../assets/all_Img/logoImg/logo-6.png";
const Patners = () => {
  return (
    <div className="py-14">
      <h1 className="text-2xl text-white text-center mb-10">Our Partners</h1>
      <div className="max-w-screen-xl mx-auto grid items-center gap-5 grid-cols-2 lg:grid-cols-6 md:grid-cols-3">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
    </div>
  );
};
export default Patners;
