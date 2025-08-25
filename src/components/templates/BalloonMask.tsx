"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import { Balloon } from "../atoms";

type BalloonMaskProps = {
    visible?: boolean;
};

type BalloonType =
    | "circle_pink"
    | "circle_pink2"
    | "circle_ivory"
    | "heart"
    | "heart_love";

interface RandomBalloon {
    id: number;
    type: BalloonType;
    left: number;
    top: number;
    size: number;
    animationDuration: number;
    animationDelay: number;
    zIndex: number;
    popped: boolean;
}

interface ConfettiEffect {
    id: number;
    left: number;
    top: number;
    animationData?: object;
}

export function BalloonMask({ visible }: BalloonMaskProps) {
    const router = useRouter();
    const [poppedBalloons, setPoppedBalloons] = useState<Set<number>>(
        new Set()
    );
    const [confettiEffects, setConfettiEffects] = useState<ConfettiEffect[]>(
        []
    );
    const [allHeartLovePopped, setAllHeartLovePopped] = useState(false);
    const [confettiData, setConfettiData] = useState<object | null>(null);

    // confetti 애니메이션 데이터 로드
    useEffect(() => {
        const loadConfettiData = async () => {
            try {
                const response = await fetch("/images/intro/confetti.json");
                const data = await response.json();
                setConfettiData(data);
            } catch (error) {
                console.error("Failed to load confetti animation:", error);
            }
        };
        loadConfettiData();
    }, []);

    const balloons = useMemo(() => {
        const regularTypes: BalloonType[] = [
            "circle_pink",
            "circle_pink2",
            "circle_ivory",
            "heart",
        ];
        const result: RandomBalloon[] = [];

        // heart_love 풍선 4개만 생성 (하이라이팅 적용)
        for (let i = 0; i < 4; i++) {
            result.push({
                id: i,
                type: "heart_love",
                left: Math.random() * 60 + 10, // 10% ~ 70% 범위 (뷰포트 안에 확실히 위치)
                top: Math.random() * 60 + 10, // 10% ~ 70% 범위 (뷰포트 안에 확실히 위치)
                size: Math.random() * 15 + 35, // 35-50% 크기 (더 크게)
                animationDuration: Math.random() * 10 + 25, // 25-35초 (천천히)
                animationDelay: Math.random() * 5, // 0-5초 지연 (빨리 등장)
                zIndex: Math.floor(Math.random() * 3) + 18, // 18-20 (최상단)
                popped: false,
            });
        }

        // 일반 풍선들 대폭 감소 (50-80개)
        const regularBalloonCount = Math.floor(Math.random() * 31) + 50; // 50-80개
        for (let i = 4; i < regularBalloonCount + 4; i++) {
            const randomType =
                regularTypes[Math.floor(Math.random() * regularTypes.length)];
            result.push({
                id: i,
                type: randomType,
                left: Math.random() * 90 - 10, // -10% ~ 90% 범위 (화면 좌우 밖까지)
                top: Math.random() * 90 - 10, // -10% ~ 90% 범위 (화면 위아래 밖까지)
                size: Math.random() * 10 + 30, // 30-40% 크기 (크게)
                animationDuration: Math.random() * 20 + 20, // 20-40초 (더 천천히)
                animationDelay: Math.random() * 10, // 0-10초 지연
                zIndex: Math.floor(Math.random() * 8) + 1, // 1-8
                popped: false,
            });
        }

        return result;
    }, []);

    // 풍선 클릭 핸들러
    const handleBalloonClick = useCallback(
        (balloonId: number, left: number, top: number) => {
            if (!visible) return; // visible이 false면 클릭 이벤트 무시

            setPoppedBalloons((prev) => new Set([...prev, balloonId]));

            // confetti 효과 추가
            if (confettiData) {
                const newConfetti: ConfettiEffect = {
                    id: Date.now() + Math.random(),
                    left: left,
                    top: top,
                    animationData: confettiData,
                };
                setConfettiEffects((prev) => [...prev, newConfetti]);

                // 3초 후 confetti 제거
                setTimeout(() => {
                    setConfettiEffects((prev) =>
                        prev.filter((c) => c.id !== newConfetti.id)
                    );
                }, 3000);
            }
        },
        [confettiData, visible]
    );

    // heart_love 풍선이 모두 터졌는지 체크
    useEffect(() => {
        const heartLoveBalloons = balloons.filter(
            (b) => b.type === "heart_love"
        );
        const poppedHeartLove = heartLoveBalloons.filter((b) =>
            poppedBalloons.has(b.id)
        );

        if (
            heartLoveBalloons.length === poppedHeartLove.length &&
            heartLoveBalloons.length > 0
        ) {
            if (!allHeartLovePopped) {
                setAllHeartLovePopped(true);
                // 모든 일반 풍선들 터뜨리기
                setTimeout(() => {
                    const allBalloonIds = balloons.map((b) => b.id);
                    setPoppedBalloons(new Set(allBalloonIds));

                    // 페이지 전체를 덮는 큰 confetti 효과 하나만 실행
                    if (confettiData) {
                        const bigConfetti: ConfettiEffect = {
                            id: Date.now() + Math.random(),
                            left: 50, // 화면 중앙
                            top: 50, // 화면 중앙
                            animationData: confettiData,
                        };

                        setConfettiEffects((prev) => [...prev, bigConfetti]);

                        // 3초 후 confetti 제거
                        setTimeout(() => {
                            setConfettiEffects((prev) =>
                                prev.filter((c) => c.id !== bigConfetti.id)
                            );
                        }, 3000);
                    }
                }, 500);
            }
        }
    }, [poppedBalloons, balloons, allHeartLovePopped, confettiData]);

    // 모든 풍선이 터졌는지 체크하고 페이지 이동
    useEffect(() => {
        if (balloons.length > 0 && poppedBalloons.size === balloons.length) {
            setTimeout(() => {
                router.replace("/invitation");
            }, 1500);
        }
    }, [poppedBalloons, balloons, router]);

    return (
        <div
            style={{
                position: "fixed", // absolute에서 fixed로 변경하여 전체 화면 커버
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                minHeight: "100vh", // 최소 높이 보장
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                zIndex: 10,
                overflow: "hidden",
                pointerEvents: "auto", // 클릭 이벤트를 위해 변경
            }}
        >
            {balloons.map(
                (balloon) =>
                    !poppedBalloons.has(balloon.id) && (
                        <div
                            key={balloon.id}
                            style={{
                                position: "absolute",
                                left: `${balloon.left}%`,
                                top: `${balloon.top}%`,
                                zIndex: balloon.zIndex,
                                willChange: "transform", // 렌더링 최적화
                                animation: `float-${balloon.id % 5} ${
                                    balloon.animationDuration
                                }s ease-in-out ${
                                    balloon.animationDelay
                                }s infinite`,
                            }}
                        >
                            <div
                                style={{
                                    width: `${balloon.size}vw`,
                                    height: "auto",
                                    minWidth: "60px", // 최소 크기 증가
                                    maxWidth:
                                        balloon.type === "heart_love"
                                            ? "400px" // heart_love 최대 크기 증가
                                            : "350px", // 일반 풍선도 크기 증가
                                    willChange: "transform", // 렌더링 최적화
                                    ...(balloon.type === "heart_love" && {
                                        animation: `${`float-${
                                            balloon.id % 5
                                        }`} ${
                                            balloon.animationDuration
                                        }s ease-in-out ${
                                            balloon.animationDelay
                                        }s infinite, glow 2s ease-in-out infinite alternate`,
                                    }),
                                }}
                            >
                                <Balloon
                                    type={balloon.type}
                                    highlight={balloon.type === "heart_love"}
                                    onClick={() =>
                                        handleBalloonClick(
                                            balloon.id,
                                            balloon.left,
                                            balloon.top
                                        )
                                    }
                                />
                            </div>
                        </div>
                    )
            )}

            {/* Lottie Confetti 효과 */}
            {confettiEffects.map((confetti) => (
                <div
                    key={confetti.id}
                    style={{
                        position: "absolute",
                        left: `${confetti.left}%`,
                        top: `${confetti.top}%`,
                        zIndex: 100,
                        pointerEvents: "none",
                        width: "100vw", // 페이지 전체 너비
                        height: "100vh", // 페이지 전체 높이
                        transform: "translate(-50%, -50%)", // 중심점 맞추기
                    }}
                >
                    {confetti.animationData && (
                        <Lottie
                            animationData={confetti.animationData}
                            loop={false}
                            autoplay={true}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    )}
                </div>
            ))}

            <style jsx>{`
                @keyframes float-0 {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-30px) translateX(15px)
                            rotate(3deg);
                    }
                    50% {
                        transform: translateY(-50px) translateX(-10px)
                            rotate(-2deg);
                    }
                    75% {
                        transform: translateY(-25px) translateX(-15px)
                            rotate(2deg);
                    }
                }

                @keyframes float-1 {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                    }
                    33% {
                        transform: translateY(-40px) translateX(-20px)
                            rotate(-3deg);
                    }
                    66% {
                        transform: translateY(-20px) translateX(20px)
                            rotate(4deg);
                    }
                }

                @keyframes float-2 {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                    }
                    20% {
                        transform: translateY(-15px) translateX(25px)
                            rotate(2deg);
                    }
                    40% {
                        transform: translateY(-45px) translateX(5px)
                            rotate(-1deg);
                    }
                    60% {
                        transform: translateY(-35px) translateX(-25px)
                            rotate(3deg);
                    }
                    80% {
                        transform: translateY(-10px) translateX(10px)
                            rotate(-2deg);
                    }
                }

                @keyframes float-3 {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                    }
                    16% {
                        transform: translateY(-20px) translateX(-30px)
                            rotate(-2deg);
                    }
                    32% {
                        transform: translateY(-60px) translateX(10px)
                            rotate(3deg);
                    }
                    48% {
                        transform: translateY(-40px) translateX(35px)
                            rotate(-1deg);
                    }
                    64% {
                        transform: translateY(-80px) translateX(-15px)
                            rotate(4deg);
                    }
                    80% {
                        transform: translateY(-30px) translateX(-25px)
                            rotate(-3deg);
                    }
                }

                @keyframes float-4 {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                    }
                    30% {
                        transform: translateY(-25px) translateX(40px)
                            rotate(5deg);
                    }
                    60% {
                        transform: translateY(-70px) translateX(-20px)
                            rotate(-4deg);
                    }
                }

                @keyframes glow {
                    0% {
                        filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
                    }
                    100% {
                        filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.9))
                            drop-shadow(0 0 40px rgba(255, 215, 0, 0.6));
                    }
                }
            `}</style>
        </div>
    );
}
