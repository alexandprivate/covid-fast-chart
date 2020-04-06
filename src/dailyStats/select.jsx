import React from "react";

const countries = [
  { name: "Ecuador", value: "Ecuador" },
  { name: "Cuba", value: "Cuba" },
  { name: "España", value: "Spain" },
  { name: "USA", value: "Estados Unidos" },
  { name: "Canada", value: "Canada" },
  { name: "Italia", value: "Italia" }
];

export default function CustomSelect({ country, setCountry }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <p className="text-gray-700 font-bold text-lg">{country}</p>
      <select
        onChange={e => setCountry(e.target.value)}
        defaultValue={countries[0]}
        name=""
        id=""
        className="h-8 appearance-none px-4 border bg-white text-lg text-gray-800"
      >
        {countries.map(c => (
          <option key={c.value} value={c.value}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
