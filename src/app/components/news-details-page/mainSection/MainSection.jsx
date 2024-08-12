import Image from "next/image";
import { carData } from "../../../mocks/mock";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import DetailsSection from "../detailsSection/DetailsSection";
function MainSection() {
  return (
    <div className="">
      <div className="capitalize  font-bold text-xl sm:text-4xl">
        All-New Geely Starray Launched in UAE at AED 84,900 !
      </div>
      <div className="flex justify-between items-center my-2 sm:my-4 ">
        <div className=" text-gray-400 text-xs sm:text-base sm:w-2/3">
          {carData.NewsDetailsPage.source} | {carData.NewsDetailsPage.date} | {carData.NewsDetailsPage.time} read
        </div>
        <div className="sm:mr-6">
          <span className="hidden text-base sm:inline-block">Share</span> <ShareOutlinedIcon  className="sm:text-gray-300 sm:text-2xl text-lg" />
        </div>
      </div>
      <DetailsSection
        image1={carData.NewsDetailsPage.image1}
        para={carData.NewsDetailsPage.para1}
      />
      {/* Ad1 */}
      <div className="flex justify-center my-8 rounded-lg">
        <Image src={carData.NewsDetailsPage.adUnihostImage} className="" />
      </div>
      {/* section2 */}
      <DetailsSection
        title={"A stellar design inspired by celestial beauty"}
        image1={carData.NewsDetailsPage.image2}
        para={carData.NewsDetailsPage.para2}
        image2={carData.NewsDetailsPage.adSidebar1}
      />
      {/* Ad2 */}
      <div className="flex justify-center my-8 rounded-lg">
        <Image src={carData.NewsDetailsPage.adSamsungImage} className="" />
      </div>
      {/* section3 */}
      <DetailsSection
        title={"Power and performance Redefined"}
        image1={carData.NewsDetailsPage.image3}
        para={carData.NewsDetailsPage.para3}
        image2={carData.NewsDetailsPage.adSidebar2}
      />
      {/* Ad3 */}
      <div className="flex justify-center my-8 rounded-lg">
        <Image src={carData.NewsDetailsPage.adSummerImage} className="" />
      </div>
      {/* section4 */}
      <DetailsSection
        title={"Cutting-Edge Technology for Unparalleled Safety and Comfort"}
        image1={carData.NewsDetailsPage.image4}
        para={carData.NewsDetailsPage.para4}
      />
      {/* section5 */}
      <DetailsSection
        title={"Luxurious Interiors Tailored for Comfort"}
        image1={carData.NewsDetailsPage.image5}
        para={carData.NewsDetailsPage.para5}
      />
      {/* <NewsFeeds /> */}
    </div>
  );
}

export default MainSection;
