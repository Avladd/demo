import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { MissionFragment } from "../generated/generated";
import MissionsListItem from "./MissionsListItem";

export default function MissionsList({
  missions,
}: {
  missions: MissionFragment[];
}) {
  // TODO change this to not be hardcoded
  const headers = [
    "Select",
    "Mission name",
    "Launch date",
    "Success",
    "Rocket name",
    "Payload mass (kg)",
  ];
  return (
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell key="header" align="center">
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {missions.map((mission) => (
          <MissionsListItem key={mission.id} mission={mission} />
        ))}
      </TableBody>
    </Table>
  );
}
