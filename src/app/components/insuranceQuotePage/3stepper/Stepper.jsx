export default function Stepper({ step, setCurrentStep }) {
  return (
    <div className="sm:p-6 px-6 mx-auto lg:w-1/2 md:w-1/2">
      <div className="flex mt-4 ">
        <div
          onClick={() => setCurrentStep(0)}
          className={`p-2 mx-3 h-6 w-10 rounded-xl text-xs text-white cursor-pointer flex items-center justify-center ${
            step === 2 ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          1
        </div>
        <div className="bg-slate-200 my-3 h-[3px] w-full">
          <hr
            className={`h-[2px]  border-0${
              step === 2 ? " w-full bg-green-500 " : " w-1/2   bg-blue-700"
            } `}
          />
        </div>

        <div
          onClick={() => setCurrentStep(1)}
          className=" bg-blue-500  h-6 p-2 w-10  mx-3 rounded-xl text-xs text-white cursor-pointer flex items-center justify-center"
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
        <div className=" bg-blue-500  p-2 h-6 w-10  mx-3 rounded-xl text-xs text-white flex items-center justify-center">
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
