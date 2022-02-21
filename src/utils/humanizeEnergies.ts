/**
 *
 * Returns a string with the equivalent energy consupmtion that you put it
 * @param energy Energy in GJ
 */
export default function humanizeEnergies(energy: number): string {
  if (energy < 1000) {
    return "how much a human eats in 10 years";
  } else if (energy < 6000) {
    return "the energy produced by the largest solar powerplant in 1 hour";
  } else if (energy < 10000) {
    return "enough energy to power the USA for 0.2 seconds";
  } else if (energy < 20000) {
    return " enough energy to push the Moon away";
  } else if (50000 < energy && energy < 100000) {
    return "almost enough energy to power my secret laser";
  }
  return "some really clever analogy, probaby involving heated cups of coffee";
}

// Ok this is a joke, I couldn't find proper energy comparissons at the GJoules scale :(
// but it gives you an idea of how I'd handle it
