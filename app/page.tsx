import Image from 'next/image'
import  Hero from '@/components/Hero'
import CarCatalog from '@/components/CarCatalog'
import Cars from '@/components/Cars'
import fetchCars from '@/utils/fetchCars'
import {FormContextProvider } from '@/contexts/FormContext'
import { Suspense } from 'react'
import { Skeleton } from "@/components/ui/skeleton"

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
