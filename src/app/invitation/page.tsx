"use client";

import React from "react";
import { Invitation } from "@/components/templates";

export default function InvitationPage() {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
            }}
        >
            <Invitation visible={true} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 200,
                    paddingBottom: 200,
                }}
            >
                작업중...
            </div>
        </div>
    );
}
