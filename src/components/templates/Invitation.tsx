"use client";

import React from "react";
import Image from "next/image";

type InvitationProps = {
    visible?: boolean;
};

export function Invitation({ visible }: InvitationProps) {
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
            <div>
                <Image
                    src="/images/intro/header.png"
                    alt="Invitation"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </div>
        </div>
    );
}
