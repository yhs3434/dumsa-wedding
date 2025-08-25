import React from "react";
import Image from "next/image";

type FinalProps = {
    //
};

export function Final(props: FinalProps) {
    return (
        <div
            style={{
                width: "100%",
            }}
        >
            <Image
                src="/images/invitation/final.png"
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
