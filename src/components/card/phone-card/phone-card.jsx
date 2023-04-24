// ** Mui Imports
import { Card, Grid, Typography, Button } from "@mui/material"

const PhoneCardView = ({ phone: { name, number } }) => {
  return (
    <Card sx={{ p: 3 }}>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h5">
            {name} : {number}
          </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Button variant="contained">수정</Button>
        </Grid>
        <Grid item xs={1.5}>
          <Button variant="contained" color="error">
            삭제
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default PhoneCardView
