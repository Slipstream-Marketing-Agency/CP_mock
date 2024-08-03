import Image from "next/image";
import { carData } from "../../../mocks/mock";

export default function ChooseYourBrand() {
    return (
        <div>
            <div className="heading-blue">CHOOSE YOUR BRAND</div>
            <div className="heading">Shop By Brand </div>
            <ul className='my-6 grid grid-cols-12'>
                {carData.chooseBrandModal.map(brand => (
                    <li className='col-span-3 sm:col-span-2 mb-10'>
                        <Image src={brand.image} width={90} height={90} className=" grayscale-[80%] hover:grayscale-0 hover:scale-110 cursor-pointer" alt="brand-icon" />
                    </li>
                ))}
            </ul>
        </div>

    )
}
