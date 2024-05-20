"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchData } from "@/server/actions/data";
import { useRunningTextContext } from "./context/RunningTextProvider";
import { RTContainer, RTPanel, RTRunner } from "./ui/running-text";

const RunningText = () => {
  const { items } = useRunningTextContext();

  const fetcher = async () => {
    return await fetchData();
  };

  const { data } = useQuery<string>({
    queryKey: ["data"],
    queryFn: fetcher,
    refetchInterval: 5000,
  });

  return (
    <RTContainer>
      {items.map((item, i) => (
        <RTPanel key={i} enableBorder={true}>
          <RTRunner delay={item.delay}>{data}</RTRunner>
        </RTPanel>
      ))}
    </RTContainer>
  );
};

export { RunningText };
