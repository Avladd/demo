import { MissionFragment } from "../generated/generated";
import calculateEnergyPerMission from "./calculateEnergyPerMission";

export default function calculateTotalEnergy(launches: MissionFragment[]) {
  return launches.reduce((acc, cur) => {
    return acc + calculateEnergyPerMission(cur);
  }, 0);
}
