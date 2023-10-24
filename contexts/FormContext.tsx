"use client"
import { fuelType } from "@/types";
import React, { createContext, useState } from 'react';
type valueType={
    make:string,
    year:number,
    fuel_type:fuelType,
}
type FormContextType={
    values:valueType,
    setParams:(param:valueType)=>void,
}
const defaultVal:valueType={
    make:"toyato",
    fuel_type:"electricity",
    year:2020,
}
export const FormContext=createContext<FormContextType>({values:defaultVal,setParams:()=>null});
export const FormContextProvider=({children}:{children:React.ReactNode})=>{
    const [values,setValues]=useState<valueType>(defaultVal);
    const setParams=(newValue:valueType)=>{
        // console.log(newValue)
        setValues(values);
    }
    return <FormContext.Provider value={{values,setParams}}>
        {children}
    </FormContext.Provider>
}

