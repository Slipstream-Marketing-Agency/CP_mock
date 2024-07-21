import Image from "next/image";
function Modal({ modal, setIsOpen }) {
  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-20 z-10 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white rounded-md w-1/3 p-3">
            <div className="grid sm:grid-cols-12">
              <div className="sm:col-span-2 sm:block hidden bg-green-200 rounded-full w-2/3 h-2/3">
                <Image
                  src={"/icon-submitted.svg"}
                  alt="icon"
                  height={80}
                  width={80}
                  className="-my-1"
                />
              </div>
              <div className=" sm:col-span-9 sm:block">
                <div className="items-center ">
                  <h1 className="font-thin text-md">
                    Thank You for Your Submission !
                  </h1>
                  <p className="text-xs text-gray-400">
                    We have recieved your request for car insurance quote. Our
                    team is processing your information and will send your quote
                    to your email shortly
                  </p>
                </div>
              </div>
              <div
                className=" sm:col-span-1 sm:block cursor-pointer m-auto -my-1 text-sm "
                onClick={() => setIsOpen(false)}
              >
                X
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
