import React from "react";
import { carData } from "../../../mocks/mock";
function DetailsDiv() {
  return (
    <section className="">
      {/* <div>
        <div className="text-2xl px-6 sm:px-24 md:px-16  lg:px-52">Basic Information</div>
        <hr />
        <div className="px-6 sm:px-24 md:px-16  lg:px-52">
          <div className="grid gap-16 sm:grid-cols-12">
            <div className="sm:col-span-3">Model</div>
            <div className="sm:col-span-3">car 1</div>
            <div className="sm:col-span-3">car 2</div>
            <div className="sm:col-span-3">car 3</div>
          </div>
        </div>
      </div> */}
      {/* <div>Engine Transmiiosn details</div>
      <div>Fuel Efficiency</div>
      <div>Performance</div>
      <div>Safety</div>
      <div>Dimension</div>
      <div>Interior</div> */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-none ">
          <thead>
            {/* row1 */}
            <tr className="bg-red-200">
              <th className="px-4 py-2 border-none ">Basic Information</th>
              {/* <th className="px-4 py-2 border-none "></th>
              <th className="px-4 py-2 border-none "></th>
              <th className="px-4 py-2 border-none "></th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 border-none ">Model</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2  ">
                  {car.model}
                </td>
              ))}
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2">Price</td>
              {carData.compareCarsData.map((car, index) => (
                <td
                  key={index}
                  className="px-4 py-2 border-none border-red-300"
                >
                  {car.price}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 border-none ">Type</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.type}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        {/* row2 */}
        <table className="min-w-full border-none">
          <thead>
            <tr className="bg-red-200">
              <th className="px-4 py-2 border-none ">
                Engine & Transmission details
              </th>
              {/* <th className="px-4 py-2 border-none "></th>
              <th className="px-4 py-2 border-none "></th>
              <th className="px-4 py-2 border-none "></th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2 border-none ">No. Of Cylinders</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.cylinders}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 border-none ">Displacement (cc)</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.displacement}
                </td>
              ))}
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border-none ">Power (hp)</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.power}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 border-none ">Peak Torque (Nm)</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.torque}
                </td>
              ))}
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border-none ">Fuel Type</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.fuelType}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 border-none ">Drive</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.drive}
                </td>
              ))}
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border-none ">Transmission Type</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.transmission}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 border-none ">No. of Gears</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.gears}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <table className="min-w-full border-none">
          <thead>
            <tr className="bg-red-200">
              <th className="px-4 py-2 border-none ">Fuel Efficiency</th>
              <th className="px-4 py-2 border-none "></th>
              <th className="px-4 py-2 border-none "></th>
              <th className="px-4 py-2 border-none "></th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2 border-none ">Fuel Tank Size (L)</td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.fuelTank}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 border-none ">
                Fuel Consumption (kmpl)
              </td>
              {carData.compareCarsData.map((car, index) => (
                <td key={index} className="px-4 py-2 border-none ">
                  {car.consumption}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DetailsDiv;
