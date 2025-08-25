"use client";

import React from "react";
import Image from "next/image";

type IntroProps = {
    visible?: boolean;
};

export function Intro({ visible }: IntroProps) {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
            }}
        >
            <div
                style={{
                    width: "100%",
                }}
            >
                <Image
                    src="/images/intro/card.png"
                    alt="A beautiful wedding"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                }}
            >
                <Image
                    src="/images/intro/silling.png"
                    alt="A beautiful flower"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </div>
    );
}
