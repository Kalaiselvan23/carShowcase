import { ComboBoxSearch } from "./ComboBoxSearch"
import { fuels, manufacturers,yearsOfProduction } from "@/_data/data"
import { SelectOption } from "./SelectOption"
const CarCatalog = () => {
  return (
    <div className="p-10 pb-0">
      <div >
        <p className="text-4xl">Car Catalog</p>
        <p className="my-3">Explore the cars you might like</p>
      </div>
      <div className="my-10 flex justify-between flex-wrap">
        <div>
        <ComboBoxSearch data={manufacturers}/>
        {/* <ComboBoxSearrch data={manufacturers}/> */}
        </div>
        <div className="flex gap-3">
        <SelectOption data={yearsOfProduction} label={"Year"} />
        <SelectOption data={fuels} label={"Fuel"} />
        </div>
      </div>
    </div>
  )
}

export default CarCatalog
