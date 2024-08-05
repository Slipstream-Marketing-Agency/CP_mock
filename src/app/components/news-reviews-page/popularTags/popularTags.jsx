import { carData } from "../../../mocks/mock";
export default function popularTags() {
  return (
    <div className="">
      <div className="text-2xl">Popular Tags</div>
      <hr className="my-4" />
      <div className="grid gap-1 grid-cols-4">
        {carData.popularTags.map((tags) => (
          <div className="col-auto bg-blue-100 p-2 rounded-lg text-xs font-semibold ">
            {tags}
          </div>
        ))}
      </div>
      {/* <div className="grid gap-1 grid-flow-col auto-cols-max">
        {carData.popularTags.map((tags) => (
          <div className=" bg-blue-100 p-2 rounded-lg text-xs font-semibold w-auto ">
            {tags}
          </div>
        ))}
      </div> */}
    </div>
  );
}
