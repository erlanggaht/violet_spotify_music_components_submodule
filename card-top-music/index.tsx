import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/violet_spotify_music_components_submodule/avatar'
import Image from 'next/image'

export default function CardTopMusic({ textNumber }: {
  textNumber: string
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-md ">
      <div className="flex items-center gap-4">
        <span className="text-3xl font-medium text-whitegrey">{textNumber}</span>
        <Avatar height={58} width={58} className='border-2 border-baseviolet ml-6'>
          <AvatarImage src={'https://i.scdn.co/image/ab6761610000e5eb452b9a9c2f500c12c3457593'} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-base font-medium text-whitegrey px-6">Taylor Swift - Anti Hero</span>
      </div>
      <div className="flex items-center gap-16">
        <span className="text-base font-medium text-whitegrey">04:20</span>
        <Image alt='vibration' height={24} width={24} src={'/icon/vibration.svg'} />
        <button className="w-6 h-6 flex items-center justify-center text-white">
          <Image src={'/icon/play.svg'} alt="play" height={16} width={16} className='cursor-pointer' />
        </button>
      </div>
    </div>
  )
}
