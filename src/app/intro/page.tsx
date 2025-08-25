"use client";

import React from "react";
import { Intro, Balloon, Invitation } from "@/components/templates";

export default function IntroPage() {
    const [currentPage, setCurrentPage] = React.useState<
        "intro" | "invitation"
    >("intro");

    React.useEffect(() => {
        //
    }, []);

    return (
        <div
            style={{
                width: "100%",
            }}
        >
            <Intro visible={currentPage === "intro"} />
            <Invitation visible={currentPage === "invitation"} />
        </div>
    );
}
