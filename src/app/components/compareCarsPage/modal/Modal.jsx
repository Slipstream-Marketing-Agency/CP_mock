import FormikSearchComponent from "../SearchComponent/FormikSearchComponent";
function Modal({ modal, setIsOpen, setCarSelected }) {
  return (
    <>
      {modal && (
        <dialog className=" fixed left-0 top-0  bottom-0 -right-0 w-full h-full bg-black bg-opacity-20 overflow-auto  z-10 flex justify-center items-center transition-all duration-1000 ease-in-out no-scrollbar">
          <div className="animate-trans-right absolute right-0 bg-white w-full h-full sm:w-1/2 sm:rounded-3xl">
            <div className="col-span-12 sm:rounded-tl-3xl bg-blue-700 w-full p-8 flex justify-between text-3xl text-white diagonal-stripes">
              {/* <div className="h-80 bg-red-500 bg-[repeating-linear-gradient(to_right,var(--tw-gradient-stops))] from-[#5774b4] from-[length:0_1px] to-[#17181a] to-[length:0px_40px]"> */}
                <div className=" sm:w-[40%]">
                  Select Your Brand, Model and Variant
                </div>
                <div
                  className=" sm:col-span-1 sm:block cursor-pointer "
                  onClick={() => setIsOpen(false)}
                >
                  X
                </div>
              </div>
            <div className="m-4">
              <FormikSearchComponent setIsOpen={setIsOpen} setCarSelected={setCarSelected} />
            {/* <FormikSelect setIsOpen={setIsOpen} setCarSelected={setCarSelected}/> */}
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
