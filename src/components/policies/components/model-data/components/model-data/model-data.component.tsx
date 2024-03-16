import { CustomSwitch } from "@/common/components/custom-switch/custom-switch.component";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Chip, Grid, Typography } from "@mui/material";
import { Issue } from "../Issue/issue.component";
import { Description } from "../description/description.component";
import { UseBy } from "../use-by/use-by.component";
import { PolicyAccordian } from "../../model-accordian";
import { ModalDataStyle } from "./modal-data.style";

export const ModelData = ({ selectedRow }: any) => {
  const PolicyData = [
    {
      id: 1,
      title: "Description",
      desc: Description,
    },
    {
      id: 2,
      title: "Used by",
      desc: UseBy,
    },
    {
      id: 3,
      title: "Issues over time",
      desc: Issue,
    },
  ];

  return (
    <>
      <Grid container sx={ModalDataStyle.ModalGrid}>
        <Grid item xs={5}>
          <Typography sx={ModalDataStyle.ModalTypo}>
            {selectedRow.policyName}
          </Typography>
        </Grid>
        <Grid item xs={5} sx={ModalDataStyle.ModalSwitch}>
          <Typography sx={ModalDataStyle.ModalHeader}>Active</Typography>
          <CustomSwitch
            defaultChecked={
              selectedRow.policyName === "Suspicious Prompt" ? false : true
            }
          />
        </Grid>
      </Grid>

      <Grid container sx={ModalDataStyle.ModalContainer}>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Action</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={ModalDataStyle.ModalValue}>
            {selectedRow.type}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Source</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={ModalDataStyle.ModalValue}>
            {selectedRow.policyName}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Engines</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={ModalDataStyle.ModalValue}>
            {selectedRow.engine}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={ModalDataStyle.ModalGridContainer}>
          <Typography sx={ModalDataStyle.ModalName}>Severity Level</Typography>
        </Grid>
        <Grid item xs={8}>
          <Chip
            label={selectedRow.severityLevel}
            sx={{
              ...ModalDataStyle.ModalChip,
              background:
                selectedRow.severityLevel === "Critical"
                  ? "#FEF3F2"
                  : selectedRow.severityLevel === "High"
                  ? "#FFF6ED"
                  : selectedRow.severityLevel === "Medium"
                  ? "#FFFAEB"
                  : selectedRow.severityLevel === "Low"
                  ? "#ECFDF3"
                  : "",
              color:
                selectedRow.severityLevel === "Critical"
                  ? "#B42318"
                  : selectedRow.severityLevel === "High"
                  ? "#C4320A"
                  : selectedRow.severityLevel === "Medium"
                  ? "#B54708"
                  : selectedRow.severityLevel === "Low"
                  ? "#027A48"
                  : "",
            }}
            icon={
              <CircleIcon
                sx={{
                  ...ModalDataStyle.ModalCircle,
                  fill:
                    selectedRow.severityLevel === "Critical"
                      ? "#F04438"
                      : selectedRow.severityLevel === "High"
                      ? "#FB6514"
                      : selectedRow.severityLevel === "Medium"
                      ? "#F79009"
                      : selectedRow.severityLevel === "Low"
                      ? "#12B76A"
                      : "",
                }}
              />
            }
          />
        </Grid>
      </Grid>

      <Box sx={ModalDataStyle.ModalData}>
        {PolicyData.map((item: any) => {
          return (
            <Box key={item.id} sx={ModalDataStyle.ModalAccordin}>
              <PolicyAccordian
                id={item.id}
                title={item.title}
                DescCom={item.desc}
                selectedRow={selectedRow}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};
