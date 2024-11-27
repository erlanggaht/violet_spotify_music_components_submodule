"use client";
import React from "react";
import './layout.css'
import SidebarLeft from "@/app/violet_spotify_music_components_submodule/layout/sidebar-left";
import SidebarRight from "@/app/violet_spotify_music_components_submodule/layout/sidebar-right";
import PlayerBottom from "./player-bottom";
import dynamic from "next/dynamic";
const HeaderLayout = dynamic(() => import('./header-layout'), { ssr: false });

function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <section className="layout">
        <div className='sticky top-0 backdrop-blur rounded-lg pt-[20px] z-50 w-full header'>
          <HeaderLayout />
        </div>

        <div className="leftSide">
          <SidebarLeft />
        </div>

        <div className="body">{children}</div>

        <div className="rightSide">
          <SidebarRight />
        </div>

      </section>
      <div className="footer fixed bottom-0 left-14 right-10">
        <PlayerBottom />
      </div>
    </>
  );
}

export default Layout;
