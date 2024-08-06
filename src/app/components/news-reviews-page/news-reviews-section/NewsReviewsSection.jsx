import Image from "next/image";
import NewsFeeds from "../newsFeeds/NewsFeeds";
function NewsReviewsSection() {
  return (
    <div className="">
      <div className=" text-2xl sm:text-3xl text-lightgray sm:mb-8 sm:leading-5 ">
        News and reviews
      </div>
      {/* slider */}
      <div className="relative text-center bg-blue-100 my-6  rounded-lg cursor-pointer">
        <div className="bg-sad-blue-100 text-white opacity-80 rounded-e-2xl absolute top-1 sm:top-3 4xl:top-5 4xl:px-10 4xl:py-2 4xl:text-lg left-0 px-1 sm:px-6 py-1 font-thin text-xs sm:text-base">
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

      <NewsFeeds />
      <div className="flex justify-center items-center my-10">
        <button className="bg-black text-white rounded-full py-3 px-8 text-sm sm:text-base cursor-pointer">
          View More
        </button>
      </div>
    </div>
  );
}

export default NewsReviewsSection;
