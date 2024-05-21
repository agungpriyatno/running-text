"use server";

import { TData } from "@/types/data";
import { ApiError } from "next/dist/server/api-utils";
import { fetchDataRepo } from "../repositories/data";
import { dataToString } from "@/lib/utils";

const fetchData = async () => {
  const resp = await fetchDataRepo();
  if (!resp.ok) throw new ApiError(500, "Server error");
  const data = (await resp.json()) as TData;
  const result = dataToString(data);
  return result;
};

export { fetchData };
