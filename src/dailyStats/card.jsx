import React from "react";

export default function Card({
    title,
    value,
    w = "w-full",
    color = "text-teal-400",
    icon = null,
}) {
    return (
        <div className={`py-4 text-gray-800 ${w}`}>
            <p className="flex items-center">
                <span className={`${color} mr-2`}>{icon}</span> {title}
            </p>
            <p
                className={`text-5xl font-black leading-tight font-serif ${color}`}
            >
                {value}
            </p>
        </div>
    );
}
