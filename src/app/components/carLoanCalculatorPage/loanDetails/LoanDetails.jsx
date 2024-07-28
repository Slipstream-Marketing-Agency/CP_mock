import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Image from "next/image";
Chart.register(...registerables);

const LoanDetails = () => {
  const [P, setP] = useState(33100);
  const [R, setR] = useState(1.9);
  const [N, setN] = useState(1);
  const [emi, setEmi] = useState(0);
  const [payableInterest, setPayableInterest] = useState(0);
  const [pieData, setPieData] = useState({
    labels: ["Principal", "Interest"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["#EEF0FF", " blue"],
        radius: "80%",
      },
    ],
  });

  useEffect(() => {
    const calculateLoanDetails = (p, r, emi) => {
      let totalInterest = 0;
      let yearlyInterest = [];
      let yearPrincipal = [];
      let years = [];
      let year = 1;
      let [counter, principal, interes] = [0, 0, 0];
      while (p > 0) {
        let interest = parseFloat(p) * parseFloat(r);
        p = parseFloat(p) - (parseFloat(emi) - interest);
        totalInterest += interest;
        principal += parseFloat(emi) - interest;
        interes += interest;
        if (++counter === 12) {
          years.push(year++);
          yearlyInterest.push(parseInt(interes));
          yearPrincipal.push(parseInt(principal));
          counter = 0;
        }
      }
      return totalInterest;
    };

    const displayDetails = () => {
      let r = parseFloat(R) / 1200;
      let n = parseFloat(N) * 12;
      let num = parseFloat(P) * r * Math.pow(1 + r, n);
      let denom = Math.pow(1 + r, n) - 1;
      let emi = parseFloat(num) / parseFloat(denom);
      setEmi(emi);

      let payabaleInterest = calculateLoanDetails(P, r, emi);
      setPayableInterest(payabaleInterest);

      setPieData({
        labels: ["Principal Amount ", "Interest Amount"],
        datasets: [
          {
            data: [P, payabaleInterest],
            // backgroundColor: ["#EEF0FF", " blue"],
            // borderWidth:1,
            // radius:"50%",
          },
        ],
      });
    };

    displayDetails();
  }, [P, R, N]);

  return (
    <>
      <div className="my-2 bg-slate-200 p-4 rounded-lg flex justify justify-between">
        <div className="flex gap-4">
          <div>
            <Image
              src={"/carLoanPage/bmw_change_car_icon.png"}
              alt="car-icon"
              width={90}
              height={90}
            />
          </div>
          <div>
            <div className="text-blue-500 text-sm font-semibold">BMW</div>
            <div className=" text-md font-semibold">M2 Coupe M Septronic</div>
          </div>
        </div>
        <button className="lg:w-auto w-full py-4 px-12 text-sm bg-blue-700 rounded-3xl sm:float-right text-white">
          Change Car
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-6">
        <div className="w-full p-8 bg-white rounded-2xl border">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl font-semibold font-thin">
              Car Loan EMI Calculator
            </h1>
            {/* <button className="text-4xl">
              <i className="bi bi-list"></i>
            </button> */}
          </div>
          <div className=" grid gap-16 sm:grid-cols-12">
            <div className="sm:col-span-6 sm:block">
              <div className="mb-12 ">
                <div className="">
                  <p className="opacity-70 text-md">Loan Amount</p>
                  <p id="loan-amt-text" className="text-2xl font-semibold mb-3">
                    AED {P.toLocaleString("en-US")}
                  </p>
                </div>
                <input
                  type="range"
                  id="loan-amount"
                  min="33100"
                  max="165500"
                  step="100"
                  value={P}
                  onChange={(e) => setP(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm font-thin">
                  <p className="">33,100</p>
                  <p id="loan-amt-text" className="">
                    165,500
                  </p>
                </div>
              </div>

              {/* tenure */}
              <div className="mb-12">
                <p className="opacity-70 text-md">Tenure</p>
                <p className="text-2xl font-semibold mb-3">{N} years</p>
                <input
                  type="range"
                  id="loan-period"
                  min="1"
                  max="5"
                  step="1"
                  value={N}
                  onChange={(e) => setN(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm font-thin">
                  <p className="">1</p>
                  <p className="">5</p>
                </div>
              </div>

              {/* interest rate */}
              <div className="mb-12">
                <p className="opacity-70 text-md">Interest Rate</p>
                <p
                  id="interest-rate-text"
                  className="text-2xl font-semibold mb-3"
                >
                  {R}%
                </p>
                <input
                  type="range"
                  id="interest-rate"
                  min="1.9"
                  max="8"
                  step="0.1"
                  value={R}
                  onChange={(e) => setR(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm font-thin">
                  <p className="">1.9%</p>
                  <p id="loan-amt-text" className="">
                    8%
                  </p>
                </div>
              </div>
            </div>
            {/* doughnut chart*/}
            <div className="sm:col-span-6 sm:block">
              <Doughnut className="" data={pieData} />
              <div className="flex justify-between w-full my-4">
                <div className="flex justify-between">
                  <p id="price-container" className="opacity-70 mt-0">
                    Monthly EMI
                  </p>
                  <span id="price" className="mx-2 font-semibold text-lg">
                    AED {emi.toFixed(2).toLocaleString("en-US")}*
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="opacity-70 mt-0 ">Total Interest</p>
                  <span
                    id="ci"
                    className="mx-2 text-lg font-semibold opacity-100"
                  >
                    AED {payableInterest.toLocaleString("en-US")}*
                  </span>
                </div>
              </div>
              <div className="text-center text-lg font-semibold flex justify-between bg-gray-100 rounded-lg p-6">
                <div className="">Total Amount Payable</div>
                <div id="ct" className="text-gray-800 text-lg">
                  AED {(P + payableInterest).toLocaleString("en-US")}*
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanDetails;
