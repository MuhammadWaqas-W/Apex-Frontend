/*eslint-disable react/no-unescaped-entities */

import chat from "@/common/assets/images/chat.svg";
import insights from "@/common/assets/images/insights.svg";
import issuesby from "@/common/assets/images/issuesby.svg";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import userIcon from "@/common/assets/images/user.svg";
import chatBot from "@/common/assets/images/chatbot.svg";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Image from "next/image";
import Link from "next/link";
import { styles } from "./model-accordion.style";
import useModalAccordion from "./use-modal-accordion.hook";

export default function ModelAccordian() {
  const { expanded, handleChange } = useModalAccordion();

  return (
    <div>
      <Accordion
        expanded={expanded.includes("panel1")}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={styles.accordianBg}
        >
          <Typography sx={styles.title}>
            <Image src={insights} alt="" style={styles.icon} />
            Insights
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.desc}>
          <Box>
            <List
              sx={{
                fontSize: "14px",
                listStyleType: "disc",
                listStylePosition: "inside",
              }}
            >
              <ListItem sx={{ display: "list-item" }}>
                This user uploaded 43 files to OpenAI Public GPT 4,
                <span style={styles.fontWeight}>5 contain PII</span>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                This engine used is a <strong>Public Engine</strong>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                The Engine has <strong>50 additional violation,</strong> 26 are
                also about <strong>outgoing PII</strong>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                User is <strong>usually not using this engine</strong> and
                mostly active on Bard
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                User <strong>never uploaded a file</strong> to any engine before
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded.includes("panel2")}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={styles.accordianBg}
        >
          <Typography sx={styles.title}>
            <Image src={issuesby} alt="" style={styles.icon} />
            Issues Info
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.desc}>
          <Box>
            <Grid container spacing={2} sx={styles.descText}>
              <Grid item sm={5} xs={7} sx={styles.margin}>
                <Typography sx={styles.voilation}>Violation Type</Typography>
                <Chip
                  sx={styles.chip}
                  label={
                    <Typography sx={styles.chipText}>
                      Outgoing Data:
                      <strong>PII</strong>
                    </Typography>
                  }
                />
              </Grid>
              <Grid item sm={4} xs={4} sx={styles.margin}>
                <Typography sx={styles.voilation}>Source</Typography>
                <Typography sx={styles.appex}>Apexchat</Typography>
              </Grid>
              <Grid item sm={3} xs={7} sx={styles.margin}>
                <Typography sx={styles.voilation}>Engine</Typography>
                <Chip size="small" label="GPT 4" variant="outlined" />
              </Grid>
              <Grid item sm={5} xs={4} sx={styles.margin}>
                <Typography sx={styles.voilation}>Role</Typography>
                <Typography>User</Typography>
              </Grid>
              <Grid item sm={4} xs={7} sx={styles.margin}>
                <Typography sx={styles.voilation}>Timestamp</Typography>
                <Typography sx={styles.appex}>Aug 14, 2023 10:46 AM</Typography>
              </Grid>
              <Grid item sm={3} xs={4} sx={styles.margin}>
                <Typography sx={styles.voilation}>Severity</Typography>
                <Chip
                  label="High"
                  sx={styles.highChip}
                  icon={<CircleIcon sx={styles.circleIcon} />}
                />
              </Grid>
              <Grid item sm={5} xs={8} sx={styles.margin}>
                <Typography sx={styles.voilation}>User Email</Typography>
                <Typography sx={styles.appex}>
                  Annasmith@untitled.com
                </Typography>
              </Grid>
              <Grid item sm={6} xs={8} sx={styles.margin}>
                <Typography sx={styles.voilation}>Conversation ID</Typography>
                <Typography sx={styles.appex}>
                  053fab19-bb0d-44f2-96a6-37a0a1cfc4a0
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded.includes("panel3")}
        onChange={handleChange("panel3")}
        sx={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={styles.accordianBg}
        >
          <Typography sx={styles.title}>
            <Image src={chat} alt="" style={styles.icon} />
            Chat Log
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.desc}>
          <Box sx={styles.terboBox}>
            {/* <Typography sx={styles.terboText}>Chat 3.5 Turbo</Typography> */}

            <Grid container sx={styles.question}>
              <Grid item lg={1} sm={2} xs={2}>
                <Image src={userIcon} alt="usericon" />
              </Grid>
              <Grid item lg={11} sm={10} xs={10}>
                Can you please summarize for me the following files and tell me
                what are the projections for 2024-2025 fiscal year?
              </Grid>
            </Grid>
            <Grid container sx={styles.answer}>
              <Grid item lg={1} sm={2} xs={2}>
                <Image src={chatBot} alt="usericon" />
              </Grid>

              <Grid item lg={11} sm={10} xs={10}>
                Of course! Please upload the files you'd like summarized, and
                I'll do my best to provide you with the information you're
                seeking. If the files contain financial or other specific
                projections for the fiscal years 2024-2025, I'll be sure to
                highlight them for you.
              </Grid>
            </Grid>
            <Grid container sx={styles.question}>
              <Grid item lg={1} sm={2} xs={2}>
                <Image src={userIcon} alt="usericon" />
              </Grid>
              <Grid item lg={11} sm={10} xs={10}>
                <Typography>Here you go</Typography>
                <Box sx={styles.files}>
                  <Typography>
                    <DescriptionOutlinedIcon />
                  </Typography>
                  <Typography>All_employees_salaries.xsls</Typography>
                </Box>
                <Box sx={styles.files}>
                  <Typography>
                    <DescriptionOutlinedIcon />
                  </Typography>
                  <Typography>EU_income.xsls</Typography>
                </Box>
                <Box sx={styles.files}>
                  <Typography>
                    <DescriptionOutlinedIcon />
                  </Typography>
                  <Typography>Bussiness_partnerships.docs</Typography>
                </Box>
                <Box sx={styles.files}>
                  <Typography>
                    <DescriptionOutlinedIcon />
                  </Typography>
                  <Typography>product_roadmap.pptx</Typography>
                </Box>
                <Box sx={styles.files}>
                  <Typography>
                    <DescriptionOutlinedIcon />
                  </Typography>
                  <Typography>my_plans.docs</Typography>
                </Box>
                <Typography sx={styles.fileBtn}>+38 files</Typography>
              </Grid>
            </Grid>

            {/* <Typography sx={styles.terboDesc}>
              Ah, I see. You only want to import the package for the server-side
              parts of your application.
            </Typography>
            <Typography sx={styles.terboDesc}>
              You can make use of Next.js API routes. API routes provide a
              solution to build your API with Next.js, allowing you to import
              your package there. This way, the import will only affect the
              server-side part of your application since API routes only run on
              the server side.
            </Typography> */}

            {/* <Typography sx={styles.terboDesc}>
              Create a new file under the <strong>/pages/api</strong> directory,
              which we can call <strong>server.js</strong> for example, and you
              can import your package there:
            </Typography> */}
            {/* <Paper elevation={3} sx={styles.paperBox}>
              <Typography variant="body2" sx={styles.paperCode}>
                {`
                // Import the package here
                import MyPackage from 'my-package';
                // You can then use your package within this API route
                export default function handler(req, res) {
                // Use your package here, remember this route won't be accessible on the client-side
                ...
                res.status(200).json({ name: 'API Route' })
                }`}
              </Typography>
            </Paper> */}
            {/* <Typography sx={styles.codeDesc}>
              Remember that you can make a call to this API route from your
              pages if you need to use some functionality of the package.
              However, the package itself will not be imported on the client,
              and there will be no additional load on the client-side bundle.
            </Typography> */}
          </Box>
          {/* <Box sx={styles.mailBox}>
            <Link href="mailto:phoenix@untitledui.com" style={styles.mail}>
              phoenix@untitledui.com
            </Link>
          </Box> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
