import { cn } from '@/lib/utils'
import React from 'react'

function Dot({ height = 25, width = 25, color = "#bbb", classNames }: {
    height?: number,
    width?: number,
    color?:string,
    classNames?: string
}) {
    return <span className={cn('dot rounded-dot inline-block shadow',  `bg-[${color}]`, classNames)} style={{ height: height, width: width, }} />
}

export default Dot
