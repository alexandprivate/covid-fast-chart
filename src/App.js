import React from "react";
import "./styles.css";
import DailyStats from "./dailyStats";
import Select from "./dailyStats/select";
import Placeholder from "./dailyStats/placeholder";

export default function App() {
  const [data, setData] = React.useState(null);
  const [country, setCountry] = React.useState("Ecuador");
  const [loading, setLoading] = React.useState(true);

  const query = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://corona.lmao.ninja/countries/${country}`
      ).then(res => res.json());
      setData(res);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    query();
  }, [country]);

  return (
    <div className="container mx-auto p-5">
      <Select country={country} setCountry={setCountry} />
      {loading ? <Placeholder /> : <DailyStats data={data} />}
    </div>
  );
}
