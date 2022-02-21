import { Grid } from "@mui/material";
import { MissionFragment } from "../generated/generated";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import calculateTotalEnergy from "../utils/calculateTotalEnergy";
import calculateEnergyPerMission from "../utils/calculateEnergyPerMission";
import calculateAverageEnergyPerPayload from "../utils/calculateAverageEnergyPerPayload";
import calculateAverageEnergyPerPayloadPerMission from "../utils/calculateAverageEnergyPerPayloadPerMission";

export default function EnergyCharts({
  missions,
}: {
  missions: MissionFragment[];
}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const totalLabels = [
    "Total",
    ...missions.map((mission) => mission.mission_name),
  ];
  const totalDatasets = [
    {
      label: "Energy used in GigaJoules",
      data: [
        calculateTotalEnergy(missions) / 1e9,
        ...missions.map((mission) => calculateEnergyPerMission(mission) / 1e9),
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ];
  const totalData = {
    labels: totalLabels,
    datasets: totalDatasets,
  };

  const payloadLabels = [
    "Average",
    ...missions.map((mission) => mission.mission_name),
  ];

  const payloadDatasets = [
    {
      label: "Energy used per kg of payload in MegaJoules",
      data: [
        calculateAverageEnergyPerPayload(missions) / 1e6,
        ...missions.map(
          (mission) => calculateAverageEnergyPerPayloadPerMission(mission) / 1e6
        ),
      ],
    },
  ];

  const payloadData = {
    labels: payloadLabels,
    datasets: payloadDatasets,
  };
  return (
    <Grid container sx={{ mt: "2rem" }}>
      <Grid item xs={6}>
        <Bar data={totalData} />
      </Grid>
      <Grid item xs={6}>
        <Bar data={payloadData} />
      </Grid>
    </Grid>
  );
}
