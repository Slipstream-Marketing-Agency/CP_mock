import React from "react";
import Image from "next/image";
function Header() {
  return (
    <>
      <div className="bg-black text-gray-300  px-10 py-2 h-[40px] flex gap-8 text-sm font-normal">
        <div>About Us</div>
        <div>My Account</div>
        <div>
          Unlock Car Prices :{" "}
          <span className="text-text-orange">
            Discover Transparent Pricing for Your Next Ride!
          </span>
        </div>
      </div>
      <div className="p-6 px-10 h-[85px] flex justify-between">
        <div className="flex">
          <Image src={"/CP_icon.svg"} width={35} height={35} />
          <div className="text-xl font-semibold mx-3">Car Prices.ae</div>
        </div>
        <button className="bg-black rounded-2xl text-white float-right px-8">
          Sign In
        </button>
      </div>
    </>
  );
}

export default Header;
