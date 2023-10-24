import fetchCars from "@/utils/fetchCars"
import CarCard from "./CarCard"
import { carDetails } from "@/types";

const Cars = async() => {
  const cars=await fetchCars({make:"jeep",drive:"fwd",fuel_type:"gas",transmission:"a",year:2019});
  return (
    <div className="px-10 flex flex-wrap gap-8 justify-start py-3">
      {
        cars.map((car:carDetails,index:number)=>{
          return <CarCard key={index} car={car}/>
        })
      }
    </div>
  )
}

export default Cars
