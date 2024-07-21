export default function Stepper({ step }) {
  return (
    <div className="flex">
      <div
        className={`${
          step === "step2"
            ? "bg-green-500 h-6 w-6 p-1 px-2.5 mx-3 rounded-xl text-xs text-white"
            : " bg-blue-500 h-6 w-6 p-1 px-2.5 mx-3 rounded-xl text-xs text-white"
        } `}
      >
        1
      </div>
      <div className="bg-slate-200 my-3 h-[3px] w-full">
        <hr
          className={`${
            step === "step2"
              ? "h-[2px] w-1/2 bg-green-500 border-0"
              : "h-[2px] w-1/2 bg-blue-700 border-0"
          } `}
        />
      </div>

      <div className=" bg-blue-500 h-6 w-6 p-1 px-2.5 mx-3 rounded-xl text-xs text-white">
        2
      </div>
      <div className="bg-slate-200 my-3 h-[3px] w-full">
        <hr
          className={`${
            step === "step2" ? "h-[2px] w-1/2 bg-blue-700 border-0" : ""
          } `}
        />
      </div>
      <div className=" bg-blue-500 h-6 w-6 p-1 px-2.5 mx-3 rounded-xl text-xs text-white">
        3
      </div>
    </div>
  );
}
