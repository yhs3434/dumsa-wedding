"use client";

import React, { useMemo } from "react";
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
}

export function BalloonMask({ visible }: BalloonMaskProps) {
    const balloons = useMemo(() => {
        const balloonTypes: BalloonType[] = [
            "circle_pink",
            "circle_pink2",
            "circle_ivory",
            "heart",
            "heart_love",
        ];
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
                left: Math.random() * 85, // 0-85% 범위 (화면 안쪽에)
                top: Math.random() * 80, // 0-80% 범위 (화면 안쪽에)
                size: Math.random() * 10 + 20, // 20-30% 크기 (크게)
                animationDuration: Math.random() * 10 + 25, // 25-35초 (천천히)
                animationDelay: Math.random() * 5, // 0-5초 지연 (빨리 등장)
                zIndex: Math.floor(Math.random() * 3) + 18, // 18-20 (최상단)
            });
        }

        // 나머지 풍선들 대폭 증가 (600-800개)
        const regularBalloonCount = Math.floor(Math.random() * 201) + 600; // 600-800개
        for (let i = 4; i < regularBalloonCount + 4; i++) {
            const randomType =
                regularTypes[Math.floor(Math.random() * regularTypes.length)];
            result.push({
                id: i,
                type: randomType,
                left: Math.random() * 105, // 0-105% 범위 (화면 밖까지)
                top: Math.random() * 130, // 0-130% 범위 (위아래 화면 밖까지)
                size: Math.random() * 14 + 6, // 6-20% 크기 (더 다양하게)
                animationDuration: Math.random() * 25 + 15, // 15-40초 (더 다양한 속도)
                animationDelay: Math.random() * 20, // 0-20초 지연 (더 긴 지연)
                zIndex: Math.floor(Math.random() * 8) + 1, // 1-8
            });
        }

        // 빈 공간을 채우기 위한 추가 작은 풍선들 (200개)
        for (
            let i = regularBalloonCount + 4;
            i < regularBalloonCount + 204;
            i++
        ) {
            const randomType =
                regularTypes[Math.floor(Math.random() * regularTypes.length)];
            result.push({
                id: i,
                type: randomType,
                left: Math.random() * 100, // 전체 화면
                top: Math.random() * 120, // 위아래 확장
                size: Math.random() * 8 + 3, // 3-11% 크기 (작은 풍선들)
                animationDuration: Math.random() * 30 + 10, // 10-40초 (더 느리게)
                animationDelay: Math.random() * 25, // 0-25초 지연
                zIndex: Math.floor(Math.random() * 5) + 1, // 1-5 (뒤쪽 레이어)
            });
        }

        return result;
    }, []);

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
                pointerEvents: "none", // 풍선들이 클릭을 방해하지 않도록
            }}
        >
            {balloons.map((balloon) => (
                <div
                    key={balloon.id}
                    style={{
                        position: "absolute",
                        left: `${balloon.left}%`,
                        top: `${balloon.top}%`,
                        zIndex: balloon.zIndex,
                        animation: `float-${balloon.id % 5} ${
                            balloon.animationDuration
                        }s ease-in-out ${balloon.animationDelay}s infinite`,
                    }}
                >
                    <div
                        style={{
                            width: `${balloon.size}vw`,
                            height: "auto",
                            minWidth: "30px",
                            maxWidth:
                                balloon.type === "heart_love"
                                    ? "200px"
                                    : "150px",
                            ...(balloon.type === "heart_love" && {
                                animation: `${`float-${balloon.id % 5}`} ${
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
                        />
                    </div>
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
