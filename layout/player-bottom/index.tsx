import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/violet_spotify_music_components_submodule/avatar'
import Image from 'next/image'
import { Slider } from '@/app/violet_spotify_music_components_submodule/slider'
import { Heart, Repeat, Share2, Shuffle, Volume2 } from 'lucide-react'

function PlayerBottom() {
    return (
        <div className='h-24 py-2 px-6 flex items-center gap-16'>
            <div className='flex items-center gap-10'>
                <Avatar height={76} width={76} className='border border-baseviolet'>
                    <AvatarImage src={'https://github.com/shadcn.png'} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div>
                    <h2 className='text-xl'>Memories</h2>
                    <p className='text-sm text-whitegrey'>Marron 5</p>
                </div>
            </div>

            <div className='flex gap-8'>
                <Image src="/icon/prev_play.svg" alt="prev_play" height={20} width={20} />
                <Image src="/icon/prev_speed.svg" alt="prev_speed" height={16} width={16} />
                <div className='base_gradient_background rounded-full py-[18px] px-[18px] relative before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:w-3 before:h-3 before:bg-pause-icon  before:bg-cover before:bg-center before:transform before:-translate-x-1/2 before:-translate-y-1/2' />
                <Image src="/icon/next_speed.svg" alt="next_speed" height={16} width={16} />
                <Image src="/icon/next_play.svg" alt="next_play" height={20} width={20} />
            </div>

            <div className='w-full pl-16 mt-4'>
                <Slider defaultValue={[53]} max={100} step={1} classNameBack="bg-[#464646]" classNameFront='base_gradient_background' />
                <div className='flex  items-center justify-between w-full pt-1'>
                    <p className='text-xs text-whitegrey'>02:10</p>
                    <p className='text-xs text-whitegrey'>01:10</p>
                </div>
            </div>

            <div className='flex items-center  gap-12'>
                <div className='flex items-center gap-4 w-[100px]'>
                    <div><Volume2 height={24} width={24} /></div>
                    <div className='w-full'>
                        <Slider defaultValue={[88]} max={100} step={1} classNameBack="bg-[#464646] h-1" classNameFront='base_gradient_background' />
                    </div>
                </div>
                <div className='flex items-center gap-12 px-4'>
                    <Shuffle height={24} width={24} color='#7A7A7A' />
                    <Repeat height={24} width={24} color='#7A7A7A' />
                    <Heart height={24} width={24} color='#7A7A7A'/>
                    <Share2 height={24} width={24} color='#7A7A7A'/>
                </div>
            </div>
        </div>
    )
}

export default PlayerBottom
