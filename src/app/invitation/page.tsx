import styles from "./page.module.scss";
import Image from "next/image";
import { Gowun_Dodum, Crimson_Pro } from "next/font/google";

const gowunDodum = Gowun_Dodum({
    subsets: ["latin"],
    weight: "400",
});

const crimsonPro = Crimson_Pro({
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
                    <article className={styles.sectionTitle}>
                        <p className={crimsonPro.className}>INVITATION</p>
                        <p className={gowunDodum.className}>
                            소중한 분들을 초대합니다
                        </p>
                    </article>
                    <article
                        className={`${styles.welcomeMessage} ${gowunDodum.className}`}
                    >
                        <p>서툰 마음으로 만난 두 사람이</p>
                        <p>사랑을 배우며 함께 자라났습니다.</p>
                        <p>이제 부부라는 이름으로 같은 길을 걸으려 합니다.</p>
                        <p>첫 걸음에 따뜻한 축복을 보태주세요.</p>
                    </article>
                </section>
                <section className={styles.contact}>
                    <Image
                        src="/images/contact.jpeg"
                        alt="Contact Information"
                        layout="responsive"
                        width={0} // 필수 props지만 0으로 두고
                        height={0} // 자동 비율 계산
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "12px",
                        }}
                    />
                    <article
                        className={`${styles.contactName} ${gowunDodum.className}`}
                    >
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>{`윤철호·노명란`}</span>
                                    </td>
                                    <td>
                                        <span>의 아들</span>
                                    </td>
                                    <td>
                                        <span>{`윤한솔`}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>{`김기동·이미정`}</span>
                                    </td>
                                    <td>
                                        <span>{"의 딸"}</span>
                                    </td>
                                    <td>
                                        <span>{`김재원`}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <button>📞 연락하기</button>
                </section>
                <section className={styles.interview}>
                    <article className={styles.sectionTitle}>
                        <p className={crimsonPro.className}>INTERVIEW</p>
                        <p className={gowunDodum.className}>
                            우리 두 사람의 이야기
                        </p>
                    </article>
                    <article>
                        <p>결혼을 앞두고 저희 두 사람의</p>
                        <p>인터뷰를 준비했습니다.</p>
                    </article>
                    <div className={styles.profileContainer}>
                        <Image
                            src="/images/sol.jpeg"
                            alt="Interview"
                            width={0} // 필수 props지만 0으로 두고
                            height={0} // 자동 비율 계산
                            sizes="100vw"
                            style={{
                                width: "40%",
                                height: "auto",
                                borderRadius: "12px",
                            }}
                        />
                        <Image
                            src="/images/goom.jpeg"
                            alt="Interview"
                            width={0} // 필수 props지만 0으로 두고
                            height={0} // 자동 비율 계산
                            sizes="100vw"
                            style={{
                                width: "40%",
                                height: "auto",
                                borderRadius: "12px",
                            }}
                        />
                    </div>
                    <button>✉️ 신랑&신부의 인터뷰 읽어보기</button>
                </section>
                <section className={styles.gallery}>
                    <article className={styles.sectionTitle}>
                        <p className={crimsonPro.className}>GALLERY</p>
                        <p className={gowunDodum.className}>웨딩 갤러리</p>
                    </article>
                </section>
            </div>
        </main>
    );
}
