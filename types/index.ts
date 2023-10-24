export type driveType="fwd"|"rev";
export type fuelType="gas"|"electricity";
export type transmisssionType="a"|"m";

export type carDetails={
    city_mpg:number,
    class:string,
    combination_mpg:number,
    cylinders:number,
    displacement:number,
    drive:driveType,
    fuel_type:fuelType,
    highway_mpg:number,
    make:string,
    transmission:transmisssionType,
    year:number,
}