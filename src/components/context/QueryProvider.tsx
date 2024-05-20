"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

type QueryClientProps = {
  children: ReactNode;
};

const QueryProvider = ({ children }: QueryClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { QueryProvider };
