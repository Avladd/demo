import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportIcon from "@mui/icons-material/Report";
import { MissionFragment } from "../generated/generated";

export default function MissionsListItem({
  mission,
}: {
  mission: MissionFragment;
}) {
  return (
    <TableRow>
      <TableCell align="center">
        <Checkbox name={mission.id || ""} />
      </TableCell>
      <TableCell>
        <Typography variant="body1" component="p">
          {mission.mission_name}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body2" component="span" align="center">
          {new Date(mission.launch_date_utc).toDateString()}
        </Typography>
      </TableCell>
      <TableCell align="center">
        {mission.launch_success ? (
          <CheckCircleIcon color="success" />
        ) : (
          <ReportIcon color="error" />
        )}
      </TableCell>
      <TableCell align="center">
        <Typography variant="body2" component="span">
          {mission.rocket?.rocket_name}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body2" component="span">
          {mission.rocket?.second_stage?.payloads?.reduce(
            (acc, cur) => acc + (cur?.payload_mass_kg ?? 0),
            0
          )}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
