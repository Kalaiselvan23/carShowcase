import Image from 'next/image'
import  Hero from '@/components/Hero'
import CarCatalog from '@/components/CarCatalog'
import Cars from '@/components/Cars'
import fetchCars from '@/utils/fetchCars'
import {FormContextProvider } from '@/contexts/FormContext'

export default function Home() {
  return (
    <FormContextProvider>


    <main className="overflow-hidden">
      <Hero/>
      <CarCatalog/>
      <Cars/>
    </main>
    </FormContextProvider>
  )
}
