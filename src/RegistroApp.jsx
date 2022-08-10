import { Button, Grid, TextField, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import FirstForm from "./components/FirstForm";
import { useState } from "react";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";
import TimerTwoToneIcon from "@mui/icons-material/TimerTwoTone";
import { useEffect } from "react";

export const RegistroApp = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    day: "",
    month: "",
    year: "",
    email: " ",
    cellphone: " ",
    progressbar: 33,
  });

  const [step, setStep] = useState(1);

  return (
    <Grid
      md={6}
      sm={12}
      xs={12}
      container
      direction="column"
      sx={{
        minHeight: "100vh",
        backgroundColor: "secondary.main",
        rowGap: 2,
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        xs={12}
        sm={12}
        sx={{
          backgroundColor: "primary.main",
          height: 200,
          position: "relative",
        }}
      >
        <Grid item sx={{ paddingBottom: 5 }} xs={9} sm={9}>
          <Typography
            variant="h5"
            sx={{ ml: 2, mb: 10, mt: 5, fontWeight: "bold" }}
          >
            Título de formulario
          </Typography>
          <Typography variant="span" sx={{ ml: 2 }}>
            <TimerTwoToneIcon style={{ fontSize: "small", color: "black" }} />
            En menos de 5 minutos
          </Typography>
        </Grid>
        <Grid container xs={3} sm={3} alignItems="center">
          <PendingActionsOutlinedIcon
            style={{
              fontSize: 70,
              color: "white",
            }}
          />
        </Grid>
        <LinearProgress
          style={{ position: "absolute", bottom: 0, width: "100%" }}
          color="colorbar"
          variant="determinate"
          value={userInfo.progressbar}
        />
      </Grid>

      <FirstForm
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        setStep={setStep}
        step={step}
      />

      {step > 1 && (
        <SecondForm
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setStep={setStep}
          step={step}
        />
      )}

      {step > 2 && (
        <ThirdForm
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setStep={setStep}
          step={step}
        />
      )}
    </Grid>
  );
};
