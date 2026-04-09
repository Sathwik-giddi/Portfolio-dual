"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TilesProps {
    className?: string
    rows?: number
    cols?: number
    tileClassName?: string
    tileSize?: "sm" | "md" | "lg"
}

const tileSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9 md:w-12 md:h-12",
    lg: "w-12 h-12 md:w-16 md:h-16",
}

export function Tiles({
    className,
    rows = 100,
    cols = 20,
    tileClassName,
    tileSize = "md",
}: TilesProps) {
    const rowsArray = new Array(rows).fill(1)
    const colsArray = new Array(cols).fill(1)

    return (
        <div
            className={cn(
                "relative z-0 flex w-full h-full justify-center opacity-50 pointer-events-none", // Reduced opacity and pointer-events-none on container
                className
            )}
        >
            {/* We need pointer-events-auto on the tiles themselves if we want them to be interactive, 
            but the container should let clicks through if it covers everything. 
            However, the requirement is background. 
            If it's background, user usually can't hover it if content is on top.
            But the demo implies interaction. 
            I will set pointer-events-auto on the wrapper div inside layout, and z-index low.
        */}
            {rowsArray.map((_, i) => (
                <motion.div
                    key={`row-${i}`}
                    className={cn(
                        tileSizes[tileSize],
                        "border-l dark:border-neutral-900 border-tines-violet/5 relative", // Subtler border
                        tileClassName
                    )}
                >
                    {colsArray.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: `var(--tile)`,
                                transition: { duration: 0 }
                            }}
                            animate={{
                                transition: { duration: 2 }
                            }}
                            key={`col-${j}`}
                            className={cn(
                                tileSizes[tileSize],
                                "border-r border-t dark:border-neutral-900 border-tines-violet/5 relative pointer-events-auto", // Subtler border + pointer events
                                tileClassName
                            )}
                        />
                    ))}
                </motion.div>
            ))}
        </div>
    )
}
