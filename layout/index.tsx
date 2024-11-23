"use client";
import React from "react";
import './layout.css'
import HeaderLayout from "./header-layout";
import SidebarLeft from "./sidebar-left";

function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section className="layout">
      <div className="header sticky top-0 backdrop-blur rounded-lg mt-[20px]">
        <HeaderLayout />
      </div>
      
      <div className="leftSide">
        <SidebarLeft />
      </div>
     
      <div className="body">{children}</div>
     
      <div className="rightSide">4</div>
     
      <div className="footer">5</div>
    </section>
  );
}

export default Layout;
