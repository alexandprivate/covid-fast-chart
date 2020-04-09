import React from "react";
import Card from "./card";

export default function DailyStats({ data }) {
    let formatNumber = (num) =>
        num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return (
        <div className="cards">
            <div className="flex flex-wrap flex-1 items-center ">
                <Card
                    title="Total cases"
                    value={formatNumber(data.cases)}
                    bg="bg-gray-800"
                    w="w-full md:w-4/12"
                />
                <Card
                    title="Active"
                    value={formatNumber(data.active)}
                    bg="bg-gray-700"
                    w="w-full md:w-4/12"
                />
                {data.recovered ? (
                    <Card
                        title="Recovered"
                        value={formatNumber(data.recovered)}
                        bg="bg-green-500"
                        w="w-6/12 md:w-4/12"
                    />
                ) : (
                    <Card
                        title="Recovered"
                        value={formatNumber(data.cases - data.active)}
                        bg="bg-green-500"
                        w="w-6/12 md:w-4/12"
                    />
                )}
                <Card
                    title="Deaths"
                    value={formatNumber(data.deaths)}
                    bg="bg-red-500"
                    w={`${
                        data.critical ? "w-6/12 md:w-3/12" : "w-6/12 md:w-4/12"
                    }`}
                />
                {data.critical && (
                    <Card
                        title="Critical"
                        value={formatNumber(data.critical)}
                        bg="bg-orange-500"
                        w="w-full md:w-3/12"
                    />
                )}
                <Card
                    title="Today's cases"
                    value={formatNumber(data.todayCases)}
                    bg="bg-gray-800"
                    w={`${
                        data.critical ? "w-6/12 md:w-3/12" : "w-6/12 md:w-4/12"
                    }`}
                />

                <Card
                    title="Today's deaths"
                    value={formatNumber(data.todayDeaths)}
                    bg="bg-red-500"
                    w={`${
                        data.critical ? "w-6/12 md:w-3/12" : "w-6/12 md:w-4/12"
                    }`}
                />
            </div>
            <div className="flex">
                <Card
                    title="Tests carried so far"
                    value={formatNumber(data.tests)}
                    bg="bg-blue-500"
                />
            </div>
        </div>
    );
}
