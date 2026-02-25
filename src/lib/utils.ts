import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatDate = (iosString: string) => {
  const date = new Date(iosString)
  return date.toLocaleDateString('es-PE', {day:'numeric', month:'short', year:'numeric'});
};