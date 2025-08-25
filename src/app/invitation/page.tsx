"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    Invitation,
    Welcome,
    Contact,
    Gallery,
    Calendar,
    Location,
    Guestbook,
    Account,
    Rsvp,
    Final,
} from "@/components/templates";
import { VerticalGap } from "@/components/atoms";

interface SectionVisibility {
    invitation: boolean;
    welcome: boolean;
    contact: boolean;
    gallery: boolean;
    calendar: boolean;
    location: boolean;
    guestbook: boolean;
    account: boolean;
    rsvp: boolean;
    final: boolean;
}

export default function InvitationPage() {
    const [visibleSections, setVisibleSections] = useState<SectionVisibility>({
        invitation: false,
        welcome: false,
        contact: false,
        gallery: false,
        calendar: false,
        location: false,
        guestbook: false,
        account: false,
        rsvp: false,
        final: false,
    });

    const sectionRefs = {
        invitation: useRef<HTMLDivElement>(null),
        welcome: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
        gallery: useRef<HTMLDivElement>(null),
        calendar: useRef<HTMLDivElement>(null),
        location: useRef<HTMLDivElement>(null),
        guestbook: useRef<HTMLDivElement>(null),
        account: useRef<HTMLDivElement>(null),
        rsvp: useRef<HTMLDivElement>(null),
        final: useRef<HTMLDivElement>(null),
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionName = entry.target.getAttribute(
                            "data-section"
                        ) as keyof SectionVisibility;
                        if (sectionName) {
                            setVisibleSections((prev) => ({
                                ...prev,
                                [sectionName]: true,
                            }));
                        }
                    }
                });
            },
            {
                threshold: 0.1, // 10%가 보이면 트리거
                rootMargin: "-50px 0px", // 뷰포트에서 50px 위로 올라가야 트리거
            }
        );

        // 모든 섹션 관찰 시작
        Object.entries(sectionRefs).forEach(([key, ref]) => {
            if (ref.current) {
                ref.current.setAttribute("data-section", key);
                observer.observe(ref.current);
            }
        });

        // 첫 번째 섹션은 즉시 표시
        setVisibleSections((prev) => ({ ...prev, invitation: true }));

        return () => observer.disconnect();
    }, []);

    const getSectionStyle = (isVisible: boolean) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    });

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
            }}
        >
            <div
                ref={sectionRefs.invitation}
                style={getSectionStyle(visibleSections.invitation)}
            >
                <Invitation visible={true} />
            </div>
            <VerticalGap size={100} />

            <div
                ref={sectionRefs.welcome}
                style={getSectionStyle(visibleSections.welcome)}
            >
                <Welcome />
            </div>
            <VerticalGap size={100} />

            <div
                ref={sectionRefs.contact}
                style={getSectionStyle(visibleSections.contact)}
            >
                <Contact />
            </div>
            <VerticalGap size={100} />

            <div
                ref={sectionRefs.gallery}
                style={getSectionStyle(visibleSections.gallery)}
            >
                <Gallery />
            </div>
            <VerticalGap size={100} />

            <div
                ref={sectionRefs.calendar}
                style={getSectionStyle(visibleSections.calendar)}
            >
                <Calendar />
            </div>
            <VerticalGap size={100} />

            <div
                ref={sectionRefs.location}
                style={getSectionStyle(visibleSections.location)}
            >
                <Location />
            </div>
            <VerticalGap size={100} />

            <div
                ref={sectionRefs.guestbook}
                style={getSectionStyle(visibleSections.guestbook)}
            >
                <Guestbook />
            </div>
            <VerticalGap size={100} />

            <div
                ref={sectionRefs.account}
                style={getSectionStyle(visibleSections.account)}
            >
                <Account />
            </div>
            <VerticalGap size={100} />

            <div
                ref={sectionRefs.rsvp}
                style={getSectionStyle(visibleSections.rsvp)}
            >
                <Rsvp />
            </div>
            <VerticalGap size={100} />

            <div
                ref={sectionRefs.final}
                style={getSectionStyle(visibleSections.final)}
            >
                <Final />
            </div>
        </div>
    );
}
