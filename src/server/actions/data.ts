"use server";

import { TData } from "@/types/data";
import { ApiError } from "next/dist/server/api-utils";
import { fetchDataRepo } from "../repositories/data";

const fetchData = async () => {
  const resp = await fetchDataRepo();
  if (!resp.ok) throw new ApiError(500, "Server error");
  const data = (await resp.json()) as TData;
  
  return data.data.results
};

export { fetchData };

