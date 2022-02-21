import { useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import { MissionsDocument } from "../generated/generated";

export default function Main() {
  const { error, loading, data } = useQuery(MissionsDocument, {
    variables: {
      limit: 20,
      order: "DESC",
      sort: "launch_date_utc",
    },
  });

  if (error) return <pre>Error: {error.message}</pre>;
  if (loading) return <pre>Loading...</pre>;
  return (
    <Container maxWidth="lg">
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </Container>
  );
}
