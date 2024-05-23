"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchData } from "@/server/actions/data";
import { TStock } from "@/types/data";
import { useRunningTextContext } from "./context/RunningTextProvider";
import { RTContainer, RTItem, RTPanel, RTRunner } from "./ui/running-text";

const RunningText = () => {
  const { items } = useRunningTextContext();
  const fetcher = async () => {
    return await fetchData();
  };

  const { data } = useQuery<TStock[]>({
    queryKey: ["data"],
    queryFn: fetcher,
    refetchInterval: 1000 * 60 * 2,
    initialData: [],
  });

  return (
    <RTContainer>
      {items.map((item, i) => (
        <RTPanel key={i} enableBorder={false}>
          <RTRunner delay={item.delay} className="flex flex-row gap-2">{
            data.map((item, i) => <RTItem key={i} data={item}/>)
          }</RTRunner>
        </RTPanel>
      ))}
    </RTContainer>
  );
};

export { RunningText };

