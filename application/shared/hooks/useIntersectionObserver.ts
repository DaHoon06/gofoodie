'use client';

import {InfiniteQueryObserverResult} from "@tanstack/query-core";
import {useEffect, useState} from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

export const useIntersectionObserver = ({
                                          threshold = 0.1,
                                          hasNextPage,
                                          fetchNextPage
                                        }: UseIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

  const observerCallback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  useEffect(() => {
    if (!target) return;

    // observer intersection instance 생성
    const observer = new IntersectionObserver(observerCallback, {threshold});

    // 타켓 관찰
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [observerCallback, threshold, target]);

  return {setTarget};
}