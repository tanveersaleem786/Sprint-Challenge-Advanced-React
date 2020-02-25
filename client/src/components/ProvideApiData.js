import { useFetch } from "../hooks/useFetch";

function ProvideApiData({ children }) {
    const [data] = useFetch('http://localhost:6000/api/players');
    return children({ data },'test');
}

export default ProvideApiData;