import Image from "next/image";
import Formikselect from "../../formikSelect/Formikselect";
import FormikSelect2 from "../../formikSelect/FormikSelect2";
function Modal({ modal, setIsOpen, setCarSelected }) {
  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0  bottom-0 -right-0 w-full h-full bg-black bg-opacity-20 overflow-auto backdrop-blur z-10 flex justify-center items-center ">
          <div className="absolute right-0 bg-white w-full h-full sm:w-1/2 rounded-3xl">
            <div className="col-span-12 rounded-tl-3xl bg-blue-700 w-full p-4 flex justify-between text-lg text-white">
                <div className="lg:w-1/4 w-1/2">
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
            {/* <Formikselect setIsOpen={setIsOpen} setCarSelected={setCarSelected}/> */}
            <FormikSelect2 setIsOpen={setIsOpen} setCarSelected={setCarSelected}/>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
