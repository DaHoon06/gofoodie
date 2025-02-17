"use client";

import { IS_API_MOCKING } from "@/shared/config/processEnv";
import { useEffect, useState } from "react";

interface MSWProviderProps {
  children: React.ReactNode;
}

const MSWProvider = ({ children }: MSWProviderProps) => {
  const [enableMocking, setEnableMocking] = useState(false);
  useEffect(() => {
    if (IS_API_MOCKING && typeof window !== "undefined" && !enableMocking) {
      (async () => {
        const { worker } = await import("@/mocks/browser");
        await worker.start();
        console.log("MOCKING");
        setEnableMocking(true);
      })();
    }
  }, [enableMocking]);

  if (!IS_API_MOCKING) return <>{children}</>;
  return enableMocking ? <>{children}</> : null;
};

export default MSWProvider;
