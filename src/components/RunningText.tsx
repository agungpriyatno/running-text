"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchData } from "@/server/actions/data";
import { useRunningTextContext } from "./context/RunningTextProvider";
import { RTContainer, RTPanel, RTRunner } from "./ui/running-text";
import { useEffect, useState } from "react";

const RunningText = () => {
  const { items } = useRunningTextContext();
  const fetcher = async () => {
    return await fetchData();
  };

  const { data } = useQuery<string>({
    queryKey: ["data"],
    queryFn: fetcher,
    refetchInterval: 1000 * 60 * 2,
    initialData: "",
  });

  return (
    <RTContainer>
      {items.map((item, i) => (
        <RTPanel key={i} enableBorder={false}>
          <RTRunner delay={item.delay}>{data}</RTRunner>
        </RTPanel>
      ))}
    </RTContainer>
  );
};

export { RunningText };
