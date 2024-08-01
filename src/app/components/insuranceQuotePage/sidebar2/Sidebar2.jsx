import Image from "next/image";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Sidebar2() {
    return (
        <div className="bg-blue-600 p-4 my-2 rounded-xl text-white text-left">
            <Image src="/sideBar-icon.svg" width={250} height={250} className="" />
            <div className=" w-3/4 text-xl font-semibold ">Calculate Your Car Loan EMI</div>
            <div className="text-xs font-thin my-2 opacity-80">Input your loan amount, interest rate, and loan term to get instant results.</div>
            <button className="text-sm font-thin">Calculate now  &gt;</button>
            {/* <Image src={ArrowForwardIcon} width={64} height={64} className="" /> */}
        </div>
    )
}

export default Sidebar2