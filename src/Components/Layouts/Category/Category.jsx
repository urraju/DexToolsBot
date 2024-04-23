import "./category.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Button from "../Button/Button";
 

const Category = () => {
  

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-gradient-to-r max-w-screen-md mx-auto h-[2px] to-[#31f5fc00] via-[#31F6FC] from-[#31f5fc00]"></div>
      <h1 className="text-center text-white text-2xl font-semibold py-4 mt-10">
        Academy Categories
      </h1>
      <div className="mt-10">
        <Tabs>
          <TabList className="flex justify-center flex-wrap gap-5">
            <Tab>AML</Tab>
            <Tab>Arbitrage</Tab>
            <Tab>ASIC</Tab>
            <Tab>ATH</Tab>
            <Tab>ATL</Tab>
            <Tab>AXIE INFINITY</Tab>
          </TabList>
        </Tabs>
        <div className="text-white flex flex-col items-center justify-center mt-10">
          <Button buttonText={"Academy"} />
          <h1 className="text-center py-4 text-4xl font-semibold">
            Our Academy Area
          </h1>
        </div>
      </div>
       
    </div>
  );
};
export default Category;
