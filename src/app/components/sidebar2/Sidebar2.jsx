import Image from "next/image";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Sidebar2() {
    return (
        <div className="bg-blue-600 p-4 my-4 rounded-xl text-white">
            <Image src="/sideBar-icon.svg" width={150} height={150} className="" />
            <div className=" w-3/4">Calculate Your Car Loan EMI</div>
            <div className="text-xs font-thin my-2">Input your loan amount, interest rate, and loan term to get instant results.</div>
            <button className="text-sm">Calculate now </button>
            {/* <Image src={ArrowForwardIcon} width={64} height={64} className="" /> */}
        </div>
    )
}

export default Sidebar2