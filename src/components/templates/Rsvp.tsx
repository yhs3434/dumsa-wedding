"use client";

import React from "react";
import Image from "next/image";

type RsvpProps = Record<string, never>; // 빈 객체 타입 대신 사용

export function Rsvp(_props: RsvpProps) {
    return (
        <div
            style={{
                width: "100%",
            }}
        >
            <Image
                src="/images/invitation/rsvp.png"
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
    );
}
