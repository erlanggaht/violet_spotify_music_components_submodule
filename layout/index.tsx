"use client";
import React from "react";
import './layout.css'
import HeaderLayout from "@/app/violet_spotify_music_components_submodule/layout/header-layout";
import SidebarLeft from "@/app/violet_spotify_music_components_submodule/layout/sidebar-left";
import SidebarRight from "@/app/violet_spotify_music_components_submodule/layout/sidebar-right";

function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section className="layout">
      <div className="header sticky top-0 backdrop-blur rounded-lg mt-[20px] z-50">
        <HeaderLayout />
      </div>

      <div className="leftSide">
        <SidebarLeft />
      </div>

      <div className="body">{children}</div>

      <div className="rightSide">
        <SidebarRight />
      </div>

      <div className="footer">5</div>
    </section>
  );
}

export default Layout;
