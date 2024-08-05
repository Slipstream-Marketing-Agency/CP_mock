"use client";
import Image from "next/image";
function DetailsDiv({ heading, data }) {
  return (
    <section className="">
      <div className="text-lg py-3 sm:py-10 sm:text-2xl px-6 sm:px-24 md:px-16  lg:px-52 ">
        {heading}
      </div>
      <hr />
      <div className="  px-6 sm:px-24 md:px-16  lg:px-52 bg-gray-50">
        {/* lgscreenUI */}
        <div className="hidden sm:grid grid-cols-10">
          <div className="col-span-2">
            {data.sections.map((sections, index) => (
              <div
                key={index}
                // className="text-base font-bold sm:py-10"
                className={`text-base font-bold sm:py-10 ${
                  index % 2 === 0 ? "bg-tablegrey1 " : "bg-tablegrey2"
                }`}
              >
                {sections.header}
              </div>
            ))}
          </div>
          {data.details.map((value, index) => (
            <div key={index} className="col-span-2">
              {data.sections.map((columns, colIndex) => (
                <div
                  className={`py-10 flex gap-2 col-span-2 text-base sm:py-10 ${
                    columns.field === "model" ? "font-semibold" : ""
                  } ${colIndex % 2 === 0 ? "bg-tablegrey1 " : "bg-tablegrey2"}`}
                >
                  <div
                    className={` ${
                      value[columns.field] === "Yes" ||
                      value[columns.field] === "No"
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    {value[columns.field] === "Yes" ? (
                      <Image
                        src={"/yes-icon.svg"}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src={"/no-icon.svg"}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    )}
                  </div>
                  {value[columns.field]}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* mobile UI */}
        <div className="sm:hidden">
          {data.sections.map((sections, index) => (
            <div className={`py-3 ${index % 2 === 0 ? "bg-tablegrey1 " : "bg-tablegrey2"}`}>
              <div key={index} className="text-xs font-bold text-blue-500">
                {sections.header}
              </div>
              <div className="flex justify-between">
                {data.details.slice(0, 2).map((value, index) => (
                  <div
                    key={index}
                    className={`${
                      sections.field === "model" ? "font-semibold" : ""
                    }`}
                  >
                    {value[sections.field]}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailsDiv;
