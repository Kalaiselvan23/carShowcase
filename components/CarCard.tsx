"use client"
import { Button } from "./ui/button"
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import Image from "next/image"
import {RiSteering2Fill} from "react-icons/ri";
import {PiGearFineBold} from "react-icons/pi";
import {FaGasPump} from "react-icons/fa";
import { useState } from "react";
import DetailDialog from "./DetailDialog"
import { Dialog } from "./ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { carDetails, driveType, fuelType, transmisssionType } from "@/types";

const CarCard = ({car}:{car:carDetails}) => {
  const [ishover,setHover]=useState(false);
  return (
    <Dialog>
      <DialogTrigger>
    <div className={"flex flex-col w-64 p-2 h-96 justify-around"} >
      <div className="flex justify-between">
        <p className="font-semibold">{car.make.toUpperCase()}</p>
        <Button variant={"ghost"} className="text-3xl text-gray-400 hover:bg-transparent hover:text-transparent">
          <AiOutlineHeart/>
        </Button>
      </div>
      <p className="text-2xl font-bold text-left">
        <sup className="font-normal">$</sup>
        52
        <sub className="font-normal">/day</sub>
      </p>
      <Image alt={"car-img"} className="mx-auto" src={"/hero.png"} width={400} height={400}  />
      <div className="flex justify-around items-center font-medium text-sm">
        <div className="text-red-700"> 
          <PiGearFineBold className="mx-auto text-2xl"/>
          <p className="text-center">{car.transmission==="a"?"Auto":"Man"}</p>
        </div> <div className="text-blue-600"> 
          <RiSteering2Fill className="mx-auto text-2xl"/>
          <p className="text-center">{car.drive.toUpperCase()}</p>
        </div> <div className="text-green-600"> 
          <FaGasPump className="mx-auto text-2xl"/>
          <p className="text-center">{car.fuel_type.toUpperCase()}</p>
        </div>
      </div>
    </div>
    </DialogTrigger>
    <DetailDialog carDetail={car}/>
    </Dialog>
  )
}

export default CarCard
