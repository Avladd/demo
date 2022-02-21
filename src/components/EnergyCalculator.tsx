import { Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { selectedMissionsContext } from "../context/selectedMissions";
import { MissionFragment } from "../generated/generated";

export default function EnergyCalculator({
  missions,
}: {
  missions: MissionFragment[];
}) {
  const { selectedMissions: selectedMissionsIds } = useContext(
    selectedMissionsContext
  );

  return (
    <>
      <Grid container>
        {!!!selectedMissionsIds.length && (
          <Grid item xs={12}>
            <Typography
              sx={{ ml: "1rem" }}
              variant="h6"
              component="p"
              align="center"
            >
              Select one or more missions to calculate their energy effiency
            </Typography>
          </Grid>
        )}
        {!!selectedMissionsIds.length && (
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Typography variant="h6" component="p" align="center">
                Total energy use:
                <Typography variant="h6" component="span" color="primary">
                  {" "}
                  77474746 Joules
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="p" align="center">
                Energy per kg of payload:
                <Typography variant="h6" component="span" color="primary">
                  {" "}
                  77474746 Joules
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}
