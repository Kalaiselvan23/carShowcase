import Image from "next/image"
import { Button } from "./ui/button"
const Hero = () => {
  return (
    <div className="p-2">
    <div className="flex justify-between items-center flex-wrap">
      <h2 className="text-6xl ml-10 leading-snug font-bold w-[30%]">
        Find, book, or rent a car -- quickly and easily
      </h2>
      <div className="overflow-hidden">
        <Image src={"/hero.png"} height={1000} width={900} alt="bg" className=" top-28 z-50"  />
        <Image src={"/hero-bg.png"} height={500} width={1000} alt="bg" className="absolute right-[-5rem] top-[-7rem] z-[-1] rotate-[50]" />
      </div>
    </div>
    <div className="ml-8">
      <h3 className="text-3xl w-[40%] font-thin">Streamline your car rental experience with our effortless booking process.</h3>
      <Button className="bg-blue-600 font-bold my-12 h-10">
        Explore Cars
      </Button>
    </div>

    </div>
  )
}

export default Hero
