import { Button, Grid, TextField, Typography } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useState } from "react";

const ThirdForm = ({ userInfo, setUserInfo, setStep, step }) => {
  const [formFlag, setformFlag] = useState(false);

  const btnStart = () => {
    setformFlag(true);

    window.sessionStorage.setItem("userInfo", usuario);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  const usuario = [
    "Fecha de nacimiento: " +
      userInfo.day +
      "/" +
      userInfo.month +
      "/" +
      userInfo.year,
    "Correo electronico: " + userInfo.email,
    "Telefóno celular: " + userInfo.cellphone,
    "Nombre: " +
      userInfo.firstName +
      " " +
      userInfo.secondName +
      " " +
      userInfo.firstLastName +
      " " +
      userInfo.secondLastName,
  ];

  return (
    <Grid
      container
      style={{ paddingRight: 1, background: "white" }}
      xs={12}
      sm={12}
      direction="row"
    >
      <Grid container justifyContent="center" xs={4} sm={4}>
        <AccountBoxOutlinedIcon style={{ fontSize: 60 }} />
      </Grid>

      <Grid container justifyContent="end" xs={8} sm={7} sx={{ pr: 1 }}>
        <Grid
          xs={11}
          sm={11}
          container
          justifyItems="end"
          sx={{ backgroundColor: "#E0E0E0", padding: 3, borderRadius: "none" }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>
            Datos de contacto
          </Typography>

          <form>
            <Grid container>
              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo electrónico"
                  type="text"
                  fullWidth
                  value={userInfo.email}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, email: e.target.value });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <TextField
                  label="Télefono celular"
                  type="text"
                  fullWidth
                  value={userInfo.cellphone}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, cellphone: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={12}>
            <Button
              style={{ background: "#f64283", textTransform: "none" }}
              variant="contained"
              fullWidth
              onClick={btnStart}
              onSubmit={handleSubmit}
            >
              Iniciar
            </Button>
            {formFlag == true && (
              <Grid
                item
                xs={12}
                sm={12}
                sx={{
                  mt: 2,
                  backgroundColor: "#f174dc",
                  borderRadius: 1,
                  padding: 2,
                }}
              >
                <Typography>
                  Fecha de nacimiento:
                  {userInfo.day + " " + userInfo.month + " " + userInfo.year}
                </Typography>

                <Typography>
                  Correo Electrónico:
                  {userInfo.email}
                </Typography>

                <Typography>Teléfono celular:{userInfo.cellphone}</Typography>

                <Typography>
                  Nombre:
                  {" " +
                    userInfo.firstName +
                    " " +
                    userInfo.secondName +
                    " " +
                    userInfo.firstLastName +
                    " " +
                    userInfo.secondLastName}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ThirdForm;
