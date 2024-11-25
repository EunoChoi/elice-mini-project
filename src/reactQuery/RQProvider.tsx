'use client'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Devtools from "./Devtools";

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // refetchOnWindowFocus: true,
        // retryOnMount: true,
        // refetchOnReconnect: true,
        // retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Devtools />
    </QueryClientProvider>
  );
}

export default RQProvider;