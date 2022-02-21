import { MissionFragment } from "../generated/generated";
import calculateTotalEnergy from "./calculateTotalEnergy";

export default function calculateAverageEnergyPerPayload(
  missions: MissionFragment[]
) {
  const totalEnergy = calculateTotalEnergy(missions);
  const totalPayloadMass = missions.reduce((acc, cur) => {
    const payloadMass = cur.rocket?.second_stage?.payloads?.reduce(
      (sum, payload) => sum + (payload?.payload_mass_kg || 0),
      0
    );
    return acc + (payloadMass || 0);
  }, 0);

  return Math.floor(totalEnergy / totalPayloadMass);
}
