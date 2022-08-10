import { Grid, TextField, Typography } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

const SecondForm = ({ userInfo, setUserInfo, setStep, step }) => {
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
            ¿Cúal es tu fecha de nacimiento?
          </Typography>

          <form>
            <Grid container>
              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <TextField
                  label="Día"
                  type="text"
                  fullWidth
                  value={userInfo.day}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, day: e.target.value });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <TextField
                  label="Mes"
                  type="text"
                  fullWidth
                  value={userInfo.month}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, month: e.target.value });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <TextField
                  label="Año"
                  type="text"
                  fullWidth
                  value={userInfo.year}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, year: e.target.value });
                  }}
                  onBlur={() => setStep(3)}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid xs={12} sm={12}>
          {step > 2 && (
            <Grid container xs={12} sm={12} sx={{ mt: 2 }}>
              <TextField
                style={{ width: "100%", backgroundColor: "#f174dc" }}
                inputProps={{ readOnly: true }}
                type="text"
                value={
                  userInfo.day + "/" + userInfo.month + "/" + userInfo.year
                }
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondForm;
