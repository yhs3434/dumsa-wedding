"use client";

import styles from "./page.module.scss";
import { Gowun_Dodum } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";

const gowunDodum = Gowun_Dodum({
    subsets: ["latin"],
    weight: "400",
});

export default function PendingPage() {
    const router = useRouter();

    const handlePreviewClick = () => {
        router.push("/intro");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.hero}>
                    <h1
                        className={`${styles.mainTitle} ${gowunDodum.className}`}
                    >
                        한솔 & 재원
                    </h1>
                    <div className={styles.subtitle}>
                        <p className={gowunDodum.className}>
                            우리가 함께 걸어갈 새로운 시작
                        </p>
                    </div>
                </div>

                <div className={styles.weddingDate}>
                    <div className={styles.dateText}>
                        <span className={styles.year}>2025</span>
                        <span className={styles.monthDay}>11.15</span>
                        <span className={styles.dayTime}>토요일 오후 2:30</span>
                    </div>
                </div>

                <div className={styles.statusMessage}>
                    <div className={styles.preparingText}>
                        <p className={gowunDodum.className}>
                            소중한 분들을 위한
                        </p>
                        <p className={gowunDodum.className}>
                            특별한 초대장을 준비하고 있습니다
                        </p>
                    </div>

                    <div className={styles.comingSoon}>
                        <span>COMING SOON</span>
                    </div>
                </div>

                <div className={styles.previewSection}>
                    <button
                        className={`${styles.previewButton} ${gowunDodum.className}`}
                        onClick={handlePreviewClick}
                    >
                        작업중인 화면 구경하기
                    </button>
                </div>

                <div className={styles.loadingIndicator}>
                    <div className={styles.dots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
