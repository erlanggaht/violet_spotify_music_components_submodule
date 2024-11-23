import { cn } from '@/lib/utils'
import React from 'react'

function Line({ className, ...props }: {
    className?: string
}) {
    return <div className={cn("w-full h-[1px] base_gradient_background", className)} {...props} />

}

export default Line
