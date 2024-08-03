"use client";
function DetailsDiv({ heading, data }) {
  return (
    <section className="">
      <div className="text-2xl px-6 sm:px-24 md:px-16  lg:px-52">{heading}</div>
      <hr />
      <div className=" bg-gray-100 px-6 sm:px-24 md:px-16  lg:px-52">
        <div className="grid grid-cols-12">
          <div className="col-span-3 font-bold">Model</div>
          {data.map((car, index) => (
            <div key={index} className="col-span-3 ">
              {car.model}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailsDiv;
