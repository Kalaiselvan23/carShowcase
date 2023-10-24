"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FormContext } from "@/contexts/FormContext"

export function ComboBoxSearch({data}:{data:string[]}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const {values,setParams}=React.useContext(FormContext);
  React.useEffect(()=>{
    if(value.length>0)
    {
      setParams({...values,make:value.toLowerCase()});
    }
    setParams({...values})
  },[value,values,setParams])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? data.find((option) => option === value)
            : "Select Car Model..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Car Model..." />
          <CommandEmpty>No Modals found.</CommandEmpty>
          <CommandGroup>
            {data.map((option) => (
              <CommandItem
                key={option}
                onSelect={(currentValue) => {
                  setValue(currentValue === value? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option ? "opacity-100" : "opacity-0"
                  )}
                />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
