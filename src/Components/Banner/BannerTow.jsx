import bannerMobile from "../../assets/all_Img/etcMetarial/bannerMobile.png";
import bannerBg from "../../assets/all_Img/etcMetarial/bannerBg.png";
const BannerTow = () => {
  return (
    <div className="flex items-center justify-center">
      <div
      className="w-full z-50 py-5 "
        style={{
          backgroundImage: `url(${bannerBg})`, // Corrected style syntax
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "content",
          border : 'jss144'
        }}
      >
        <img className="mx-auto" src={bannerMobile} alt="" />
      </div>
    </div>
  );
};
export default BannerTow;
