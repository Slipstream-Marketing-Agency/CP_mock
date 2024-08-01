import Image from "next/image";
import { carData } from "../../../mocks/mock";

export default function ChooseYourBrand() {
    return (
        <div>
            <div className="heading-blue">CHOOSE YOUR BRAND</div>

            <div className="heading">Shop By Brand </div>
            <ul className='my-6 grid gap-2 grid-cols-12'>
                {carData.chooseBrandModal.map(brand => (
                    <li className='col-span-3 sm:col-span-2 my-6'>
                        <Image src={brand.image} width={64} height={64} className=" opacity-50 hover:opacity-100 cursor-pointer" alt="brand-icon" />
                    </li>
                ))}
            </ul>
        </div>

    )
}
