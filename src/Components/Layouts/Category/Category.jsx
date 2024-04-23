import "./category.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
const Category = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div>
      <>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 1</Tab>
          <Tab>Title 1</Tab>
          <Tab>Title 1</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};
export default Category;
