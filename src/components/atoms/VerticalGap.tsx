"use client";

import React from "react";

type VerticalGapProps = {
    size?: number;
};

export const VerticalGap: React.FC<VerticalGapProps> = ({ size = 0 }) => {
    return <div style={{ marginBottom: size }} />;
};
