import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_POLICIES } from "../queries/Policies";

const Table: React.FC = () => {
    const { loading, error, data } = useQuery(QUERY_GET_ALL_POLICIES)

    if (loading) return <p>Give it a minute</p>
    if (error) return <p>Something's wrong: {error.message}</p>

    console.log(data)

    return (
        <>
            <h1>Hello from Table</h1>
        </>
    )
}

export default Table;