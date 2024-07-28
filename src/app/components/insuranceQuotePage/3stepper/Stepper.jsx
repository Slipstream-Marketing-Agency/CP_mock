export default function Stepper({ step, setCurrentStep }) {
  return (
    <div className="mx-auto lg:w-1/2 md:w-1/2">
      <div className="flex mt-4 ">
        <div
          onClick={() => setCurrentStep(0)}
          className={`${
            step === 2
              ? "bg-green-500 h-6 w-6 p-1 px-2 mx-3 rounded-xl text-xs text-white cursor-pointer"
              : " bg-blue-500 h-6 w-6  mx-3 rounded-xl text-xs text-white cursor-pointer p-1 px-2"
          } `}
        >
          1
        </div>
        <div className="bg-slate-200 my-3 h-[3px] w-full">
          <hr
            className={`${
              step === 2
                ? "h-[2px] w-full bg-green-500 border-0"
                : "h-[2px] w-1/2 bg-blue-700 border-0"
            } `}
          />
        </div>

        <div
          onClick={() => setCurrentStep(1)}
          className=" bg-blue-500 h-6 w-6 p-2 py-1 mx-3 rounded-xl text-xs text-white cursor-pointer"
        >
          2
        </div>
        <div className="bg-slate-200 my-3 h-[3px] w-full">
          <hr
            className={`${
              step === 2 ? "h-[2px] w-1/2 bg-blue-700 border-0" : ""
            } `}
          />
        </div>
        <div className=" bg-blue-500 h-6 w-6 p-2 py-1 mx-3 rounded-xl text-xs text-white">
          3
        </div>
      </div>
      <div className="flex text-xs font-thin justify-between text-slate-400 w-full">
        <div> Vehicle Details</div>
        <div> Driver Details</div>
        <div> Get Quote</div>
      </div>
    </div>
  );
}
