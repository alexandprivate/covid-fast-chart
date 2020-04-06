import React from "react";

const months = {
  0: "Ene",
  1: "Feb",
  2: "Mar",
  3: "Abr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Ago",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dic"
};

function CustomDate({ date }) {
  const d = new Date(date);
  const day = d.getDate();
  const month = months[d.getMonth()];
  // const year = d.getFullYear();

  return (
    <div className="flex flex-col text-xs">
      <span>{day}</span>
      <span>{month}</span>
    </div>
  );
}

export default function Bars({ data }) {
  console.log(data);
  const {
    timeline: { cases, deaths, recovered }
  } = data;

  return (
    <div className="flex text-center mt-10 h-48">
      {Object.entries(cases).map(key => {
        const max = cases.length;
        console.log(max);
        return (
          <div
            key={key[0]}
            className="flex flex-1 flex-col items-end bg-gray-800"
            style={{ height: `${key[1]}%` }}
          >
            {/* <span>{key[1]}</span> */}
            <CustomDate date={key[0]} />
          </div>
        );
      })}
    </div>
  );
}
