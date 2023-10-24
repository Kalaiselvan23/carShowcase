import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { carDetails } from "@/types"
import Image from "next/image"
  
const DetailDialog = ({carDetail}:{carDetail:carDetails}) => {
  return (
  <DialogContent className="dialog-content">
    <DialogHeader>
      <DialogTitle>Car Details</DialogTitle>
    </DialogHeader>
    <DialogDescription>
      <div className="flex flex-wrap justify-center">
        <Image src={"/hero.png"} alt={"car-img"} width={500} height={800}/>
        <Image src={"/hero.png"} alt={"car-img"} width={200} height={300}/>
        <Image src={"/hero.png"} alt={"car-img"} width={200} height={300}/>
      </div>
     {Object.keys(carDetail).map((detail,index)=>{
      return <div key={index} className="p-3 text-black border-b-2 border-gray-200 flex justify-between">
        <span className="font-semibold">{detail.toUpperCase()}</span>
        <span>{carDetail[detail]}</span>
        </div>
     })}
    </DialogDescription>
  </DialogContent>
  )
}

export default DetailDialog
