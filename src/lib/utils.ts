import { TData } from "@/types/data";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createArray(length: number) {
  return Array.from({ length });
}

export function dataToString(data: TData) {
  const listString = data.data.results.map(
    (item) => `${item.symbol} ${item.change} ${item.close} ${item.percent}%`
  );
  return listString.join(" | ");
}
