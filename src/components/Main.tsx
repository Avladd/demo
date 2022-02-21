import { useQuery } from "@apollo/client";
import { MissionsDocument } from "../generated/generated";

export default function Main() {
  const { error, loading, data } = useQuery(MissionsDocument);

  if (error) return <pre>Error: {error.message}</pre>;
  if (loading) return <pre>Loading...</pre>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
