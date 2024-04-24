import Image from "next/image";


import { Content } from "./(hero)/hero-content";

export default function Hero() {
  return (
    <div
      className="flex flex-col justify-center items-center overflow-clip w-full h-[100vh] bg-hero-radial-md text-center drop-shadow-2xl -space-y-8 md:space-y-0 md:flex-row md:-space-x-12"
    >
      <div className="hidden w-full h-full hero--radial-gradient__left bg-neutral-50 select-none md:block md:translate-x-[-50vw] md:animate-image-left-slide-in">
        <Image
          src={"/hero-section/left1.jpg"}
          alt={"Image"}
          width={512}
          height={512}
          className="object-cover w-full h-full"
          draggable="false"
          priority
        />
      </div>
      <Content />
      <div className="w-full z-0 overflow-hidden h-full hero--radial-gradient__bottom bg-neutral-50 select-none md:h-full md:hero--radial-gradient__right md:translate-x-[50vw] md:animate-image-right-slide-in transition-all">
        <Image
          src={"/hero-section/right1.jpg"}
          alt={"Image"}
          width={512}
          height={512}
          className="z-0 object-cover w-full h-full"
          draggable="false"
          priority
        />
      </div>
    </div>
  )
}
