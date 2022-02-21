import { MissionFragment } from "../generated/generated";

export default function calculateEnergyPerMission(mission: MissionFragment) {
  const firstStageFuel =
    mission.rocket?.rocket?.first_stage?.fuel_amount_tons || 0;
  const secondStageFuel =
    mission.rocket?.rocket?.second_stage?.fuel_amount_tons || 0;

  return (firstStageFuel + secondStageFuel) * 1.35e10;
}

//  1.35*10^7 Joules / kg of fuel
