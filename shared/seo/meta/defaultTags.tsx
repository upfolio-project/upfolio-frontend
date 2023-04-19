import logo from "@/public/logo968x504.png";
import React from "react";

export const DefaultTags = [
    <link key="favicon" rel="shortcut icon" href="/favicon.ico" sizes="any" type="image/x-icon"/>,
    <link key="icon" rel="icon" href="/favicon.svg" type="image/svg+xml"/>,
    <link key="maskIcon" rel="mask-icon" href="/favicon.svg" color="#bbf077"/>,
    <link key="appleTouchIcon" rel="apple-touch-icon" href="/apple-touch-icon.png"/>,
    <link key="manifest" rel="manifest" href="/manifest.webmanifest"/>,


    <meta name="title" content="UpFolio" key="title"/>,
    <meta name="description"
          key="description"
          content="UpFolio — платформа, которая позволяет соискателям находить работу, а работодателям — работников или стажеров."/>,
    <meta property="og:title" content="UpFolio" key="socialNetworkTitle"/>,
    <meta property="og:site_name" content="Платформа для вашего диджитал-портфолио"
          key="socialNetworkSiteName"/>,
    <meta property="og:description"
          content="UpFolio — платформа, которая позволяет соискателям находить работу, а работодателям — работников или стажеров."
          key="socialNetworkDescription"/>,
    <meta property="og:type" content="website" key="socialNetworkType"/>,
    <meta property="og:url" content="https://upfolio.ru"
          key="socialNetworkUrl"/>,
    <meta property="og:image" content={logo.src} key="socialNetworkImage"/>,
];
