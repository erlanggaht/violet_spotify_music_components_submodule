'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/app/violet_spotify_music_components_submodule/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/violet_spotify_music_components_submodule/avatar'
import { Bell } from 'lucide-react'
import Dot from '@/app/violet_spotify_music_components_submodule/dot'
import MenubarConsumer, { TypeListMenuItem } from '../../menubar/menubar-consumer'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import '../layout.css'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import { Constant_ScreenMediaQuery } from '@/lib/contants'

function HeaderLayout() {
  const screenDesktop = useMediaQuery(Constant_ScreenMediaQuery.desktop)
  const screenTablet = useMediaQuery(Constant_ScreenMediaQuery.tablet)
  const screenMobile = useMediaQuery(Constant_ScreenMediaQuery.mobile)

  if (screenDesktop) {
    return (
      <header className='flex '>
        <div className='flex-grow-0 flex px-4 items-center w-header_left'>
          <TitleHeader />
        </div>

        <div className='flex-grow flex justify-center items-center w-header_center'>
          <div className='relative w-full'>
            <SearchInput />
          </div>
        </div>

        <div className='flex-grow-0 flex items-center  w-header_right'>
          <UserHeader />
        </div>
      </header>
    )
  }

  if (screenTablet) {
    return <header>
      <div className='flex items-center w-full'>
        <UserHeader />
      </div>
      <div className='flex flex-col items-center w-full gap-12 my-12'>
        <TitleHeader />
        <div className='relative w-[640px]'>
          <SearchInput />
        </div>
      </div>

    </header>
  }

  if (screenMobile) {
    return (
      <header className='grid grid-cols-1 w-full gap-y-4'>
        <div className='flex flex-wrap w-full gap-6 justify-between '>
          <TitleHeader />
          <div className='flex gap-2'>
            <SearchInput />
            <UserHeader />
          </div>
        </div>
      </header>
    )
  }

}

export default HeaderLayout;

// TITLE HEADER
const TitleHeader = () => {
  return (
    <div className='flex items-center gap-5'>
      <Image src={'/icon/sound.svg'} alt='sound' width={41} height={43} />
      <h1 className='title-header'>SpotifyMe</h1>
    </div>
  )
}

// SEARCH
const SearchInput = () => {
  const screenMobile = useMediaQuery(Constant_ScreenMediaQuery.mobile)
  const screenTablet = useMediaQuery(Constant_ScreenMediaQuery.tablet)
  const screenDesktop = useMediaQuery(Constant_ScreenMediaQuery.desktop)

  const [value, setValue] = useState('')

  if (screenDesktop || screenTablet) {
    return (
      <>
        <Input
          placeholder='search music, artist, genre'
          className={cn('bg-darkslategrey rounded-search h-[53px] pl-20 text-sm capitalize placeholder:font-medium w-[90%] mx-auto searchInput text-whitegrey', { "w-[120px] mx-0": screenMobile })}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </>
    )
  }

  if (screenMobile) {
    return (
      <>
        <Input
          placeholder='search music, artist, genre'
          className={'bg-darkslategrey rounded-search h-[45px] pl-12 truncate text-sm capitalize placeholder:font-xs searchInputMobile text-whitegrey w-[120px] mx-0'}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </>
    )
  }
}

// User Header
const UserHeader = () => {
  const screenMobile = useMediaQuery('(max-width: 750px)')

  const router = useRouter()
  const { data } = useSession()
  const listMenuItem: TypeListMenuItem = [
    {
      name: "Dashboard",
      seperator: true,
      handleClick: () => router.push('/')
    },
    {
      name: "Settings",
    },
    {
      name: "Logout",
      handleClick: () => signOut()
    }
  ]

  // Variable Profile
  const username = data?.user?.name
  const imageUrl = data?.user?.images?.[0]?.url || 'https://github.com/shadcn.png'
  const imageHeight = data?.user?.images?.[0]?.height || 32
  const imageWidth = data?.user?.images?.[0]?.width || 32
  const typeProduct = data?.user?.product

  if (screenMobile) {
    return (
      <MenubarConsumer listMenuItem={listMenuItem}>
        <div>
          <Avatar height={47} width={47}>
            <AvatarImage src={imageUrl} alt="@shadcn" height={imageHeight} width={imageWidth} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </MenubarConsumer>
    )
  }

  return (
    <MenubarConsumer listMenuItem={listMenuItem}>
      <div className='flex gap-6 w-full'>
        <Avatar height={52} width={52}>
          <AvatarImage src={imageUrl} alt="@shadcn" height={imageHeight} width={imageWidth} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>


        <div className='flex items-center justify-between w-full text-left'>
          <div className='w-full'>
            <h2 className='text-xl capitalize'>{username}</h2>
            <p className='text-xs leading-2 mt-1 text-whitegrey tracking-wider capitalize'>{typeProduct}</p>
          </div>
          <div className='profile-area-icon relative'>
            <Bell width={30} height={28} />
            <Dot height={16} width={16} classNames='base_gradient_background absolute top-2.5 -right-1' />
          </div>
        </div>
      </div>
    </MenubarConsumer>
  )
}