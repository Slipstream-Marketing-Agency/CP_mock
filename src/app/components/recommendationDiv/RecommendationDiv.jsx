import Image from "next/image";

export default function RecommendationDiv() {
    return (
        <div className=' my-6'>
            <div className=" text-blue-600 font-medium text-xs">OUR RECOMMENDATION</div>
            <div className='font-semibold font-medium text-xl'>Featured Cars</div>
            <div className=' grid gap-1  sm:grid-cols-12 '>
                {/* will do mapping from mock to just have eliminate div2,div3 */}
                {/* div1 */}
                <div className='sm:col-span-4 m-2 border-2 rounded-xl px-2 py-4'>
                    <div className="">
                        <Image src="/car-image2.png" width={150} height={150} className="mx-auto mb-2" />
                        <div className='text-blue-500 text-xs'>VOLVO</div>
                        <div className='text-sm font-medium'>Volvo XC40</div>
                        <div className='font-bold text-sm'>AED 185,850 - 222,900</div>

                        {/* details div */}
                        <div className="grid gap-1  bg-slate-200 sm:grid-cols-12 rounded-md my-2">
                            <div className="col-span-4 p-2 text-xs">
                                <div>MILEAGE</div>
                                <div className="font-bold">90 Litre</div>
                            </div>
                            <div className="col-span-4 p-2 text-xs">
                                <div>TRANSMISION</div>
                                <div className="font-bold">Manual</div>
                            </div>
                            <div className="col-span-4 p-2 text-xs">
                                <div>SEATS</div>
                                <div className="font-bold">5 Seater</div>
                            </div>
                        </div>

                        {/* EMI div */}
                        <div className="grid gap-1 sm:grid-cols-12 rounded-md">
                            <div className="col-span-6 p-2 text-xs">
                                <div className="text-xs">EMI Starting from</div>
                                <div className="font-bold">AED 3,196</div>
                            </div>
                            <div className="col-span-6 text-xs">
                                <button className='bg-blue-700 text-sm font-thin font-xs text-white rounded-xl justify-center text-center my-2 p-2'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div2 */}
                <div className='sm:col-span-4 m-2 border-2 rounded-xl px-2 py-4'>
                    <div className="">
                        <Image src="/car-image2.png" width={150} height={150} className="mx-auto mb-2" />
                        <div className='text-blue-500 text-xs'>VOLVO</div>
                        <div className='text-sm font-medium'>Volvo XC40</div>
                        <div className='font-bold text-sm'>AED 185,850 - 222,900</div>

                        {/* details div */}
                        <div className="grid gap-1  bg-slate-200 sm:grid-cols-12 rounded-md my-2">
                            <div className="col-span-4 p-2 text-xs">
                                <div>MILEAGE</div>
                                <div className="font-bold">90 Litre</div>
                            </div>
                            <div className="col-span-4 p-2 text-xs">
                                <div>TRANSMISION</div>
                                <div className="font-bold">Manual</div>
                            </div>
                            <div className="col-span-4 p-2 text-xs">
                                <div>SEATS</div>
                                <div className="font-bold">5 Seater</div>
                            </div>
                        </div>

                        {/* EMI div */}
                        <div className="grid gap-1 sm:grid-cols-12 rounded-md">
                            <div className="col-span-6 p-2 text-xs">
                                <div className="text-xs">EMI Starting from</div>
                                <div className="font-bold">AED 3,196</div>
                            </div>
                            <div className="col-span-6 text-xs">
                                <button className='bg-blue-700 text-sm font-thin font-xs text-white rounded-xl justify-center text-center my-2 p-2'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div3 */}
                <div className='sm:col-span-4 m-2 border-2 rounded-xl px-2 py-4'>
                    <div className="">
                        <Image src="/car-image2.png" width={150} height={150} className="mx-auto mb-2" />
                        <div className='text-blue-500 text-xs'>VOLVO</div>
                        <div className='text-sm font-medium'>Volvo XC40</div>
                        <div className='font-bold text-sm'>AED 185,850 - 222,900</div>

                        {/* details div */}
                        <div className="grid gap-1  bg-slate-200 sm:grid-cols-12 rounded-md my-2">
                            <div className="col-span-4 p-2 text-xs">
                                <div>MILEAGE</div>
                                <div className="font-bold">90 Litre</div>
                            </div>
                            <div className="col-span-4 p-2 text-xs">
                                <div>TRANSMISION</div>
                                <div className="font-bold">Manual</div>
                            </div>
                            <div className="col-span-4 p-2 text-xs">
                                <div>SEATS</div>
                                <div className="font-bold">5 Seater</div>
                            </div>
                        </div>

                        {/* EMI div */}
                        <div className="grid gap-1 sm:grid-cols-12 rounded-md">
                            <div className="col-span-6 p-2 text-xs">
                                <div className="text-xs">EMI Starting from</div>
                                <div className="font-bold">AED 3,196</div>
                            </div>
                            <div className="col-span-6 text-xs">
                                <button className='bg-blue-700 text-sm font-thin font-xs text-white rounded-xl justify-center text-center my-2 p-2'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
