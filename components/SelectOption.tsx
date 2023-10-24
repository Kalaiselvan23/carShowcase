'use client';
import * as React from "react"
import { useState } from "react";
import { useContext } from "react";
import { FormContext, FormContextType, valueType } from "@/contexts/FormContext";
import fetchCars from "@/utils/fetchCars";
export function SelectOption({data,label}:{data:{title:string,value:string}[],label:string}) {
  const {values,setParams}=React.useContext(FormContext) as FormContextType;
  const [selectedOption,setSelectedOption]=useState<string>(data[0].value);
  React.useEffect(()=>{
    if(label==='Year')
    {
      setParams((prev)=>{
        return {...prev,year:selectedOption}
      })
    }
    else
    {
      setParams((prev)=>{
        return {...prev,fuel_type:selectedOption}
      })
    }
  },[selectedOption,setParams,label])
  const handleChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedOption(e.target.value);
  }
  return (
   <select className="px-3 rounded-md bg-white " onChange={(e)=>handleChange(e)}>
    {data.map((item)=>{
      return <option key={item.value} value={item.value}>{item.title}</option>
    })}
   </select>
  )
}
