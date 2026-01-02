"use client"

import * as React from "react"

import { useMeasure } from "@uidotdev/usehooks"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

import { cn } from "../lib/utils"

const processCardVariants = cva("flex flex-col rounded-2xl border backdrop-blur-lg", {
  variants: {
    variant: {
      indigo:
        "text-gray-900 border-gray-200 backdrop-blur-lg bg-white shadow-xl",
      light: "shadow-xl bg-white",
    },
    size: {
      sm: "min-w-[280px] max-w-[280px]",
      md: "min-w-[380px] max-w-[380px]",
      lg: "min-w-[480px] max-w-[480px]",
      xl: "min-w-[580px] max-w-[580px]",
    },
  },
  defaultVariants: {
    variant: "indigo",
    size: "md",
  },
})

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
}
interface ProcessCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof processCardVariants> {
  itemsLength: number
  index: number
  isVertical?: boolean
}

const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined)
function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    )
  }
  return context
}
export const ContainerScroll = ({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  })
  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-[150vh]", className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}
export const ContainerSticky = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("sticky left-0 top-0 w-full overflow-hidden", className)}
    {...props}
  />
))
ContainerSticky.displayName = "ContainerSticky"

export const ProcessCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
))
ProcessCardTitle.displayName = "ProcessCardTitle"

export const ProcessCardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-8 p-6", className)}
    {...props}
  />
))
ProcessCardBody.displayName = "ProcessCardBody"

export const ProcessCard: React.FC<ProcessCardProps> = ({
  className,
  style,
  variant,
  size,
  itemsLength,
  index,
  isVertical,
  children,
  ...props
}) => {
  const { scrollYProgress } = useContainerScrollContext()
  const start = Math.max(0, (index - 0.5) / itemsLength)
  const end = Math.min(1, (index + 0.5) / itemsLength)
  const innerWidth = typeof window !== "undefined" ? window.innerWidth : 1200
  const [ref, { width }] = useMeasure()

  const x = useTransform(
    scrollYProgress,
    [start, end],
    [0, -((width ?? 400) + 24) * index]
  )
  
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [50, 0]
  )

  const opacity = useTransform(
    scrollYProgress,
    [start - 0.1, start, end, end + 0.1],
    [0.4, 1, 1, 0.4]
  )
  
  return (
    <motion.div
      ref={ref}
      style={{
        ...(isVertical ? { y } : { x }),
        opacity,
        ...style,
      }}
      className={cn(processCardVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
ProcessCard.displayName = "ProcessCard"

// Wrapper Process component that renders three example cards
export default function Process() {
  const steps = [
    {
      titleSmall: "Week 1",
      title: "Strategy",
      body:
        "Deep-dive discovery call, brand audit, and a custom content strategy blueprint designed for your goals.",
    },
    {
      titleSmall: "Weeks 2-4",
      title: "Launch",
      body:
        "Content creation ramp-up, profile optimization, and the initial posting schedule goes live.",
    },
    {
      titleSmall: "Weeks 5+",
      title: "Scale",
      body:
        "Data-driven optimization, lead generation activation, and consistent growth momentum.",
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven 90-day system to transform your personal brand from invisible to influential
          </p>
        </div>

        <ContainerScroll>
          <ContainerSticky className="py-20">
              <div className="flex flex-col sm:flex-row gap-8 px-8">
                {steps.map((s, i) => (
                  <ProcessCard key={i} itemsLength={steps.length} index={i} size="md" variant="indigo" isVertical={typeof window !== 'undefined' ? window.innerWidth < 640 : false}>
                  <ProcessCardTitle>
                    <div className="inline-block bg-[#bf1b2c]/10 text-[#bf1b2c] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                      {s.titleSmall}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  </ProcessCardTitle>
                  <ProcessCardBody>
                    <p className="text-gray-600 text-base leading-relaxed">{s.body}</p>
                  </ProcessCardBody>
                </ProcessCard>
              ))}
            </div>
          </ContainerSticky>
        </ContainerScroll>
      </div>
    </section>
  )
}
