import styles from "./page.module.scss";
import Image from "next/image";
import { Gowun_Dodum } from "next/font/google";

const gowunDodum = Gowun_Dodum({
    subsets: ["latin"],
    weight: "400",
});

export default function InvitationPage() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <section className={styles.intro}>
                    <Image
                        src="/images/top.jpg"
                        alt="Wedding Invitation"
                        layout="responsive"
                        width={0} // 필수 props지만 0으로 두고
                        height={0} // 자동 비율 계산
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </section>

                <section className={styles.welcome}>
                    <article className={styles.welcomeTitle}>
                        <h2 className={styles.subtitle}>You're Invited!</h2>
                        <p className={styles.description}>
                            Join us for a beautiful wedding celebration.
                        </p>
                    </article>
                    <article className={gowunDodum.className}>
                        <p>서툰 마음으로 만난 두 사람이</p>
                        <p>사랑을 배우며 함께 자라났습니다.</p>
                        <p>이제 부부라는 이름으로 같은 길을 걸으려 합니다.</p>
                        <p>첫 걸음에 따뜻한 축복을 보태주세요.</p>
                    </article>
                </section>
                <section className={styles.contact}>
                    <p>test</p>
                </section>
            </div>
        </main>
    );
}
