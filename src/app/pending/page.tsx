import styles from "./page.module.scss";

export default function PendingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Wedding Invitation</h1>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.weddingInfo}>
                    <div className={styles.dateSection}>
                        <p className={styles.date}>2025년 11월 15일</p>
                        <p className={styles.day}>토요일</p>
                        <p className={styles.time}>오후 2시 30분</p>
                    </div>
                </div>

                <div className={styles.statusSection}>
                    <div className={styles.statusBadge}>
                        <span className={styles.statusText}>OPEN 준비중</span>
                    </div>
                    <p className={styles.message}>
                        소중한 분들을 위한
                        <br />
                        특별한 초대장을 준비하고 있습니다
                    </p>
                </div>

                <div className={styles.loading}>
                    <div className={styles.loadingDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
