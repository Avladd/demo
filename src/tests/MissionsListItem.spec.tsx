import MissionsListItem from "../components/MissionsListItem";
import { screen, render } from "@testing-library/react";
import { MissionFragment } from "../generated/generated";
import { Table, TableBody } from "@mui/material";

const fakeMission: MissionFragment = {
  id: "1",
  launch_date_utc: new Date().toUTCString(),
  links: { article_link: "" },
  launch_success: true,
  mission_name: "My Mission Name",
  rocket: {
    rocket_name: "Sparrow",
    second_stage: {
      payloads: [
        {
          payload_mass_kg: 1000,
        },
      ],
    },
  },
};
describe("<MissionsListItem>", () => {
  it("should show that tests weren't forgotten or ignored", () => {
    render(
      <>
        <Table>
          <TableBody>
            <MissionsListItem mission={fakeMission} />
          </TableBody>
        </Table>
      </>
    );
    screen.getByText(fakeMission.mission_name!);
  });
});
