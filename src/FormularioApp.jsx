import { Grid } from "@mui/material";
import React from "react";
import { RegistroApp } from "./RegistroApp";
import { AppTheme } from "./theme/AppTheme";

export const FormularioApp = () => {
  return (
    <AppTheme>
      <Grid
        style={{ background: "black" }}
        container
        xs={12}
        sm={12}
        flexDirection="column"
        alignItems="center"
      >
        <RegistroApp />
      </Grid>
    </AppTheme>
  );
};
