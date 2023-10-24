'use client'
import fetchCars from "@/utils/fetchCars"
import CarCard from "./CarCard"
import { carDetails } from "@/types";
import { useContext, useEffect, useState } from "react";
import { FormContext, FormContextType } from "@/contexts/FormContext";
import { Button } from "./ui/button";
const Cars = () => {
  const {values}=useContext(FormContext) as FormContextType;
  const [cars,setCars]=useState([]);
  console.log(values)
  useEffect(()=>{
   const fetchData=async()=>{
    try{
      const state=await fetchCars(values);
      setCars(state);
    }catch(err)
    {
      console.log(err);
    }
   }
   fetchData()
  },[values])
  return (
    <>
    <div className="px-10 flex flex-wrap gap-8 justify-start py-3">
      {
        cars.map((car:carDetails,index:number)=>{
          return <CarCard key={index} car={car}/>
        })
      }
    </div>
    <Button className="mx-[50%] w-32 my-3 bg-blue-400">Load More</Button>
    </>
  )
}

export default Cars
