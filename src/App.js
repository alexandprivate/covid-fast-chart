import React from "react";
import "./styles.css";
import DailyStats from "./dailyStats";
import Select from "./dailyStats/select";
import Preloader from "./dailyStats/preloader";
import NoData, { HasError } from "./noData";
import useQuery from "./useQuery";
import Illustration from "./illustration.jpeg";

const urlCountry = (country) =>
    `https://corona.lmao.ninja/v2/countries/${country}?yesterday=false`;

const urlState = (province) =>
    `https://corona.lmao.ninja/v2/states/${province}?yesterday=false`;
const urlWorld = "https://corona.lmao.ninja/v2/all?yesterday=false";

const INITIAL_COUNTRY = "Ecuador";

export default function App() {
    const { data, loading, error, query } = useQuery(urlWorld);

    function handleGetNewCountryData(newCountryName) {
        const forCountry = urlCountry(newCountryName);
        query(forCountry);
    }

    function handleGetUsaStateData(newState) {
        const forState = urlState(newState);
        query(forState);
    }

    function handleGetWorldWide() {
        query(urlWorld);
    }

    return (
        <>
            <div className="container mx-auto py-5 px-2 flex">
                <div className="flex-1 px-5">
                    <Select
                        country={INITIAL_COUNTRY}
                        handleGetNewCountryData={handleGetNewCountryData}
                        handleGetUsaStateData={handleGetUsaStateData}
                        handleGetWorldWide={handleGetWorldWide}
                    />
                    {loading && <Preloader />}
                    {data?.message && <NoData />}
                    {error && <HasError />}
                    {!loading && data && !data?.message && (
                        <DailyStats data={data} />
                    )}
                </div>
                <div className="flex-1 hidden lg:block pl-24 mt-12">
                    <img
                        className="flex-1"
                        style={{ width: "100%" }}
                        src={Illustration}
                        alt="illustration"
                    />
                </div>
            </div>
        </>
    );
}
