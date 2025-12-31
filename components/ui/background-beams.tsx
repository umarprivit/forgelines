"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100",
                className
            )}
        >
            <div className="absolute inset-0 z-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

            <svg
                className="absolute left-0 top-0 h-full w-full pointer-events-none opacity-40 z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 900"
                fill="none"
                preserveAspectRatio="none"
            >
                <path
                    d="M-50 900 C 100 800 400 600 600 200 S 1000 100 1500 0"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    className="animate-pulse"
                />
                <path
                    d="M-50 600 C 200 700 500 400 900 300 S 1300 200 1500 500"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    className="animate-[pulse_4s_ease-in-out_infinite]"
                />
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};
