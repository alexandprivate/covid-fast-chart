import React from "react";
import usaStates from "./states.js";

const styledSelect =
    "flex-1 w-full h-10 rounded-none appearance-none focus:outline-none border-b border-gray-700 bg-white text-gray-800 uppercase mx-3";

const countries = [
    { name: "Ecuador", value: "Ecuador" },
    { name: "Cuba", value: "Cuba" },
    { name: "España", value: "Spain" },
    { name: "USA", value: "Estados Unidos" },
    { name: "Canadá", value: "Canada" },
    { name: "Italia", value: "Italia" },
];

export default function CustomSelect({
    handleGetNewCountryData,
    handleGetUsaStateData,
}) {
    // TODO get time
    // console.log(new Date(1586142585426));

    const [country, setCountry] = React.useState("");

    function updateCountry(value) {
        setCountry(value);
        handleGetNewCountryData(value);
    }

    function updateState(value) {
        handleGetUsaStateData(value);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === "states") {
            if (value === "") updateCountry(country);
            else updateState(value);
        } else {
            updateCountry(value);
        }
    }

    return (
        <div className="flex items-center justify-between mb-3 -mx-3">
            <select
                onChange={handleChange}
                defaultValue={country}
                name="countries"
                id="countries"
                className={styledSelect}
            >
                {countries.map((c) => (
                    <option key={c.value} value={c.value}>
                        {c.name}
                    </option>
                ))}
            </select>
            {country === "Estados Unidos" && (
                <select
                    onChange={handleChange}
                    name="states"
                    id="states"
                    className={styledSelect}
                >
                    <option value="">Por Estado</option>
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
