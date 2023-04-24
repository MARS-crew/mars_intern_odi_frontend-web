// ** Mui Imports
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material"

const DeleteModalView = ({ state, closeEvent, delContent }) => {
  return (
    <Dialog open={state}>
      <DialogTitle>전화번호 삭제</DialogTitle>
      <DialogContent>전화번호를 삭제하시겠습니까?</DialogContent>
      <DialogActions>
        <Button onClick={closeEvent}>취소</Button>
        <Button onClick={delContent}>확인</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteModalView
