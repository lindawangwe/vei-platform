"use client";

import dynamic from "next/dynamic";

const ChromeCellsBackground = dynamic(() => import("@/components/ChromeCells"), { ssr: false });

export default ChromeCellsBackground;