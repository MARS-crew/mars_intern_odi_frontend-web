// ** Other View Imports
import { useSavePhoneMutation } from "../../../services"
import AddModalView from "./add-modal"
import useInput from "../../../hooks/useInput"

const AddModal = ({ state, closeEvent, message, handleRefetch }) => {
  const [phone, setPhone, setData] = useInput({
    name: "",
    number: "",
  })
  const [saveApi] = useSavePhoneMutation()

  const handleInit = () => {
    handleRefetch()
    closeEvent()
    setData({ name: "", number: "" })
  }

  const regContent = async () => {
    for (const key in phone) {
      if (phone[key] === "") {
        alert("데이터를 전부 입력해주세요.")

        return
      }
    }

    try {
      const {
        data: { status },
      } = await saveApi(phone)

      if (status === 200) {
        handleInit()

        return
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <AddModalView
      state={state}
      closeEvent={closeEvent}
      message={message}
      regContent={regContent}
      phone={phone}
      setPhone={setPhone}
    />
  )
}

export default AddModal
