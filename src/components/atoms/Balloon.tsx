"use client";

import React from "react";
import Image from "next/image";

type BalloonProps = {
    type:
        | "circle_pink"
        | "circle_pink2"
        | "circle_ivory"
        | "heart"
        | "heart_love";
    zIndex?: number;
    highlight?: boolean;
    onClick?: () => void;
};

export function Balloon({ type, zIndex, highlight, onClick }: BalloonProps) {
    return (
        <div
            style={{
                position: "relative",
                zIndex: zIndex,
                width: "100%",
                height: "100%",
            }}
        >
            <Image
                src={`/images/intro/balloon_${type}.png`}
                alt={`${type} balloon`}
                width={0}
                height={0}
                sizes="100vw"
                onClick={onClick}
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    filter: highlight
                        ? "drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 40px rgba(255, 215, 0, 0.6))"
                        : "none",
                    cursor: onClick ? "pointer" : "default",
                }}
            />
        </div>
    );
}
