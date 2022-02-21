import { useQuery } from "@apollo/client";
import { Container, Grid, Table, Typography } from "@mui/material";
import { MissionFragment, MissionsDocument } from "../generated/generated";
import EnergyCalculator from "./EnergyCalculator";
import MissionsList from "./MissionsList";

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

  const missions = data?.launchesPast || [];
  return (
    <Container maxWidth="lg" sx={{ padding: 2, mt: 4 }}>
      <Typography variant="h2" align="center" sx={{ marginBottom: "3rem" }}>
        SpaceX launches
      </Typography>
      <Grid container direction="column">
        <Grid item sx={{ maxHeight: "60vh", overflow: "auto" }}>
          <MissionsList missions={missions as MissionFragment[]} />
        </Grid>
        <Grid item sx={{ mt: "2rem" }}>
          <EnergyCalculator missions={missions as MissionFragment[]} />
        </Grid>
      </Grid>
    </Container>
  );
}
