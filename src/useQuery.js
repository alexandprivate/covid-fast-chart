import React from "react";

export default function useQuery(url) {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState(null);

    const query = async (url) => {
        setLoading(true);
        try {
            const res = await fetch(url).then((res) => res.json());
            setData(res);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        query(url);
        // eslint-disable-next-line
    }, []);

    return { loading, error, data, query };
}
