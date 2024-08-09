import Image from "next/image";

function DetailsSection({ title, image1, para, image2 }) {
  return (
    <div className="my-4 sm:my-8">
      {title && <div className="capitalize text-xl font-semibold sm:text-3xl my-4">{title}</div>}
      <div className="flex gap-4">
        <Image src={image1} />
        {image2 && <Image className="hidden md:block" src={image2} />}
      </div>
      <p className="mt-4  font-thin sm:leading-8">{para}</p>
    </div>
  );
}

export default DetailsSection;
