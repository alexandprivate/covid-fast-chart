import React from "react";

function Card({ bg, title, value, w = "flex-1" }) {
  return (
    <div className={`py-5 px-1 text-center ${w} text-white ${bg}`}>
      <p>{title}</p>
      <p className="text-3xl font-bold leading-none">{value}</p>
    </div>
  );
}

export default function DailyStats({ data }) {
  return (
    <>
      <div className="flex flex-wrap flex-1 items-center border-b border-white">
        <Card
          title="Casos"
          value={data.cases}
          bg="bg-gray-800"
          w="w-6/12 md:w-3/12"
        />
        <Card
          title="Activos"
          value={data.active}
          bg="bg-gray-700"
          w="w-6/12 md:w-3/12"
        />
        <Card
          title="Recuparados"
          value={data.recovered}
          bg="bg-green-500"
          w="w-6/12 md:w-3/12"
        />
        <Card
          title="Fallecidos"
          value={data.deaths}
          bg="bg-red-500"
          w="w-6/12 md:w-3/12"
        />
      </div>

      <div className="flex flex-1 items-center">
        <Card title="Hoy" value={data.todayCases} bg="bg-gray-800" />
        <Card
          title="Cr&iacute;ticos"
          value={data.critical}
          bg="bg-orange-500"
          w="w-4/12 md:w-6/12"
        />
        <Card title="Hoy" value={data.todayDeaths} bg="bg-red-500" />
      </div>
      <div className="flex w-full flex-col md:flex-row md:items-center mt-5">
        <span className="flex items-center mr-2 text-sm text-gray-700">
          <span className="block h-3 w-3 rounded-full bg-green-500 mr-2" />
          Recuperados
        </span>
        <span className="flex items-center mr-2 text-sm text-gray-700">
          <span className="block h-3 w-3 rounded-full bg-orange-500 mr-2" />
          Cr&iacute;ticos
        </span>
        <span className="flex items-center mr-2 text-sm text-gray-700">
          <span className="block h-3 w-3 rounded-full bg-red-500 mr-2" />
          Recuperados
        </span>
      </div>
    </>
  );
}
