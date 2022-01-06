import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button } from "@mui/material";

const AnalysisSection = ({ analysisForUser }) => {
  const [selectedKey, setSelectedKey] = useState();

  const headerKeys = Object.keys(analysisForUser);

  let dataKeys;

  if (selectedKey) {
    dataKeys = Object.keys(analysisForUser[selectedKey][0]);
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Analysis</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {headerKeys.map((key) => (
            <Button onClick={() => setSelectedKey(key)}>{key}</Button>
          ))}
        </div>
        <div>
          <div>
            {selectedKey && (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {dataKeys.map((dataKey) => (
                        <TableCell>{dataKey}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analysisForUser[selectedKey].map((row) => {
                      return (
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          {dataKeys.map((key) => (
                            <TableCell>{row[key]}</TableCell>
                          ))}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

AnalysisSection.propTypes = {
  props: PropTypes,
};

const mapStateToProps = ({ profileReducer }) => ({
  analysisForUser: profileReducer.analysisForUser,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AnalysisSection);
