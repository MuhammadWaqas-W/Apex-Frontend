"use client";

import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";
import CustomizedAccordions from "./components/accordion/accordion.component";
import { POLICIES_ACCORDION_DATA } from "./policies.constant";
import { POLICIES_ACCESS_USAGE_DATA } from "./policies.constant";
import usePolicies from "./use-policies.hook";
import { styles } from "./policy.style";

function Policies() {
  const { openModal, setOpenModal, selectedRow, setSelectedRow } =
    usePolicies();

  const ACCESS_USAGE_HEADER = [
    { id: 1, header: "Policy name", accessor: "policyName" },
    { id: 2, header: "Category", accessor: "category" },
    { id: 3, header: "Engines", accessor: "engine" },
    {
      id: 4,
      header: "Severity Level",
      accessor: "severityLevel",
      cell: (data: any) => {
        return (
          <IconButton sx={styles.iconBtn}>
            <Chip
              label={data}
              sx={{
                ...styles.severityChip,
                color:
                  data === "Medium"
                    ? Colors.brown
                    : data === "Critical"
                    ? Colors.darkBrown
                    : Colors.defaultBrown,
                bgcolor:
                  data === "Medium"
                    ? Colors.primaryWhite
                    : data === "Critical"
                    ? Colors.secondaryWhite
                    : Colors.defaultWhite,
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    color:
                      data === "Medium"
                        ? `${Colors.orange} !important`
                        : data === "Critical"
                        ? `${Colors.darkBrown} !important`
                        : data === "High"
                        ? `${Colors.orange} !important`
                        : `${Colors.defaultBrown} !important`,
                    ...styles.severityLevel,
                  }}
                />
              }
            />
          </IconButton>
        );
      },
    },
    {
      id: 5,
      header: "",
      accessor: "status",
      cell: (data: any) => {
        return (
          <>
            {data ? (
              <IconButton sx={styles.iconBtn}>
                <Chip
                  label={data}
                  sx={{
                    ...styles.statusChip,
                    color: data === "New" ? Colors.white : Colors.defaultBrown,
                    bgcolor: data === "New" ? Colors.blue : Colors.defaultWhite,
                    p: 0,
                  }}
                />
              </IconButton>
            ) : (
              ""
            )}
          </>
        );
      },
    },
  ];

  const POLICY_TABLE_HEADER = [
    { id: 1, header: "Policy name", accessor: "policyName" },
    { id: 2, header: "Action ", accessor: "type" },
    {
      id: 3,
      header: "Engines",
      accessor: "engine",
      cell: (data: any) => {
        return (
          <IconButton sx={styles.engine}>
            <Typography sx={styles.chip}>{data}</Typography>
          </IconButton>
        );
      },
    },
    {
      id: 4,
      header: "Severity Level",
      accessor: "severityLevel",
      cell: (data: any) => {
        return (
          <IconButton sx={styles.iconBtn}>
            <Chip
              label={data}
              sx={{
                ...styles.severityChip,
                color:
                  data === "Medium"
                    ? Colors.brown
                    : data === "Critical"
                    ? Colors.darkBrown
                    : data === "Low"
                    ? Colors.textGreen
                    : data === "High"
                    ? Colors.textHigh
                    : "",
                bgcolor:
                  data === "Medium"
                    ? Colors.primaryWhite
                    : data === "Critical"
                    ? Colors.secondaryWhite
                    : data === "Low"
                    ? Colors.primaryGreen
                    : data === "High"
                    ? Colors.defaultWhite
                    : "",
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    fill:
                      data === "Medium"
                        ? `${Colors.orange} !important`
                        : data === "Critical"
                        ? `${Colors.darkBrown} !important`
                        : data === "High"
                        ? Colors.circleHigh
                        : data === "Low"
                        ? Colors.circleLow
                        : `${Colors.defaultBrown} !important`,

                    ...styles.severityLevel,
                  }}
                />
              }
            />
          </IconButton>
        );
      },
    },
    {
      id: 5,
      header: "",
      accessor: "status",
      cell: (data: any) => {
        return (
          <>
            {data ? (
              <IconButton sx={styles.iconBtn}>
                <Chip
                  label={data}
                  sx={{
                    ...styles.statusChip,
                    color: data === "New" ? Colors.white : Colors.defaultBrown,
                    bgcolor: data === "New" ? Colors.blue : Colors.defaultWhite,
                    p: 0,
                  }}
                />
              </IconButton>
            ) : (
              ""
            )}
          </>
        );
      },
    },
  ];

  return (
    <Grid container item xs={12} sx={styles.pliciesSec}>
      <Typography sx={{ ...styles.policiesText, color: Colors.primary }}>
        Continuously maintain your AI posture management and detect threats
      </Typography>
      <Grid item xs={12} sx={styles.policies_grid}>
        {POLICIES_ACCORDION_DATA.map((item: any) => {
          return (
            <Box key={item.id} className="policyTable">
              <CustomizedAccordions
                id={item.id}
                title={item.value}
                component={
                  item.value === "Access & Usage" ? (
                    <CustomTable
                      rows={POLICIES_ACCESS_USAGE_DATA}
                      column={ACCESS_USAGE_HEADER}
                      setOpenModal={setOpenModal}
                      isSwitch={true}
                      isTableHead={true}
                      setSelectedRow={setSelectedRow}
                      isPolicy={true}
                    />
                  ) : (
                    <CustomTable
                      rows={item.policiesData}
                      column={POLICY_TABLE_HEADER}
                      setOpenModal={setOpenModal}
                      isSwitch={true}
                      isTableHead={true}
                      setSelectedRow={setSelectedRow}
                      isPolicy={true}
                    />
                  )
                }
              />
            </Box>
          );
        })}
      </Grid>
      <CustomDialog
        selectedRow={selectedRow}
        thead={"policy"}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Grid>
  );
}

export default Policies;
