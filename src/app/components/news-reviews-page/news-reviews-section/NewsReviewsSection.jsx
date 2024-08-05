import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { carData } from "../../../mocks/mock";
function NewsReviewsSection() {
  return (
    <div className="">
      <div className="text-3xl">News and Reviews</div>
      {/* slider */}
      <div className="relative text-center bg-blue-100 my-4 h-[300px] rounded-lg cursor-pointer">
        <div className="bg-sad-blue-200 text-white opacity-80 rounded-e-xl absolute top-2 left-0 px-4 py-1 font-thin text-xs">
          Trending
        </div>
        <Image
          src={"/news-banner-image.png"}
          alt={"news-story-image"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }} // optional
        />
      </div>

      <div className="grid gap-4 grid-cols-3">
        {carData.NewsReviewsSection.map((data) => (
          <div className=" relative col-span-1  rounded-md shadow-lg">
            <div className="bg-sad-blue-200 text-white opacity-80 rounded-e-xl absolute top-3 left-0 px-4 py-1 font-thin text-xs">
              Trending
            </div>
            <Image src={data.image} alt="image" width={300} height={300} />
            <div className="p-2">
              <div className="text-base leading-6">{data.title}</div>
              <div className="text-xs leading-9 text-gray-500">
                {data.source} ----- {data.date}
              </div>
              <div className="text-xs font-thin leading-4 text-gray-500">
                {data.description}
              </div>
              <button className="text-xs my-4">
                Know More <ArrowForwardIcon fontSize="small" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        <button className="bg-black text-white rounded-full py-2 px-6 text-sm ">
          View More
        </button>
      </div>
    </div>
  );
}

export default NewsReviewsSection;
