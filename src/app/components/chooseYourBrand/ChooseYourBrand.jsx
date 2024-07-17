import Image from "next/image";
import benzIcon from "./../../../../public/benz-icon.svg";
import mistubishiIcon from "./../../../../public/mistubishi-icon.svg";
import nissanIcon from "./../../../../public/nissan-icon.svg";
import fiatIcon from "./../../../../public/fiat-icon.svg";
import brandIcon from "./../../../../public/brand-icon.png";

export default function ChooseYourBrand() {
    const image = [benzIcon, mistubishiIcon, nissanIcon, benzIcon, fiatIcon, brandIcon, benzIcon, mistubishiIcon, nissanIcon, benzIcon, fiatIcon, brandIcon,]

    return (
        <div>
            <div className="text-blue-600 font-medium text-xs">CHOOSE YOUR BRAND</div>

            <div className="font-medium text-xl">Shop By Brand </div>
            <div className='m-4 grid gap-2 sm:grid-cols-12'>
                {image.map(image => (
                    <div className=' sm-col-span-1 min-h-[100px] rounded-lg sm:col-span-2'>
                        <Image src={image} width={64} height={64} className="mx-auto mb-2" alt="brand-icon" />
                    </div>
                ))}
            </div>
        </div>

    )
}
