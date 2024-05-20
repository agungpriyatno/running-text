"use client";

import { createArray } from "@/lib/utils";
import { TResolution } from "@/types/running-text";
import { createContext, ReactNode, useContext } from "react";

export type RunningTextConfig = {
  rows: number;
  columns: number;
  items: { delay: number }[];
  config: {
    container: TResolution;
    panel: TResolution;
    speed: number;
  };
};

const RunningTextContext = createContext<RunningTextConfig | null>(null);

const useRunningTextContext = () => {
  const context = useContext(RunningTextContext);
  if (!context) throw new Error("Provide RunningTextProvider!");
  return context;
};

export type RunningTextProviderProps = {
  children: ReactNode;
  config: {
    container: TResolution;
    length: number;
    panel: TResolution;
    delay: number;
    speed: number;
  };
};

const RunningTextProvider = ({ children, config }: RunningTextProviderProps) => {
  const { container, panel, length, delay, speed } = config;
  const columns = Math.floor(container.width / panel.width);
  const rows = Math.ceil(length / columns);
  const items = createArray(length).map((_, i) => {
    return { delay: i * delay };
  });
  const value = {
    rows,
    columns,
    items: items.reverse(),
    config: { container, panel, speed },
  };
  return <RunningTextContext.Provider value={value}>{children}</RunningTextContext.Provider>;
};

export { RunningTextContext, RunningTextProvider, useRunningTextContext };
