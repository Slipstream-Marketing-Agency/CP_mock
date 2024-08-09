import { carData } from "../../../mocks/mock";
import Image from "next/image";
function CarTypeSection() {
  return (
    <section>
      <div>
        Body Type
        <hr />
      </div>
      <div className="grid grid-cols-3 my-6 gap-2 ">
        {carData.NewsDetailsPage.bodyType.map((type) => (
          <div className="col-span-1">
            <Image src={type.image} alt="carType-image"/>
            <div className="text-center font-semibold text-xs">{type.type}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CarTypeSection;
