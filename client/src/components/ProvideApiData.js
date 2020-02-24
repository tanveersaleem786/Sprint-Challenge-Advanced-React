import { useFetch } from "../hooks/useFetch";

function ProvideApiData({ children }) {
    const [data] = useFetch('http://localhost:5000/api/players');
    return children({ data });
}

export default ProvideApiData;