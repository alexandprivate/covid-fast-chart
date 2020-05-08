import React from "react";
import Card from "./card";
import { GiLoveInjection, GiCrucifix } from "react-icons/gi";
import { FaBed, FaUserInjured, FaUserAlt, FaUserCheck } from "react-icons/fa";

export default function DailyStats({ data }) {
    let formatNumber = (num) =>
        num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return (
        <div className="cards">
            <div className="flex w-full flex-wrap flex-1 items-center ">
                <Card
                    title="Total cases"
                    value={formatNumber(data.cases)}
                    color="text-covid-purple"
                    icon={<FaUserAlt />}
                />
                <Card
                    title="Active"
                    value={formatNumber(data.active)}
                    color="text-covid-brown"
                    icon={<FaUserInjured />}
                />
                {data.recovered ? (
                    <Card
                        title="Recovered"
                        value={formatNumber(data.recovered)}
                        color="text-teal-400"
                        icon={<FaUserCheck />}
                    />
                ) : (
                    <Card
                        title="Recovered"
                        value={formatNumber(data.cases - data.active)}
                        color="text-teal-400"
                    />
                )}
                <Card
                    title="Deaths"
                    value={formatNumber(data.deaths)}
                    color="text-covid-red"
                    icon={<GiCrucifix />}
                />

                {data.critical && (
                    <Card
                        title="Critical"
                        value={formatNumber(data.critical)}
                        color="text-orange-400"
                        icon={<FaBed />}
                    />
                )}

                <Card
                    title="Today's cases"
                    value={formatNumber(data.todayCases)}
                    color="text-covid-brown"
                    icon={<FaUserInjured />}
                    w={`${
                        data.critical ? "w-full md:w-6/12" : "w-full md:w-6/12"
                    }`}
                />

                <Card
                    title="Today's deaths"
                    value={formatNumber(data.todayDeaths)}
                    color="text-covid-red"
                    icon={<GiCrucifix />}
                    w={`${
                        data.critical ? "w-full md:w-6/12" : "w-full md:w-6/12"
                    }`}
                />
            </div>
            <div className="flex">
                <Card
                    title="Total people tested"
                    value={formatNumber(data.tests)}
                    color="text-covid-purple"
                    icon={<GiLoveInjection />}
                />
            </div>
        </div>
    );
}
