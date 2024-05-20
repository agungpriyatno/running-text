"use client";

import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";
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
};

const RTRunner = ({ delay, children }: RTRunnerProps) => {
  const { config } = useRunningTextContext();

  return (
    <Marquee speed={config.speed} delay={delay}>
      <div style={{ ...config.panel }}></div>
      <span>{children}</span>
    </Marquee>
  );
};

export { RTContainer, RTPanel, RTRunner };
