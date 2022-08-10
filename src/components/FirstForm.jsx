import { Grid, TextField, Typography } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

const FirstForm = ({ userInfo, setUserInfo, setStep, step }) => {
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
            ¿Cúal es tu nombre?
          </Typography>

          <form>
            <Grid container>
              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <TextField
                  label="Nombre"
                  type="text"
                  fullWidth
                  value={userInfo.firstName}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, firstName: e.target.value });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <TextField
                  label="Segundo nombre"
                  type="text"
                  fullWidth
                  value={userInfo.secondName}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, secondName: e.target.value });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <TextField
                  label="Apellido paterno"
                  type="text"
                  fullWidth
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, firstLastName: e.target.value });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <TextField
                  label="Apellido materno"
                  type="text"
                  fullWidth
                  value={userInfo.secondLastName}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      secondLastName: e.target.value,
                      progressbar: 66,
                    });
                  }}
                  onBlur={() => setStep(2)}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid xs={12} sm={12}>
          {step > 1 && (
            <Grid container xs={12} sm={12} sx={{ mt: 2 }}>
              <TextField
                style={{ width: "100%", backgroundColor: "#f174dc" }}
                inputProps={{ readOnly: true }}
                type="text"
                value={
                  userInfo.firstName +
                  " " +
                  userInfo.secondName +
                  " " +
                  userInfo.firstLastName +
                  " " +
                  userInfo.secondLastName
                }
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FirstForm;
