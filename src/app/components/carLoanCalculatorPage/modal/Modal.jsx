import FormikSearchComponent from "../SearchComponent/FormikSearchComponent";
import Close from "@mui/icons-material/Close";
function Modal({ modal, setIsOpen, setCarSelected }) {
  return (
    <>
      {modal && (
        <dialog className=" fixed left-0 top-0  bottom-0 -right-0 w-full h-full bg-black bg-opacity-20 overflow-auto  z-10 flex justify-center items-center transition-all duration-1000 ease-in-out no-scrollbar">
          <div className="animate-trans-right absolute right-0 bg-white w-full h-full sm:w-1/2 sm:rounded-3xl">
            <div className="col-span-12 sm:rounded-tl-3xl bg-button-bg w-full p-8 flex justify-between text-3xl text-white bg-stripes">
              <div className=" sm:w-[40%]">
                Select Your Brand, Model and Variant
              </div>
              <div
                className=" sm:col-span-1 sm:block cursor-pointer "
                onClick={() => setIsOpen(false)}
              >
                <Close fontSize="large" />
              </div>
            </div>
            {/* 
            <div class="relative bg-blue-600 col-span-12 sm:rounded-tl-3xl w-full p-8 flex justify-between text-3xl text-white">
              <div
                class="relative
   sm:w-[40%] z-10"
              >
                Select Your Brand, Model and Variant
              </div>
              <div class="absolute inset-0  bg-stripes float-right"></div>
            </div> */}

            <div className="m-4">
              <FormikSearchComponent
                setIsOpen={setIsOpen}
                setCarSelected={setCarSelected}
              />
              {/* <FormikSelect setIsOpen={setIsOpen} setCarSelected={setCarSelected}/> */}
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
