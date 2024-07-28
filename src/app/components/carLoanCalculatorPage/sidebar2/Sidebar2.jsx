"use client"
import Image from "next/image";
import {carLoanPage} from"../../../mocks/labels";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Sidebar2() {
    return (
        <div className="bg-gray-800 p-4 py-6 my-6 rounded-xl text-white text-left">
            <Image src="/sideBar-icon.svg" width={250} height={250} className="" />
            <div className="text-lg font-medium ">{carLoanPage.carWorthSection.heading}</div>
            <div className="text-xs font-thin my-2 text-gray-300">{carLoanPage.carWorthSection.para}</div>
            <button className="text-sm font-medium">{carLoanPage.carWorthSection.button}</button>
            {/* <Image src={ArrowForwardIcon} width={64} height={64} className="" /> */}
        </div>
    )
}

export default Sidebar2