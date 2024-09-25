import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getCoinsFromAmount = (amount:number):number => {
  switch(amount){
    case 99:
      return 100
    case 399:
      return 410
    case 799:
      return 820
    default:
      return 0;

  }
}
