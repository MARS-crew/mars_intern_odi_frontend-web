// ** Mui Imports
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  TextField,
  Grid,
} from "@mui/material"

const AddModalView = ({
  state,
  closeEvent,
  message,
  regContent,
  phone,
  setPhone,
}) => {
  return (
    <Dialog open={state}>
      <DialogTitle>{message}</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              label="이름"
              fullWidth
              value={phone.name}
              name="name"
              onChange={setPhone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="전화번호"
              fullWidth
              value={phone.number}
              name="number"
              onChange={setPhone}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeEvent}>취소</Button>
        <Button onClick={regContent}>저장</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddModalView
