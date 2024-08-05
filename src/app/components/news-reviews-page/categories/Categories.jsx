import { carData } from "../../../mocks/mock";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Categories() {
  return (
    <>
      <div className="text-2xl">Categories</div>

      {/* butoon */}
      <div className="flex gap-2 text-xs">
        <button className="bg-blue-100 px-6 py-2 rounded-2xl">All</button>
        <button className="bg-blue-100 px-6 py-2 rounded-2xl">Car News</button>
        <button className="bg-blue-100 px-6 py-2 rounded-2xl">Car Reviews</button>
        <button className="bg-blue-100 px-6 py-2 rounded-2xl">Top Pick's</button>
        <button className="bg-blue-100 px-6 py-2 rounded-2xl">Offers</button>
        <button className="bg-blue-100 px-6 py-2 rounded-2xl">New</button>

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
    </>
  );
}

export default Categories;
