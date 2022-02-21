import { Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { selectedMissionsContext } from "../context/selectedMissions";
import { MissionFragment } from "../generated/generated";
import calculateAverageEnergyPerPayload from "../utils/calculateAverageEnergyPerPayload";
import calculateTotalEnergy from "../utils/calculateTotalEnergy";
import humanizeEnergies from "../utils/humanizeEnergies";

export default function EnergyCalculator({
  missions,
}: {
  missions: MissionFragment[];
}) {
  const { selectedMissions: selectedMissionsIds } = useContext(
    selectedMissionsContext
  );

  const selectedMissions = missions.filter(
    (mission) => mission.id && selectedMissionsIds.includes(mission.id)
  );

  const totalEnergy = calculateTotalEnergy(selectedMissions);
  const averageEnergyPerKg = calculateAverageEnergyPerPayload(selectedMissions);

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
                  {totalEnergy / 1e9}
                </Typography>{" "}
                GigaJoules
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="p" align="center">
                Energy per kg of payload:
                <Typography variant="h6" component="span" color="primary">
                  {" "}
                  {Math.floor(averageEnergyPerKg / 1e6)}
                </Typography>{" "}
                MegaJoules
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: "1rem" }}>
              <Typography
                variant="h6"
                component="p"
                align="center"
                title="Humorous comparisson"
              >
                That total is the equivalent of{" "}
                <Typography variant="h6" component="span" color="primary">
                  {" "}
                  {humanizeEnergies(totalEnergy / 1e9)}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}
