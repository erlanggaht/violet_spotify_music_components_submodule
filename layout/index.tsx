"use client";
import React from "react";
import './layout.css'
import SidebarLeft from "@/app/violet_spotify_music_components_submodule/layout/sidebar-left";
import SidebarRight from "@/app/violet_spotify_music_components_submodule/layout/sidebar-right";
import PlayerBottom from "./player-bottom";
import dynamic from "next/dynamic";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/violet_spotify_music_components_submodule/sheet/index"
import { Button } from "../button";
import { Menu } from "lucide-react";
import DetectMediaQuery from "@/lib/helper/detect-media-query";
const HeaderLayout = dynamic(() => import('./header-layout'), { ssr: false });

function Layout({ children }: {
  children: React.ReactNode
}) {
  const isDesktop = DetectMediaQuery("desktop")

  return (
    <>

      {/* Menu Mobile */}
      {!isDesktop && <MenuSheet />}

      <section className="layout">
        <div className='sticky top-0 backdrop-blur rounded-lg pt-[10px] z-50 w-full header mb-14'>
          <HeaderLayout />
        </div>

        {isDesktop &&
          <div className="leftSide">
            <SidebarLeft />
          </div>
        }

        <div className="body">{children}</div>

        {isDesktop &&
          <div className="rightSide">
            <SidebarRight />
          </div>
        }


      </section>
      <div className="footer fixed bottom-0 left-14 right-10">
        <PlayerBottom />
      </div>
    </>
  );
}

export default Layout;


const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className='fixed w-[51px] h-[51px] top-[21px] left-7 z-[100] bg-red-500'>
        <Menu className="bg-transparent text-transparent" />
      </SheetTrigger>
      <SheetContent side={'left'} className="bg-background border-0">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <SidebarLeft />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}