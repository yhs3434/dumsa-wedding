"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "../atoms";
import styles from "./Contact.module.scss";

type ContactProps = Record<string, never>; // 빈 객체 타입 대신 사용

export function Contact(_props: ContactProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = React.useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = React.useCallback(() => {
        setIsModalOpen(false);
    }, []);

    // 전화 걸기 함수
    const handleCall = React.useCallback((phoneNumber: string) => {
        window.location.href = `tel:${phoneNumber}`;
    }, []);

    // 문자 보내기 함수
    const handleSMS = React.useCallback((phoneNumber: string) => {
        window.location.href = `sms:${phoneNumber}`;
    }, []);

    // 전화 아이콘 컴포넌트
    const PhoneIcon = () => (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59544 1.99532 8.06428 2.16718 8.43238 2.48363C8.80047 2.80008 9.04518 3.23954 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2074 21.5265 15.5792C21.8437 15.9511 22.0122 16.4234 22 16.92Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="white"
            />
        </svg>
    );

    // 문자 아이콘 컴포넌트
    const MessageIcon = () => (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="white"
            />
        </svg>
    );

    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "36px",
                }}
            >
                <Image
                    src="/images/invitation/contact_header.png"
                    alt="Invitation"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
                <Image
                    src="/images/invitation/contact_name.png"
                    alt="Invitation"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "200px",
                        height: "auto",
                    }}
                />
                <Image
                    src="/images/invitation/contact_button.png"
                    alt="Invitation"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "180px",
                        height: "auto",
                        cursor: "pointer",
                    }}
                    onClick={handleButtonClick}
                />
            </div>

            {/* 모달 */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div
                    style={{
                        width: "100vw",
                        height: "90vh",
                        padding: "0",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                    }}
                >
                    {/* 상단 헤더 */}
                    <div
                        style={{
                            position: "absolute",
                            top: "20px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            textAlign: "center",
                            zIndex: 1,
                        }}
                    >
                        <p
                            style={{
                                margin: "0 0 8px 0",
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#aaa",
                            }}
                        >
                            CONTACT
                        </p>
                        <p
                            style={{
                                margin: "0",
                                fontSize: "28px",
                                color: "#fff",
                                fontWeight: "bold",
                            }}
                        >
                            연락하기
                        </p>
                    </div>

                    {/* 테이블 컨테이너 */}
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "0",
                            right: "0",
                            transform: "translateY(-50%)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "40px",
                            padding: "0 20px",
                        }}
                    >
                        <table className={styles.contact_table}>
                            <thead>
                                <tr>
                                    <td colSpan={3} align="left">
                                        <span>신랑측</span>
                                        <span>GROOM</span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td align="left">
                                        <span>신랑</span>
                                    </td>
                                    <td align="center">
                                        <span>윤한솔</span>
                                    </td>
                                    <td align="right">
                                        <div className={styles.contact_buttons}>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleCall("010-0000-0000")
                                                }
                                                title="전화 걸기"
                                            >
                                                <PhoneIcon />
                                            </button>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleSMS("010-0000-0000")
                                                }
                                                title="문자 보내기"
                                            >
                                                <MessageIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <span>신랑 아버지</span>
                                    </td>
                                    <td align="center">
                                        <span>윤철호</span>
                                    </td>
                                    <td align="right">
                                        <div className={styles.contact_buttons}>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleCall("010-0000-0000")
                                                }
                                                title="전화 걸기"
                                            >
                                                <PhoneIcon />
                                            </button>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleSMS("010-0000-0000")
                                                }
                                                title="문자 보내기"
                                            >
                                                <MessageIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <span>신랑 어머니</span>
                                    </td>
                                    <td align="center">
                                        <span>노명란</span>
                                    </td>
                                    <td align="right">
                                        <div className={styles.contact_buttons}>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleCall("010-0000-0000")
                                                }
                                                title="전화 걸기"
                                            >
                                                <PhoneIcon />
                                            </button>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleSMS("010-0000-0000")
                                                }
                                                title="문자 보내기"
                                            >
                                                <MessageIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles.contact_table}>
                            <thead>
                                <tr>
                                    <td colSpan={3} align="left">
                                        <span>신부측</span>
                                        <span>BRIDE</span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td align="left">
                                        <span>신부</span>
                                    </td>
                                    <td align="center">
                                        <span>김재원</span>
                                    </td>
                                    <td align="right">
                                        <div className={styles.contact_buttons}>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleCall("010-0000-0000")
                                                }
                                                title="전화 걸기"
                                            >
                                                <PhoneIcon />
                                            </button>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleSMS("010-0000-0000")
                                                }
                                                title="문자 보내기"
                                            >
                                                <MessageIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <span>신부 아버지</span>
                                    </td>
                                    <td align="center">
                                        <span>김기동</span>
                                    </td>
                                    <td align="right">
                                        <div className={styles.contact_buttons}>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleCall("010-0000-0000")
                                                }
                                                title="전화 걸기"
                                            >
                                                <PhoneIcon />
                                            </button>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleSMS("010-0000-0000")
                                                }
                                                title="문자 보내기"
                                            >
                                                <MessageIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <span>신부 어머니</span>
                                    </td>
                                    <td align="center">
                                        <span>이미정</span>
                                    </td>
                                    <td align="right">
                                        <div className={styles.contact_buttons}>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleCall("010-0000-0000")
                                                }
                                                title="전화 걸기"
                                            >
                                                <PhoneIcon />
                                            </button>
                                            <button
                                                className={
                                                    styles.contact_button
                                                }
                                                onClick={() =>
                                                    handleSMS("010-0000-0000")
                                                }
                                                title="문자 보내기"
                                            >
                                                <MessageIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>
        </>
    );
}
