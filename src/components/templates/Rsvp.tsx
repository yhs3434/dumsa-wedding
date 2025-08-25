"use client";

import React from "react";
import Image from "next/image";

type RsvpProps = Record<string, never>; // 빈 객체 타입 대신 사용

export function Rsvp(_props: RsvpProps) {
    const handleButtonClick = React.useCallback(() => {
        // 버튼 클릭 시 동작할 코드 작성
    }, []);

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "28px",
            }}
        >
            <Image
                src="/images/invitation/rsvp_title.png"
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
                src="/images/invitation/rsvp_message.png"
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
                src="/images/invitation/rsvp_button.png"
                alt="Invitation"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: "190px",
                    height: "auto",
                }}
                onClick={handleButtonClick}
            />
        </div>
    );
}
