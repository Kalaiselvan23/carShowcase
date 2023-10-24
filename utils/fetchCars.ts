import { driveType, fuelType, transmisssionType } from "@/types";
import { NextResponse } from "next/server";

const BaseUrl = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars';
type fetchProps={
    make:string,
    year:number,
    fuel_type:fuelType,
    drive:driveType,
    transmission:transmisssionType,
}
const fetchCars = async(params:fetchProps|null) => {
    const options={
        method:"GET",
        headers:{
            'X-RapidAPI-Key': '5ee7931d60mshaebf8a425097d5cp121500jsn509c94c34868',
		    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
        }
    const ParamUrl=`${BaseUrl}?make=${params?.make}&transmission=${params?.transmission}&year=${params?.year}&drive=${params?.drive}&eul_type=${params?.fuel_type}`
    const Url=params?ParamUrl:BaseUrl;
    const res=await fetch(Url,options);
    const cars=await res.json();
    return cars;
}

export default fetchCars
