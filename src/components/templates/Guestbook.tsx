"use client";

import React from "react";
import Image from "next/image";

type GuestbookProps = Record<string, never>; // 빈 객체 타입 대신 사용

export function Guestbook(_props: GuestbookProps) {
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
                gap: "40px",
            }}
        >
            <Image
                src="/images/invitation/guestbook_main.png"
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
                src="/images/invitation/guestbook_button.png"
                alt="Invitation"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: "148px",
                    height: "auto",
                }}
                onClick={handleButtonClick}
            />
        </div>
    );
}
