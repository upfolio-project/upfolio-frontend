import logo from "@/public/logo968x504.png";
import React from "react";

export const DefaultTags = [
    <meta property="og:image" content={logo.src} key="socialNetworkImage"/>,

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
];
