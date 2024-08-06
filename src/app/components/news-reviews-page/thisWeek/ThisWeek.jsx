import { carData } from "../../../mocks/mock";
import Image from "next/image";
function ThisWeek() {
  return (
    <div>
      <div className="text-2xl">From This week</div>
      <hr className="my-4" />
      {carData.articles.map((item) => (
        <>
          <div className="flex my-2">
            <Image src={item.image} alt="image1" width={40} height={20} />
            <div className="text-sm mx-2 my-auto text-gray-400">{item.title}</div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

export default ThisWeek;
