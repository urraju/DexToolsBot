import Button from "../Button/Button";
import "./faq.css";
import shadow from "../../../assets/all_Img/etcMetarial/shadow.png";
const FaqSection = () => {
  return (
    <div className="relative mx-auto rounded-xl shadow max-w-screen-xl bg-cover bg-no-repeat my-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-full    "></div>
        <div className=" font-manrope text-center py-8">
          <Button buttonText={"FAQ"} />
          <p className="text-4xl font-medium text-white py-4">
            Frequently asked questions
          </p>
        </div>

        {/* main que and ans  */}
        <div className="flex gap-8 flex-col py-2 md:flex-row justify-center pb-16 relative overflow-hidden">
          <div className="w-full md:w-[967px] flex flex-col gap-5">
            {/* number 1  */}
            <div className="collapse py-3 border-b rounded-none bg-transparent border-gray-700 collapse-arrow ">
              <input
                className="custom-radio ml-20"
                type="radio"
                name="my-accordion-2"
                defaultChecked={true}
              />

              <div className="collapse-title text-2xl  text-[#eee]">
                Which beaches are available on the Base Tide Pro?
              </div>
              <div className="collapse-content">
                <p className="text-gray-100 font-light text-sm tracking-wide border-l-2 border-[#31F6FC] px-3 leading-normal">
                  Yes! Coverr video is a completely free stock footage website
                  that allows you to download and use high-quality stock videos
                  anywhere. And there is no catch! No sign-up needed.
                </p>
              </div>
            </div>

            {/* 2number  */}
            <div className="collapse py-3 border-b rounded-none border-gray-700 collapse-arrow bg-transparent ">
              <input
                className="custom-radio ml-20"
                type="radio"
                name="my-accordion-2"
                defaultChecked={false}
              />
              <div className="collapse-title text-2xl  text-[#eee]">
                How do I reset my digital tide watch?
              </div>
              <div className="collapse-content">
                <p className="text-gray-100 font-light text-sm tracking-wide border-l-2 border-[#31F6FC] px-3 leading-normal">
                  Yes! Coverr video is a completely free stock footage website
                  that allows you to download and use high-quality stock videos
                  anywhere. And there is no catch! No sign-up needed.
                </p>
              </div>
            </div>

            {/* 3 number  */}
            <div className="collapse py-3 border-b rounded-none border-gray-700 collapse-arrow bg-transparent">
              <input
                className="custom-radio ml-20"
                type="radio"
                name="my-accordion-2"
                defaultChecked={true}
              />
              <div className="collapse-title text-2xl  text-[#eee]">
                What’s the defference between this platform and
              </div>
              <div className="collapse-content">
                <p className="text-gray-100 font-light leading-normal text-sm tracking-wide border-l-2 border-[#31F6FC] px-3 ">
                  Yes! Coverr video is a completely free stock footage website
                  that allows you to download and use high-quality stock videos
                  anywhere. And there is no catch! No sign-up needed.
                </p>
              </div>
            </div>

            {/* 4 number  */}
            <div className="collapse py-3 border-b rounded-none border-gray-700 collapse-arrow bg-transparent">
              <input
                className="custom-radio ml-20"
                type="radio"
                name="my-accordion-2"
                defaultChecked={true}
              />
              <div className="collapse-title text-2xl  text-[#eee]">
                Do I have to sign a long-term contract?
              </div>
              <div className="collapse-content">
                <p className="text-gray-100 font-light leading-normal text-sm tracking-wide border-l-2 border-[#31F6FC] px-3 ">
                  Yes! Coverr video is a completely free stock footage website
                  that allows you to download and use high-quality stock videos
                  anywhere. And there is no catch! No sign-up needed.
                </p>
              </div>
            </div>

            {/* 5 number  */}
            <div className="collapse py-3 border-b rounded-none border-gray-700 collapse-arrow bg-transparent">
              <input
                className="custom-radio ml-20"
                type="radio"
                name="my-accordion-2"
                defaultChecked={true}
              />
              <div className="collapse-title text-2xl  text-[#eee]">
                What if I decide a membership is not for me after I subscribe?
              </div>
              <div className="collapse-content">
                <p className="text-gray-100 font-light leading-normal text-sm tracking-wide border-l-2 border-[#31F6FC] px-3 ">
                  Yes! Coverr video is a completely free stock footage website
                  that allows you to download and use high-quality stock videos
                  anywhere. And there is no catch! No sign-up needed.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute  -right-52 bottom-0 -top-20 w-[1000px] rounded-full">
            <img className="opacity-30" src={shadow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
