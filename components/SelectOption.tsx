import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectOption({data,label}:{data:{title:string,value:string}[],label:string}) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {data.map(item=>{
            return <SelectItem key={item.title} value={item.value}>{item.title}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
