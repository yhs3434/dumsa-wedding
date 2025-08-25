"use client";

import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
    const [mounted, setMounted] = useState(false);

    // 클라이언트 사이드에서만 포털을 사용하기 위한 상태
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // 스크롤 방지
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // ESC 키로 닫기
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    // 배경 클릭 시 닫기
    const handleBackdropClick = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        },
        [onClose]
    );

    // 모달이 열려있지 않거나 클라이언트가 아니면 렌더링하지 않음
    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경
                backdropFilter: "blur(8px)", // 블러 효과
                WebkitBackdropFilter: "blur(8px)", // Safari 지원
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
            }}
            onClick={handleBackdropClick}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onClick={(e) => e.stopPropagation()} // 클릭 이벤트 전파 방지
            >
                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "none",
                        border: "none",
                        fontSize: "40px",
                        cursor: "pointer",
                        color: "#fff",
                        padding: "4px",
                        borderRadius: "4px",
                        transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#666";
                    }}
                >
                    ×
                </button>

                {/* 모달 컨텐츠 */}
                {children}
            </div>
        </div>
    );

    // Portal을 사용하여 document.body에 직접 렌더링
    return createPortal(modalContent, document.body);
}
