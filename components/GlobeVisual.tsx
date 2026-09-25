"use client";

import dynamic from "next/dynamic";

const GlobeVisual = dynamic(() => import("@/components/Globe"), { ssr: false });

export default GlobeVisual;