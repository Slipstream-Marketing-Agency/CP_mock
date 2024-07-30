import Image from "next/image";
import benzIcon from "./../../../../../public/benz-icon.svg";
import mistubishiIcon from "./../../../../../public/mistubishi-icon.svg";
import nissanIcon from "./../../../../../public/nissan-icon.svg";
import fiatIcon from "./../../../../../public/fiat-icon.svg";
import brandIcon from "./../../../../../public/brand-icon.png";
import { carData } from "../../../mocks/mock";

export default function ChooseYourBrand() {
    const image = [benzIcon, mistubishiIcon, nissanIcon, benzIcon, fiatIcon, brandIcon, benzIcon, mistubishiIcon, nissanIcon, benzIcon, fiatIcon, brandIcon,]

    return (
        <div>
            <div className="heading-blue">CHOOSE YOUR BRAND</div>

            <div className="heading">Shop By Brand </div>
            <ul className='my-6 grid gap-2 grid-cols-12'>
                {carData.chooseBrandModal.map(brand => (
                    <li className='col-span-3 sm:col-span-2 my-6'>
                        <Image src={brand.image} width={64} height={64} className=" opacity-50" alt="brand-icon" />
                    </li>
                ))}
            </ul>
        </div>

    )
}
