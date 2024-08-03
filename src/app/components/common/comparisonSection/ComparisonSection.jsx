"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./comparisonSection.module.css";
import { carData } from "../../../mocks/mock";
export default function ComparisonSection() {
  function ArrowStyle(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          // display: "block",
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
    slidesToShow: 2,
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
      <div className=" heading-blue">WHAT'S THE BEST ?</div>
      <div className="heading">Popular Car Comparison</div>
      <div className={`${styles.sliderWrapper3} my-4 px-2 w-screen md:w-auto`}>
        <Slider {...settings}>
          {carData.carComparison.map((item, index) => (
            <div key={index} className="rounded-xl border px-4 py-4">
              <div className=" grid gap-6  sm:grid-cols-12 ">
                <div className="sm:col-span-5 m-2">
                  <div className="">
                    <Image
                      src={item.image1}
                      width={300}
                      height={300}
                      className="mx-auto mb-2"
                    />
                    <div className="brand-label">{item.brand1}</div>
                    <div className="text-sm font-semibold text-gray-600">
                      {item.model1}
                    </div>
                    <div className="font-bold text-md sm:hidden">
                      {item.price1}
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-1 border-r h-1/2  my-4 sm:block hidden  ">
                  {/* <div className=" bg-button-bg h-6 w-6 p-[25%] my-7 mx-[40%]  rounded-xl text-xs text-white ">
                    Vs
                  </div> */}
                  <div className="bg-button-bg h-6 w-6 flex items-center justify-center my-7 mx-[40%] rounded-xl text-xs text-white">
                    Vs
                  </div>
                </div>

                <div className="md:hidden sm:col-span-12 border-b-2 mx-2">
                  <div className=" bg-button-bg h-6 w-6 mx-auto -my-3 p-1 rounded-xl text-xs text-white">
                    Vs
                  </div>
                </div>

                <div className="sm:col-span-5 m-2">
                  <div>
                    <Image
                      src={item.image2}
                      width={300}
                      height={300}
                      className="mx-auto mb-2 "
                    />
                    <div className="brand-label">{item.brand2}</div>
                    <div className="text-sm font-semibold  text-gray-600">
                      {item.model2}
                    </div>
                    <div className="font-bold text-md sm:hidden">
                      {item.price2}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" sm:grid-cols-12 md:grid hidden mx-2 mb-4">
                <div className="sm:col-span-6 text-lg font-semibold">
                  {item.price1}
                </div>
                <div className="sm:col-span-6 text-lg font-semibold mx-4">
                  {item.price2}
                </div>
              </div>

              <button className="bg-button-bg text-xs xl:text-sm font-thin text-white rounded-2xl justify-center text-center my-2 px-4 py-2 w-full">
                Compare Now
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
