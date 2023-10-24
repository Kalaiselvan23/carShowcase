"use client"
import { fuelType } from "@/types";
import React, { createContext, useState } from 'react';
export type valueType={
    make:string,
    year:number,
    fuel_type:fuelType,
}
export type FormContextType={
    values:valueType,
    setParams:(param:valueType)=>void,
}
const defaultVal:valueType={
    make:"toyota",
    fuel_type:"gas",
    year:2020,
}
export const FormContext=createContext<FormContextType>({values:defaultVal,setParams:()=>null});
export const FormContextProvider=({children}:{children:React.ReactNode})=>{
    const [values,setParams]=useState<valueType>(defaultVal);
    return <FormContext.Provider value={{values,setParams}}>
        {children}
    </FormContext.Provider>
}

