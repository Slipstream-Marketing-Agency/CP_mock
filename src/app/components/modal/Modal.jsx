import Link from "next/link";
function Modal({ modal }) {
  return (
    <>
      {modal === "open" && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-20 z-10 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto px-6 py-4 rounded-md w-80 h-64">
            <div className="flex flex-col items-center ">
              <h1 className="font-semibold text-xl">Thank You for Your Submission ! </h1>
              <p className="text-base my-6">
                We have recieved your request for car insurance quote. Our team is processing your information and will send your quote to your email shortly
              </p>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;