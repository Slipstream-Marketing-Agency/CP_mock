import Image from "next/image"
function AdSection({image}) {
  return (
    // <div className='p-6 bg-slate-50'>AdSection</div>
    <Image
    src={image}
    alt={"news-story-image"}
    width={0}
    height={0}
  />
  )
}

export default AdSection