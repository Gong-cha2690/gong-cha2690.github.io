"use client";

import { useEffect, useRef, useState } from "react";

type SmoothSnapProps = {
  children: React.ReactNode;
  className?: string;
};

const threshold = 220;
const transitionMs = 850;

export default function SmoothSnap({ children, className = "" }: SmoothSnapProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const pageIndexRef = useRef(0);
  const isMovingRef = useRef(false);
  const wheelAmountRef = useRef(0);
  const wheelDirectionRef = useRef<1 | -1 | null>(null);
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    pageIndexRef.current = pageIndex;
  }, [pageIndex]);

  useEffect(() => {
    const canUsePager = () =>
      window.matchMedia("(min-width: 1024px) and (min-height: 760px)").matches;

    const resetWheel = () => {
      wheelAmountRef.current = 0;
      wheelDirectionRef.current = null;

      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
        resetTimerRef.current = null;
      }
    };

    const moveTo = (nextIndex: 0 | 1) => {
      if (isMovingRef.current || pageIndexRef.current === nextIndex) {
        return;
      }

      isMovingRef.current = true;
      pageIndexRef.current = nextIndex;
      setPageIndex(nextIndex);

      window.setTimeout(() => {
        isMovingRef.current = false;
      }, transitionMs);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!canUsePager()) {
        return;
      }

      event.preventDefault();

      if (isMovingRef.current) {
        return;
      }

      const direction: 1 | -1 = event.deltaY > 0 ? 1 : -1;
      const currentIndex = pageIndexRef.current;
      const canMove =
        (currentIndex === 0 && direction === 1) ||
        (currentIndex === 1 && direction === -1);

      if (!canMove) {
        resetWheel();
        return;
      }

      if (wheelDirectionRef.current !== direction) {
        wheelAmountRef.current = 0;
        wheelDirectionRef.current = direction;
      }

      wheelAmountRef.current += Math.abs(event.deltaY);

      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }

      resetTimerRef.current = window.setTimeout(resetWheel, 220);

      if (wheelAmountRef.current < threshold) {
        return;
      }

      resetWheel();
      moveTo(direction === 1 ? 1 : 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      resetWheel();
    };
  }, []);

  return (
    <div className={className}>
      <div
        className="snap-pager-track"
        style={{ transform: `translate3d(0, -${pageIndex * 100}svh, 0)` }}
      >
        {children}
      </div>
    </div>
  );
}
