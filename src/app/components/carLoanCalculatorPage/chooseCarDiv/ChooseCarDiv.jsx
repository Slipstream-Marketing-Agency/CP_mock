import Slider from "react-slick";
import styles from "./chooseCarDiv.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { carLoanPage } from "../../../mocks/labels";
import { carData } from "../../../mocks/mock";

export default function chooseCarDiv() {
  function ArrowStyle(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#d4d4d4",
          borderRadius: "50px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowStyle />,
    prevArrow: <ArrowStyle />,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="my-6">
      <div className="heading-blue">
        {carLoanPage.chooseCarSection.headingSmall}
      </div>
      <div className="heading">
        {carLoanPage.chooseCarSection.heading}
      </div>
      <div className={`${styles.sliderWrapper3} my-4 px-2 w-screen md:w-auto`}>
        <Slider {...settings}>
          {carData.chooseCar.map((car) => (
            <div key={car.brand} className="border-2 rounded-lg p-2">
              <Image
                src={car.image}
                width={250}
                height={250}
                className="mx-auto mb-2"
                alt={`${car.brand} ${car.model}`}
              />
              <div className="text-blue-500 text-xs font-semibold">
                {car.brand}
              </div>
              <div className="text-sm font-semibold my-1 text-gray-600">
                {car.model}
              </div>
              <div className="font-semibold text-base">{car.price}</div>

              <div className="flex justify-between p-2 bg-slate-100 rounded-md my-2 text-gray-500 text-xs">
                <div>
                  <div>MILEAGE</div>
                  <div className="font-bold">{car.mileage} Litre</div>
                </div>
                <div>
                  <div>TRANSMISSION</div>
                  <div className="font-bold">{car.transmission}</div>
                </div>
                <div>
                  <div>SEATS</div>
                  <div className="font-bold">{car.seats}</div>
                </div>
              </div>

              <div className="grid gap-1 grid-cols-12 rounded-md">
                <div className="col-span-6 p-2 text-xs">
                  <div className="text-xs opacity-70">EMI Starting from</div>
                  <div className="text-sm font-bold">{car.emi}*</div>
                </div>
                <div className="col-span-6 text-xs flex items-center justify-end">
                  <button className="bg-blue-500 text-xs xl:text-sm font-thin text-white rounded-2xl px-4 sm:px-2 py-2">
                    Calculate EMI
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
