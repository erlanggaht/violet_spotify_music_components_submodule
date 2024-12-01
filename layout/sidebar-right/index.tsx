import React, { useEffect, useState } from 'react'
import { EllipsisVertical, Play } from 'lucide-react'
import { ArtistsAPI } from '@/lib/API/artists.api'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/violet_spotify_music_components_submodule/avatar'
import { TopTrackAPI } from '@/lib/API/top-track.api'
import Image from 'next/image'

function SidebarRight() {
  return (
    <aside className='mt-12'>
      {/* Top Artist */}
      <div id='TopArtist' >
        <TitleSidebarMenu title={"Top Artist"} />
        <div className='flex flex-col gap-2 gap-y-7 mt-8'>
          <TopArtists />
        </div>
      </div>

      {/* Recently Played */}
      <div id='RecentlyPlayed' className='mt-14'>
        <TitleSidebarMenu title={"Recently Played"} />
        <div className='flex flex-col gap-2 gap-y-7 mt-8 max-h-56 overflow-auto'>
          <TopTrack />
        </div>
      </div>
    </aside>
  )
}

export default SidebarRight;

export type TypeTopArtist = {
  name: string,
  images?: {
    url: string
  }[],
  genres?: string[],
  popularity?: number,
  followers?: {
    total: number
  }
}[]

export type TypeTopTrack = {
  name: string,
  album?: {
    images: {
      url: string
    }[]
  },
  artists?: {
    name: string
  }[],
}[]

export const TopArtists = () => {
  const [dataArtist, setDataArtist] = useState<TypeTopArtist>([])
  useEffect(() => {
    const getArtist = async () => {
      const response = await ArtistsAPI.getAll({
        params: {
          ids: "374NOHOFF57pYs9QOhuKJq,7Gy1PxqrgsiqWF6JNYPHeB,0f6TyESD8E1mD2oLJ4TGv1,47z98pKd71yIbgXwe9LPVC,7d86ERlvO5UG44j7Va0Y0C"
        }
      })
      setDataArtist(response?.data?.artists)
    }

    getArtist()
  }, [])


  return (
    <>
      {dataArtist?.at(0) && dataArtist.map((artist, index) => {
        return (
          <div key={index} className='w-full flex items-center justify-between'>
            <div className='image-name-follower flex items-center gap-6 ml-4'>
              <Avatar height={44} width={44} className='border border-baseviolet'>
                <AvatarImage src={artist?.images?.[0]?.url} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <h2 className='text-[18px] tracking-wide'>{artist.name}</h2>
                <p className='text-xs text-whitegrey tracking-wide leading-5 '>{(artist?.followers?.total || 0) / 1000} Follower</p>
              </div>
            </div>

            <EllipsisVertical color='#b8b8b8' className='cursor-pointer' />
          </div>
        )
      })}
    </>
  )
}

export const TopTrack = () => {
  const [dataTopTrack, setDataTopTrack] = useState<TypeTopTrack>([])
  useEffect(() => {
    const getTopTrack = async () => {
      const response = await TopTrackAPI.getAll({})
      console.log(response?.data?.items)
      setDataTopTrack(response?.data?.items)
    }

    getTopTrack()
  }, [])

  return <>
  {dataTopTrack?.at(0) && dataTopTrack.map((track, index) => {
    return (
      <div key={index} className='w-full flex items-center justify-between'>
        <div className='image-name-follower flex items-center gap-6 ml-4'>
          <Avatar height={44} width={44} className='border border-baseviolet'>
            <AvatarImage src={track?.album?.images?.[0]?.url} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <h2 className='text-[18px] tracking-wide'>{track.name}</h2>
          </div>
        </div>

        <Image src={'/icon/play.svg'} alt="play" height={16} width={16} className='cursor-pointer'/>
      </div>
    )
  })}
</>
}

const TitleSidebarMenu = ({ title }: {
  title: string
}) => {
  return (
    <>
      <h2 className='text-2xl text-whitegrey'>{title}</h2>
    </>
  )
}
