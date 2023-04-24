// ** Other View Imports
import EditModalView from "./delete-modal"

// ** Redux Imports
import { useDeletePhoneMutation } from "../../../services"

const DeleteModal = ({ state, closeEvent, handleRefetch, id }) => {
  const [delApi] = useDeletePhoneMutation()

  const handleInit = () => {
    handleRefetch()
    closeEvent()
  }

  const delContent = async () => {
    try {
      const {
        data: { status },
      } = await delApi(id)

      if (status === 200) {
        handleInit()

        return
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <EditModalView
      state={state}
      closeEvent={closeEvent}
      delContent={delContent}
    />
  )
}

export default DeleteModal
