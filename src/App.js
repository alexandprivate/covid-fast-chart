import React from "react";
import "./styles.css";
import DailyStats from "./dailyStats";
import Select from "./dailyStats/select";
import Preloader from "./dailyStats/preloader";
import NoData, { HasError } from "./noData";
import useQuery from "./useQuery";

const urlCountry = (country) =>
    `https://corona.lmao.ninja/countries/${country}`;
const urlState = (province) => `https://corona.lmao.ninja/states/${province}`;

const INITIAL_COUNTRY = "Ecuador";

export default function App() {
    const { data, loading, error, query } = useQuery(
        urlCountry(INITIAL_COUNTRY)
    );

    function handleGetNewCountryData(newCountryName) {
        const forCountry = urlCountry(newCountryName);
        query(forCountry);
    }

    function handleGetUsaStateData(newState) {
        const forState = urlState(newState);
        query(forState);
    }

    return (
        <div className="container mx-auto py-5 px-2">
            <Select
                country={INITIAL_COUNTRY}
                handleGetNewCountryData={handleGetNewCountryData}
                handleGetUsaStateData={handleGetUsaStateData}
            />
            {loading && <Preloader />}
            {data?.message && <NoData />}
            {error && <HasError />}
            {!loading && data && !data?.message && <DailyStats data={data} />}
        </div>
    );
}
