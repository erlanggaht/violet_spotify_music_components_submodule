import React from 'react'
import Line from '@/app/violet_spotify_music_components_submodule/line'
import Link from 'next/link'
import { Heart, LayoutDashboard, MessageSquareMore, Smartphone, User, Users } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

function Sidebar() {
  return (
    <aside className='mt-14'>
      {/* Menu */}
      <div id='Menu' >
        <TitleSidebarMenu title={"Menu"} />
        <div>
          <ul className='flex flex-col gap-2 mt-8'>
            {sidebarMenuItem?.map((menu, index) => {
              return (
                <div key={index}>
                  <Navlink name={menu.name} iconName={menu.iconName} href={menu.href} prefetch={menu.prefetch} />
                </div>
              )
            })
            }
          </ul>
        </div>
      </div>

      {/* Help */}
      <div id='Help' className='mt-14'>
        <TitleSidebarMenu title={"Help"} />
        <div>
          <ul className='flex flex-col gap-2 mt-8'>
            {sidebarMenuAboutItem?.map((menu, index) => {
              return (
                <div key={index}>
                  <Navlink name={menu.name} iconName={menu.iconName} href={menu.href} prefetch={menu.prefetch} />
                </div>
              )
            })
            }
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;

export type TypeSidebarItem = {
  name: string,
  iconName?: React.ReactElement,
  href?: string,
  prefetch?: boolean
}[]

export const sidebarMenuItem: TypeSidebarItem = [
  {
    name: "Profile",
    iconName: <User width={20} height={20} />,
    href: '/profile'
  },
  {
    name: "Dashboard",
    iconName: <LayoutDashboard width={20} height={20} />,
    href: "/",
    prefetch: true
  },
  {
    name: "Favorite",
    iconName: <Heart width={20} height={20} />
  },
  {
    name: "Live Chat",
    iconName: <MessageSquareMore width={20} height={20} />
  },
  {
    name: "Friends",
    iconName: <Users width={20} height={20} />
  },
  {
    name: "Mobile App",
    iconName: <Smartphone width={20} height={20} />
  }
]

export const sidebarMenuAboutItem: TypeSidebarItem = [
  {
    name: "Settings",
    iconName: <User width={20} height={20} />,
    href: '/settings'
  },
  {
    name: "FAQs",
    iconName: <LayoutDashboard width={20} height={20} />,
    href: "/faqs",
    prefetch: true
  },
]

const TitleSidebarMenu = ({ title }: {
  title: string
}) => {
  return (
    <>
      <h2 className='text-xl text-whitegrey'>{title}</h2>
      <Line className='mt-4' />
    </>
  )
}

const Navlink = ({ name, iconName, href = "#", prefetch }: {
  name?: string,
  iconName?: React.ReactElement,
  href?: string,
  prefetch?: boolean
}) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const classNameActive = isActive ? "base_gradient_background text-white" : ""

  return (
    <Link href={href} className={cn({ "pointer-events-none": isActive })} prefetch={prefetch}>
      <li className={cn('flex items-center gap-6 py-4 px-5 rounded-lg base_gradient_background_hover hover:text-white text-whitegrey', classNameActive)}>
        {iconName ? <span>{iconName}</span> : ""}
        <span>{name}</span>
      </li>
    </Link>
  )
}