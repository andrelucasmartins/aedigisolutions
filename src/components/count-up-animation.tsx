"use client"
import { useEffect, useState } from "react";

interface CountUpAnimationProps {
   iconComponent?: React.ReactNode
    initialValue?: number
    targetValue: number
    targetBeforeValue?: number | string
    targetAfterValue?: number | string
    text?: string
}

export const CountUpAnimation = ({
  iconComponent,
  initialValue=0,
  targetValue,
  targetBeforeValue,
  targetAfterValue,
  text,
}: CountUpAnimationProps) => {
  const [count, setCount] = useState(initialValue);
  const duration = 1000;

  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => clearInterval(counter);
  }, [targetValue, initialValue]);

  return (
    <div className="flex flex-col space-y-4 items-center">
      {iconComponent}
      <h3 className="text-6xl font-bold">
        {targetBeforeValue}
        {count}
        {targetAfterValue}
      </h3>
      {text && <p className="text-lg">{text}</p>}
    </div>
  );
};
