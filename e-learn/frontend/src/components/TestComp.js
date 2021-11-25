import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright(props) {
  return (
    <Typography {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/">
        E-Learn
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function TestComp() {
  return (
    <div>
      <Copyright variant="body2" color="text.secondary" align="center" />
    </div>
  );
}

export default TestComp;
