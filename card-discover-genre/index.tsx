import Image from 'next/image'
import React from 'react'

function CardDiscoverGenre({title,description} : {
    title: string,
    description: string
}) {
    return (
        <div className='bg-gitar bg-cover bg-center rounded-card h-[269px] w-auto relative'>
            <div className='flex justify-between backdrop-blur-sm bg-white/30 rounded-b-[inherit] absolute bottom-0 left-0 right-0 px-5 py-4'>
                <div>
                    <p className='text-lg font-medium truncate max-w-[230px]'>{title}</p>
                    <p className='text-xs truncate max-w-[230px]'>{description}</p>
                </div>
                <div>
                    <Image src={'/icon/play_round.svg'} alt="play_rounded" width={39} height={39} />
                </div>
            </div>
        </div>
    )
}

export default CardDiscoverGenre
