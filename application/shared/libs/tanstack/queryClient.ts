import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({}),
  mutationCache: new MutationCache({}),
  defaultOptions: {
    queries: {
      retry: 1,
      gcTime: 60 * 1000,
      staleTime: 10000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      throwOnError: false,
    },
    mutations: {
      throwOnError: false,
    },
  },
});
