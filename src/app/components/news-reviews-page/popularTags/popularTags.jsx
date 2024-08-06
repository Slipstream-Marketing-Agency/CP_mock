import { carData } from "../../../mocks/mock";
export default function popularTags() {
  return (
    <div className="">
      <div className="text-xl">Popular Tags</div>
      <hr className="my-4" />
      <div className="flex gap-2 flex-wrap mt-6 ">
        {carData.popularTags.map((tags) => (
          <div className=" bg-blue-50 p-2 rounded-lg text-xs">{tags}</div>
        ))}
      </div>
    </div>
  );
}
