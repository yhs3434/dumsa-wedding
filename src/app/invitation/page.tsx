"use client";

import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { Gowun_Dodum, Crimson_Pro } from "next/font/google";
import { FaChevronDown } from "react-icons/fa";

const gowunDodum = Gowun_Dodum({
    subsets: ["latin"],
    weight: "400",
});

const crimsonPro = Crimson_Pro({
    subsets: ["latin"],
    weight: "400",
});

export default function InvitationPage() {
    const [isGalleryOpen, setIsGalleryOpen] = React.useState<boolean>(false);
    const [timeLeft, setTimeLeft] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    React.useEffect(() => {
        const weddingDate = new Date("2025-11-15T14:30:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

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
                    <article
                        className={styles.galleryImageContainer}
                        style={{
                            height: isGalleryOpen ? undefined : "370px",
                        }}
                    >
                        <Image
                            src="/images/gallery.jpeg"
                            alt="Gallery"
                            width={0} // 필수 props지만 0으로 두고
                            height={0} // 자동 비율 계산
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "12px",
                            }}
                        />
                        {!isGalleryOpen && (
                            <div className={styles.galleryBottomContainer}>
                                <div />
                                <div onClick={() => setIsGalleryOpen(true)}>
                                    <span>더보기</span>
                                    <FaChevronDown />
                                </div>
                            </div>
                        )}
                    </article>
                </section>
                <section className={styles.calendar}>
                    <div className={styles.calendarDate}>
                        <p>2025.11.15</p>
                        <p>토요일 낮 2시 30분</p>
                    </div>

                    <div className="calander_warpper">
                        <table className="calander" id="calander">
                            <thead>
                                <tr>
                                    <th>일</th>
                                    <th>월</th>
                                    <th>화</th>
                                    <th>수</th>
                                    <th>목</th>
                                    <th>금</th>
                                    <th>토</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="cal_tr_td_1">1</td>
                                </tr>
                                <tr>
                                    <td className="cal_tr_td_2">2</td>
                                    <td className="cal_tr_td_3">3</td>
                                    <td className="cal_tr_td_4">4</td>
                                    <td className="cal_tr_td_5">5</td>
                                    <td className="cal_tr_td_6">6</td>
                                    <td className="cal_tr_td_7">7</td>
                                    <td className="cal_tr_td_8">8</td>
                                </tr>
                                <tr>
                                    <td className="cal_tr_td_9">9</td>
                                    <td className="cal_tr_td_10">10</td>
                                    <td className="cal_tr_td_11">11</td>
                                    <td className="cal_tr_td_12">12</td>
                                    <td className="cal_tr_td_13">13</td>
                                    <td className="cal_tr_td_14">14</td>
                                    <td>
                                        <span className="dday">15</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cal_tr_td_16">16</td>
                                    <td className="cal_tr_td_17">17</td>
                                    <td className="cal_tr_td_18">18</td>
                                    <td className="cal_tr_td_19">19</td>
                                    <td className="cal_tr_td_20">20</td>
                                    <td className="cal_tr_td_21">21</td>
                                    <td className="cal_tr_td_22">22</td>
                                </tr>
                                <tr>
                                    <td className="cal_tr_td_23">23</td>
                                    <td className="cal_tr_td_24">24</td>
                                    <td className="cal_tr_td_25">25</td>
                                    <td className="cal_tr_td_26">26</td>
                                    <td className="cal_tr_td_27">27</td>
                                    <td className="cal_tr_td_28">28</td>
                                    <td className="cal_tr_td_29">29</td>
                                </tr>
                                <tr>
                                    <td className="cal_tr_td_30">30</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="dday-wrap">
                        <div className="countdown ft-gowun-bold">
                            <div>
                                <div className="desc">Days</div>
                                <span className="card data-days">
                                    {timeLeft.days}
                                </span>
                            </div>
                            <div>
                                <div className="desc">&nbsp;</div>
                                <span>:</span>
                            </div>
                            <div>
                                <div className="desc">Hour</div>
                                <span className="card data-hour">
                                    {String(timeLeft.hours).padStart(2, "0")}
                                </span>
                            </div>
                            <div>
                                <div className="desc">&nbsp;</div>
                                <span>:</span>
                            </div>
                            <div>
                                <div className="desc">Min</div>
                                <span className="card data-min">
                                    {String(timeLeft.minutes).padStart(2, "0")}
                                </span>
                            </div>
                            <div>
                                <div className="desc">&nbsp;</div>
                                <span>:</span>
                            </div>
                            <div>
                                <div className="desc">Sec</div>
                                <span className="card data-sec">
                                    {String(timeLeft.seconds).padStart(2, "0")}
                                </span>
                            </div>
                        </div>
                        <div className="subTitle v2 f18 call-comment ft-gowun-bold">
                            <p>
                                한솔, 재원의 결혼식이{" "}
                                <span style={{ color: "#b27085" }}>
                                    {timeLeft.days}
                                </span>
                                일 남았습니다.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
