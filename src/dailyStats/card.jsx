import React from "react";

export default function Card({ bg, title, value, w = "flex-1" }) {
    return (
        <div
            className={`border border-white py-5 px-1 text-center ${w} text-white ${bg}`}
        >
            <p>{title}</p>
            <p className="text-3xl font-bold leading-none">{value}</p>
        </div>
    );
}
