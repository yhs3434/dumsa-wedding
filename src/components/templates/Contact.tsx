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
                                        <span></span>
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
                                        <span></span>
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
                                        <span></span>
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
                                        <span></span>
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
                                        <span></span>
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
                                        <span></span>
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
