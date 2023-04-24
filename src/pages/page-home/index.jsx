// ** React Imports
import { useMemo } from "react"

// ** Other View Imports
import HomePageView from "./page-home"

// ** Redux Imports
import { useGetPhoneListQuery } from "./../../services"

// ** Other Imports
import { isUndefined } from "lodash"

const HomePage = () => {
  const { data, refetch } = useGetPhoneListQuery()

  const phoneData = useMemo(() => (isUndefined(data) ? [] : data.responseData))

  return <HomePageView phoneData={phoneData} refetch={refetch} />
}

export default HomePage
