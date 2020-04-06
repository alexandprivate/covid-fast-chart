import React from "react";
import usaStates from "./states.js";

const countries = [
    { name: "Ecuador", value: "Ecuador" },
    { name: "Cuba", value: "Cuba" },
    { name: "España", value: "Spain" },
    { name: "USA", value: "Estados Unidos" },
    { name: "Canadá", value: "Canada" },
    { name: "Italia", value: "Italia" },
];

export default function CustomSelect({
    setCountry,
    country,
    province,
    setProvince,
}) {
    // console.log(new Date(1586142585426));
    const selectedCountry = countries.find((c) => c.value === country).value;
    const selectedProvince =
        province !== "" ? usaStates.find((p) => p.name === province) : "";

    return (
        <div className="flex items-center justify-between mb-3">
            <select
                onChange={(e) => setCountry(e.target.value)}
                defaultValue={selectedCountry}
                name="countries"
                id="countries"
                className="flex-1 w-full h-10 rounded-none appearance-none focus:outline-none border-b bg-white text-lg text-gray-800"
            >
                {countries.map((c) => (
                    <option key={c.value} value={c.value}>
                        {c.name}
                    </option>
                ))}
            </select>
            {country === "Estados Unidos" && (
                <select
                    onChange={(e) => setProvince(e.target.value)}
                    defaultValue={selectedProvince}
                    name="usa-states"
                    id="usa-states"
                    className="w-full flex-1 h-10 rounded-none appearance-none focus:outline-none border-b bg-white text-lg text-gray-800"
                >
                    <option value="">Estado</option>
                    {usaStates.map((s) => (
                        <option key={s.name} value={s.name}>
                            {s.name}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}
