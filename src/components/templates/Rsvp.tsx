import React from "react";
import Image from "next/image";

type RsvpProps = {
    //
};

export function Rsvp(props: RsvpProps) {
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
