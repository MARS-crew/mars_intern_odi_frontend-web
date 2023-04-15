// ** Mui Imports
import {
  Avatar,
  Button,
  CssBaseline,
  Box,
  TextField,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import BasicModal from "../../components/modal/basicModal"

const theme = createTheme()

const RegisterPageView = ({
  open,
  handleClose,
  handleRegister,
  user,
  setUser,
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
            회원가입
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="name"
              name="name"
              onChange={setUser}
              value={user.name}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="id"
              name="id"
              onChange={setUser}
              value={user.id}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              onChange={setUser}
              value={user.password}
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="password check"
              type="password"
              name="passwordC"
              onChange={setUser}
              value={user.passwordC}
              autoFocus
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              회원가입
            </Button>
          </Box>
        </Box>
      </Container>
      <BasicModal state={open} closeEvent={handleClose} message={message} />
    </ThemeProvider>
  )
}

export default RegisterPageView
