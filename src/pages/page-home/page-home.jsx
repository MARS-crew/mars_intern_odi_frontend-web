// ** React Imports
import { useState } from "react"

// ** Mui Imports
import { Grid, Card, Typography, Button } from "@mui/material"

// ** Other View Imports
import AddModal from "../../components/modal/add-modal"
import PhoneCard from "../../components/card/phone-card"

const HomePageView = ({ phoneData, refetch }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Grid container spacing={6} sx={{ mt: 10 }}>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ p: 5 }}>
              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <Typography variant="h4">Phone Book</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" fullWidth onClick={handleOpen}>
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {phoneData.map((item) => (
            <Grid item xs={12} key={item.idx}>
              <PhoneCard phone={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={3} />
      <AddModal state={open} closeEvent={handleClose} handleRefetch={refetch} />
    </Grid>
  )
}

export default HomePageView
