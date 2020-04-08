import React from "react";
import Card from "./card";

export default function DailyStats({ data }) {
    let formatNumber = (num) =>
        num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return (
        <div className="cards">
            <div className="flex flex-wrap flex-1 items-center ">
                <Card
                    title="Casos"
                    value={formatNumber(data.cases)}
                    bg="bg-gray-800"
                    w="w-full md:w-4/12"
                />
                <Card
                    title="Activos"
                    value={formatNumber(data.active)}
                    bg="bg-gray-700"
                    w="w-full md:w-4/12"
                />
                {data.recovered ? (
                    <Card
                        title="Recuperados"
                        value={formatNumber(data.recovered)}
                        bg="bg-green-500"
                        w="w-6/12 md:w-4/12"
                    />
                ) : (
                    <Card
                        title="Recuperados"
                        value={formatNumber(data.cases - data.active)}
                        bg="bg-green-500"
                        w="w-6/12 md:w-4/12"
                    />
                )}
                <Card
                    title="Muertes"
                    value={formatNumber(data.deaths)}
                    bg="bg-red-500"
                    w={`${
                        data.critical ? "w-6/12 md:w-3/12" : "w-6/12 md:w-4/12"
                    }`}
                />
                {data.critical && (
                    <Card
                        title="Graves"
                        value={formatNumber(data.critical)}
                        bg="bg-orange-500"
                        w="w-full md:w-3/12"
                    />
                )}
                <Card
                    title="Nuevos Casos"
                    value={formatNumber(data.todayCases)}
                    bg="bg-gray-800"
                    w={`${
                        data.critical ? "w-6/12 md:w-3/12" : "w-6/12 md:w-4/12"
                    }`}
                />

                <Card
                    title="Muertes Hoy"
                    value={formatNumber(data.todayDeaths)}
                    bg="bg-red-500"
                    w={`${
                        data.critical ? "w-6/12 md:w-3/12" : "w-6/12 md:w-4/12"
                    }`}
                />
            </div>
            <div className="flex">
                <Card
                    title="Pruebas"
                    value={formatNumber(data.tests)}
                    bg="bg-blue-500"
                />
            </div>
        </div>
    );
}
