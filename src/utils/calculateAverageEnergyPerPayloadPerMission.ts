import { MissionFragment } from "../generated/generated";
import calculateEnergyPerMission from "./calculateEnergyPerMission";

export default function calculateAverageEnergyPerPayloadPerMission(
  mission: MissionFragment
) {
  const energy = calculateEnergyPerMission(mission);
  const payloadMass = mission.rocket?.second_stage?.payloads?.reduce(
    (sum, payload) => sum + (payload?.payload_mass_kg || 0),
    0
  );

  return energy / (payloadMass || 1);
}
