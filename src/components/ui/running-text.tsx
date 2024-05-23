"use client";

import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";
import { TStock } from "@/types/data";
import { useRunningTextContext } from "../context/RunningTextProvider";

type RTContainerProps = {
  children?: ReactNode;
};

const RTContainer = ({ children }: RTContainerProps) => {
  const { columns, config } = useRunningTextContext();
  return (
    <section
      className="bg-black grid"
      style={{
        ...config.container,
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </section>
  );
};

type RTPanelProps = {
  enableBorder?: boolean;
  children?: ReactNode;
};

const RTPanel = ({ children, enableBorder }: RTPanelProps) => {
  const { config } = useRunningTextContext();

  return (
    <div
      className={cn("overflow-hidden text-white", {
        "border-[1px]": enableBorder,
      })}
      style={{ ...config.panel }}
    >
      {children}
    </div>
  );
};

type RTRunnerProps = {
  delay: number;
  children?: ReactNode;
  className?: string;
};

const RTRunner = ({ delay, children, className }: RTRunnerProps) => {
  const { config } = useRunningTextContext();

  return (
    <Marquee speed={config.speed} delay={delay}>
      <div style={{ ...config.panel }}></div>
      <div className={cn(className)}>{children}</div>
    </Marquee>
  );
};

type RTItemProps = {
  data: TStock;
};

const RTItem = ({ data: { percent, change, symbol, close } }: RTItemProps) => {
  return (
    <div
      className={cn("flex gap-2", {
        "text-red-500": percent < 0,
        "text-blue-500": percent === 0,
        "text-green-500": percent > 0,
      })}
    >
      <span>{`${symbol} ${change} ${close} ${percent}% ${percent < 0 ? "🡇" : percent > 0 ? "🡅" : "-"}`}</span>

    </div>
  );
};

export { RTContainer, RTItem, RTPanel, RTRunner };

