// ** Router Imports
import { Link } from "react-router-dom"

// ** Mui Imports
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import BasicModal from "../../components/modal/basicModal"

const theme = createTheme()

const LoginPageView = ({
  user,
  setUser,
  handleLogin,
  open,
  handleClose,
  message,
}) => {
  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="id"
              name="id"
              value={user.id}
              onChange={setUser}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              value={user.password}
              onChange={setUser}
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs />
              <Grid item>
                <Link to="/register">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <BasicModal state={open} closeEvent={handleClose} message={message} />
    </ThemeProvider>
  )
}

export default LoginPageView
