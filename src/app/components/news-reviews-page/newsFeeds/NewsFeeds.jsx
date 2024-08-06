import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { carData } from "../../../mocks/mock";
function NewsFeeds() {
  return (
    <div className="grid gap-4 grid-cols-6">
      {carData.NewsReviewsSection.map((data, index) => (
        <div
          key={index}
          className=" relative col-span-3 sm:col-span-2  rounded-md shadow-lg"
        >
          <div className="bg-button-bg text-white  rounded-e-xl absolute top-2 sm:top-3 left-0 px-1 sm:px-4 py-1 font-thin text-xs sm:text-sm">
            Trending
          </div>
          <Image
            src={data.image}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
            // style={{ width: "100%", height: "60%" }}
          />
          <div className="p-2">
            <div className="sm:text-base 4xl:text-2xl text-sm leading-6 truncate md:whitespace-normal">
              {data.title}
            </div>
            <div className="text-xs  leading-9 text-gray-500">
              <span className="hidden sm:inline ">{data.source} &mdash;</span>{" "}
              {data.date}
            </div>
            <div className="text-xs 4xl:text-sm font-thin leading-4 text-gray-500 hidden sm:block">
              {data.description}
            </div>
            <button className=" text-xs 4xl:text-sm my-4 hidden sm:flex items-center">
              Know More 
              <Image src={'/arrow-right-icon.svg'} width={13} height={20} alt="arrow-icon" className="mx-2"/>
              {/* <ArrowForwardIcon fontSize="small" /> */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsFeeds;
