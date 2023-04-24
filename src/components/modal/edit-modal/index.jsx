// ** React Imports
import { useEffect } from "react"

// ** Other View Imports
import EditModalView from "./edit-modal"

// ** Redux Imports
import { useLazyGetPhoneQuery, useUpdatePhoneMutation } from "../../../services"

// ** Other Imports
import useInput from "../../../hooks/useInput"

const EditModal = ({ state, closeEvent, handleRefetch, id }) => {
  const [phone, setPhone, setData] = useInput({
    name: "",
    number: "",
  })

  const [getPhone] = useLazyGetPhoneQuery()
  const [updateApi] = useUpdatePhoneMutation()

  const handleInit = () => {
    handleRefetch()
    closeEvent()
    setData({ name: "", number: "" })
  }

  const modifyContent = async () => {
    for (const key in phone) {
      if (phone[key] === "") {
        alert("데이터를 전부 입력해주세요.")

        return
      }
    }

    try {
      const {
        data: { status },
      } = await updateApi(phone)

      if (status === 200) {
        handleInit()

        return
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (id) {
      getPhone(id)
        .unwrap()
        .then(({ responseData }) => setData(responseData))
    }
  }, [id])

  return (
    <EditModalView
      state={state}
      closeEvent={closeEvent}
      modifyContent={modifyContent}
      phone={phone}
      setPhone={setPhone}
    />
  )
}

export default EditModal
