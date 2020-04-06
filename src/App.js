import React from "react";
import "./styles.css";
import DailyStats from "./dailyStats";
import Select from "./dailyStats/select";
import Placeholder from "./dailyStats/placeholder";

// https://corona.lmao.ninja/states/Florida

function NoData() {
    return (
        <p className="text-center bg-gray-100 border p-6 rounded w-full">
            No existen datos
        </p>
    );
}

export default function App() {
    const [data, setData] = React.useState(null);
    const [country, setCountry] = React.useState("Ecuador");
    const [province, setProvince] = React.useState("");
    const [loading, setLoading] = React.useState(true);

    const query = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://corona.lmao.ninja/countries/${country}`
            ).then((res) => res.json());
            setData(res);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const queryByState = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://corona.lmao.ninja/states/${province}`
            ).then((res) => res.json());

            setData(res);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        query();
        if (country !== "Estados Unidos" && province) {
            setProvince("");
        }
    }, [country]);

    React.useEffect(() => {
        if (province) {
            queryByState();
        }
    }, [province]);

    return (
        <div className="container mx-auto py-5 px-2">
            <Select
                country={country}
                setCountry={setCountry}
                province={province}
                setProvince={setProvince}
            />
            {loading && <Placeholder />}
            {!loading && data.message && <NoData />}
            {!loading && data && !data.message && <DailyStats data={data} />}
        </div>
    );
}
