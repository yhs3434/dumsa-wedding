"use client";

import React from "react";
import Image from "next/image";

export default function IntroPage() {
    return (
        <div
            style={{
                width: "100%",
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
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
        </div>
    );
}
