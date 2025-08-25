"use client";

import React from "react";
import Image from "next/image";

type ContactProps = Record<string, never>; // 빈 객체 타입 대신 사용

export function Contact(_props: ContactProps) {
    const handleButtonClick = React.useCallback(() => {
        //
    }, []);

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "36px",
            }}
        >
            <Image
                src="/images/invitation/contact_header.png"
                alt="Invitation"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto",
                }}
            />
            <Image
                src="/images/invitation/contact_name.png"
                alt="Invitation"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: "200px",
                    height: "auto",
                }}
            />
            <Image
                src="/images/invitation/contact_button.png"
                alt="Invitation"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: "180px",
                    height: "auto",
                }}
                onClick={() => {
                    // Handle button click
                }}
            />
        </div>
    );
}
