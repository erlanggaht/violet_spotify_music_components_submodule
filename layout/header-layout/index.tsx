'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/app/violet_spotify_music_components_submodule/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/violet_spotify_music_components_submodule/avatar'
import { Bell } from 'lucide-react'
import Dot from '@/app/violet_spotify_music_components_submodule/dot'
import MenubarConsumer, { TypeListMenuItem } from '../../menubar/menubar-consumer'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

function HeaderLayout() {
  return (
    <header className='flex w-full'>
      <div className='flex-grow-0 flex px-4 items-center w-header_left'>
        <TitleHeader />
      </div>

      <div className='flex-grow flex justify-center items-center pr-20'>
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
  const [value, setValue] = useState('')
  return (
    <>
      <Image src={'/icon/search.svg'} alt='sound' width={22} height={22} className='absolute top-4 left-5' />
      <Input
        placeholder='search music, artist, genre'
        className='bg-darkslategrey rounded-search h-[53px] pl-16 text-sm capitalize placeholder:font-medium'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </>
  )
}

// User Header
const UserHeader = () => {
  const router = useRouter()
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

  return (
    <MenubarConsumer listMenuItem={listMenuItem}>
      <div className='flex gap-6 w-full'>
        <Avatar height={52} width={52}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>


        <div className='flex items-center justify-between w-full text-left'>
          <div className='w-full'>
            <h2 className='text-xl'>Tarisa</h2>
            <p className='text-xs leading-2 mt-1 text-whitegrey tracking-wider'>Blog Premium</p>
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