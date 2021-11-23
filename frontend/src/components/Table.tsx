import {useState, useEffect} from "react"; 
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_POLICIES } from "../queries/Policies";

const Table: React.FC = () => {
    const { loading, error, data } = useQuery(QUERY_GET_ALL_POLICIES)

    const [policies, setPolicies] = useState([]); 

    useEffect(() => {
        if (!loading && data) {
            setPolicies(data.getAllPolicies.results)
        }
    }, [loading])

    if (loading) return <p>Give it a minute</p>
    if (error) return <p>Something's wrong: {error.message}</p>

    console.log(policies)

    return (
        <>
            <h1>Hello from Tableee</h1>
        </>
    )
}

export default Table;