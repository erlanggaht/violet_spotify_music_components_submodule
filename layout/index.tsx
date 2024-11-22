"use client";
import React from "react";
import './layout.css'
import HeaderLayout from "./header-layout";

function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section className="layout">
      <div className="header">
        <HeaderLayout />
      </div>
      
      <div className="leftSide">2</div>
     
      <div className="body">{children}</div>
     
      <div className="rightSide">4</div>
     
      <div className="footer">5</div>
    </section>
  );
}

export default Layout;
