"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./page.module.scss";

export default function App() {
    const router = useRouter();

    useEffect(() => {
        // router.replace("/invitation");
        router.replace("/pending");
    }, [router]);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.activityIndicator}>
                    <div className={styles.spinner}>
                        <div className={styles.dot1}></div>
                        <div className={styles.dot2}></div>
                        <div className={styles.dot3}></div>
                    </div>
                    <p className={styles.loadingText}>
                        초대장을 불러오는 중...
                    </p>
                </div>
            </div>
        </div>
    );
}
