// ** React Imports
import { useState } from "react"

// ** Mui Imports
import { Card, Grid, Typography, Button } from "@mui/material"

// ** Other View Imports
import EditModal from "../../modal/edit-modal"

const PhoneCardView = ({ phone: { name, number, idx }, handleRefetch }) => {
  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleDeleteOpen = () => setOpenDelete(true)
  const handleDeleteClose = () => setOpenDelete(false)

  return (
    <Card sx={{ p: 3 }}>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h5">
            {name} : {number}
          </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Button variant="contained" onClick={handleOpen}>
            수정
          </Button>
        </Grid>
        <Grid item xs={1.5}>
          <Button variant="contained" color="error" onClick={handleDeleteOpen}>
            삭제
          </Button>
        </Grid>
      </Grid>
      {open && (
        <EditModal
          state={open}
          closeEvent={handleClose}
          handleRefetch={handleRefetch}
          id={idx}
        />
      )}
    </Card>
  )
}

export default PhoneCardView
