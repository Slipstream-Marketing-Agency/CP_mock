import Image from "next/image";
import Close from "@mui/icons-material/Close";
function Modal({ modal, setIsOpen }) {
  return (
    <>
      {modal && (
        <dialog className="fixed sm:left-0 top-0 w-full h-full bg-black bg-opacity-20 z-10 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white rounded-md md:w-1/4 w-3/4 p-5">
            <div className=" grid grid-cols-12">
              <div className="sm:col-span-2 sm:block hidden bg-green-200 rounded-full w-12 h-12 align-middle">
                <Image
                  src={"/icon-submitted.svg"}
                  alt="icon"
                  height={130}
                  width={130}
                  className=""
                />
              </div>
              <div className="col-span-11 sm:col-span-9">
                <div className="items-center ">
                  <h1 className="font-extralight text-md text-slate-600 my-1">
                    Thank You for Your Submission!
                  </h1>
                  <p className="text-xs font-thin text-gray-400 leading-5">
                    We have recieved your request for car insurance quote. Our
                    team is processing your information and will send your quote
                    to your email shortly.
                  </p>
                </div>
              </div>
              <div
                className=" col-span-1 cursor-pointer mx-auto text-sm "
                onClick={() => setIsOpen(false)}
              >
                <Close fontSize="small" />
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
