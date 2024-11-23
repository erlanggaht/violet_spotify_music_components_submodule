import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/app/violet_spotify_music_components_submodule/menubar"
import { cn } from '@/lib/utils'

function MenubarConsumer({ children, listMenuItem = [] }: {
    children?: React.ReactNode,
    listMenuItem?: TypeListMenuItem
}) {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className={cn({ 'cursor-pointer': listMenuItem?.at(0) })}>{children ?? "Menu"}</MenubarTrigger>
                {listMenuItem?.at(0) &&
                    <MenubarContent className='data-[state=open]:bg-darkslategrey border-0 shadow-sm shadow-darkslategrey data-[state=open]:text-whitegrey ' >
                        {listMenuItem?.at(0) && listMenuItem?.map((item, index) => {
                            return <div key={index}>
                                <MenubarItem onClick={item?.handleClick} className='base_gradient_background_hover hover:text-white'>{item.name}</MenubarItem>
                                {item.seperator && index !== (listMenuItem.length - 1) && <MenubarSeparator className='bg-whitegrey opacity-30' />}
                            </div>
                        })}
                    </MenubarContent>
                }
            </MenubarMenu>
        </Menubar>
    )
}

export default MenubarConsumer

export type TypeListMenuItem = {
    name: string,
    seperator?: boolean,
    handleClick?: () => void
}[]