"use client";

import React from "react";
import { Intro, BalloonMask, Invitation } from "@/components/templates";

export default function IntroPage() {
    const [currentPage, setCurrentPage] = React.useState<
        "intro" | "invitation"
    >("intro");

    React.useEffect(() => {
        const handleClick = () => {
            if (currentPage === "intro") {
                setCurrentPage("invitation");
            }
        };

        // 클릭 이벤트 리스너 추가
        document.addEventListener("click", handleClick);

        // 클린업 함수: 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [currentPage]);

    return (
        <div
            style={{
                width: "100%",
            }}
        >
            <Intro visible={currentPage === "intro"} />
            <Invitation visible={currentPage === "invitation"} />
            <BalloonMask visible={currentPage === "invitation"} />
        </div>
    );
}
