import React from "react"

import { cn } from "@/lib/utils"

/**
 * OrbitingCircles Component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} [props.children] - Child elements to orbit
 * @param {boolean} [props.reverse] - Reverse the orbit direction
 * @param {number} [props.duration=20] - Duration of one orbit in seconds
 * @param {number} [props.delay] - Delay before animation starts
 * @param {number} [props.radius=160] - Radius of the orbit in pixels
 * @param {boolean} [props.path=true] - Show the orbit path
 * @param {number} [props.iconSize=30] - Size of child elements in pixels
 * @param {number} [props.speed=1] - Speed multiplier for orbit
 */
export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            }}
            className={cn(
              `animate-orbit absolute flex size-[var(--icon-size)] transform-gpu items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
