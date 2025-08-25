"use client";

import React from "react";
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

export default function InvitationPage() {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
            }}
        >
            <Invitation visible={true} />
            <VerticalGap size={100} />
            <Welcome />
            <VerticalGap size={100} />
            <Contact />
            <VerticalGap size={100} />
            <Gallery />
            <VerticalGap size={100} />
            <Calendar />
            <VerticalGap size={100} />
            <Location />
            <VerticalGap size={100} />
            <Guestbook />
            <VerticalGap size={100} />
            <Account />
            <VerticalGap size={100} />
            <Rsvp />
            <VerticalGap size={100} />
            <Final />
        </div>
    );
}
