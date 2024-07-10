"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

interface ProgressBarProps {
  value: number;
  leftText: string;
  rightText: string;
  color: any;
}

export function ProgressBar({ value, leftText, rightText, color }: ProgressBarProps) {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 100)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="relative w-[100%]">
      <div className="absolute bottom-5 left-0 font-bold text-[14px]" >
        {leftText}
      </div>
      <div className="absolute bottom-5 right-0 " style={{color}}>
        {rightText}
      </div>
      <Progress value={progress} className= "w-[100%]" progressColor={color} />
    </div>
  )
}
