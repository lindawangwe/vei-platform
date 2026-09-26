"use client";

import dynamic from "next/dynamic";


export const Globe = dynamic(() => import("./Globe"), { ssr: false });
export const ChromeCells = dynamic(() => import("./ChromeCells"), { ssr: false });
export const NeonBorder = dynamic(() => import("./NeonBorder"), { ssr: false });
export const TactileButton = dynamic(() => import("./TactileButton"), { ssr: false });
export const ServiceBackground = dynamic(() => import("./ServiceBackground"), { ssr: false });