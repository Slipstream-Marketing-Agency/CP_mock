"use client";
function DetailsDiv({ heading, data }) {
  return (
    <section className="">
      <div className="text-lg py-3 sm:py-10 sm:text-2xl px-6 sm:px-24 md:px-16  lg:px-52 ">
        {heading}
      </div>
      <hr />
      <div className=" bg-gray-100 px-6 sm:px-24 md:px-16  lg:px-52">
        {/* lgscreenUI */}
        <div className="hidden sm:grid grid-cols-12 ">
          <div className="col-span-2">
            {data.sections.map((sections, index) => (
              <div key={index} className="text-base font-bold sm:py-10">
                {sections.header}
              </div>
            ))}
          </div>
          {data.details.map((value, index) => (
            <div key={index} className="col-span-2 ">
              {data.sections.map((columns) => (
                <div
                  className={`py-10 ${
                    columns.field === "model" ? "font-semibold" : ""
                  }`}
                >
                  {value[columns.field]}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* mobile UI */}
        <div className="sm:hidden">
          {data.sections.map(
            (sections, index) => (
              (
                <div className={`py-3 ${index % 2 === 0 ? "bg-slate-200" : "bg-slate-300"}`}>
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
              )
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default DetailsDiv;
