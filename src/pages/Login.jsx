import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../toast/toast";

//firebase
import { auth } from "../utils/firebase"

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhNTE5MDc0NmU5M2JhZTI0OWIyYWE3YzJhYTRlMzA2M2UzNDFlYzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd29ybm9ncmFtIiwiYXVkIjoid29ybm9ncmFtIiwiYXV0aF90aW1lIjoxNjk2MjI3NjcxLCJ1c2VyX2lkIjoiajNCaVBndktWd2h1M2VZY3NuQVNDZUNlZzF4MiIsInN1YiI6ImozQmlQZ3ZLVndodTNlWWNzbkFTQ2VDZWcxeDIiLCJpYXQiOjE2OTYyMjc2NzEsImV4cCI6MTY5NjIzMTI3MSwiZW1haWwiOiJhc3RydW1tZW50b3JzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhc3RydW1tZW50b3JzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EvH20sft13n3hv8eyBDejR0fv8f-BIENcmz4IIQSb3jXYfBRZvA8oc8lNxMdxp69UggP2cVx9xDELHJz6LmE2CP_Jyez8osn3ROFEbwLHxak06ZZWRvKsRF-sMQ1Rdd51CYn8G33qyakP2OchkrKdq8D81HqBoZ5rauRO27_qMJeiLXdP53szU_PlGf_J3JdCJRw6A3RU_VStX6Thj9A72Fz5RH5Bw7fTzBpbmRMflamg1sBgt9NEy_HLPbQ5LYRiOvXe0h5rq-1cltUWzkJ_8d92aeizH9TbKsIcjM5hI430MGXJNVzP8waBIOL-fy1CDk8gJTss-541er-Y6NxYw"

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const  password= data.get("password")

    try {
      const request = auth.signInWithEmailAndPassword(email, password);
      request;
      request.then((result) => {
        let accessToken = result.user.multiFactor.user.accessToken;
        localStorage.setItem('accessToken', accessToken);
        toastSuccess("User Signed In Successfully");
        navigate('/')
      });
    } catch (error) {
      toastError(error.message);
      event.preventDefault(false);

    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
            }}
            alt="Ava"
            src="https://trolologuy.github.io/me.png"
            className="border-4"
          />

          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
