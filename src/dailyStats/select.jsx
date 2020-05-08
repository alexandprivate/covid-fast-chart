import React from "react";
import usaStates from "./states.js";

const styledSelect =
    "flex-1 w-full h-12 rounded-none appearance-none focus:outline-none border-b border-gray-800 bg-white text-gray-800 text-xl font-bold uppercase mx-3";

const countries = [
    { name: "Worldwide", value: "Worldwide" },
    { name: "Ecuador", value: "ecuador" },
    { name: "Cuba", value: "cuba" },
    { name: "Spain", value: "spain" },
    { name: "USA", value: "usa" },
    { name: "Canada", value: "canada" },
    { name: "Italy", value: "italy" },
];

export default function CustomSelect({
    handleGetNewCountryData,
    handleGetUsaStateData,
    handleGetWorldWide,
}) {
    // TODO get time
    // console.log(new Date(1586142585426));

    const [country, setCountry] = React.useState("");

    function updateWorld(value) {
        handleGetWorldWide();
        setCountry(value);
    }

    function updateCountry(value) {
        setCountry(value);
        handleGetNewCountryData(value);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        if (value === "Worldwide") {
            updateWorld(value);
            return;
        }
        if (name === "states") {
            if (value === "") updateCountry(value);
            else handleGetUsaStateData(value);
        } else updateCountry(value);
    }

    return (
        <div className="flex items-center justify-between mb-4 -mx-3">
            <select
                onChange={handleChange}
                defaultValue="Worldwide"
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
            {country === "usa" && (
                <select
                    onChange={handleChange}
                    name="states"
                    id="states"
                    className={styledSelect}
                >
                    <option value="">Select State</option>
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
