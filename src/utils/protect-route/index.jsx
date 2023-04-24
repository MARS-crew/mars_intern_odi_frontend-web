import { useMemo } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectMe } from "../../store/app/auth"

export function ProtectRoute() {
  const { accessToken } = useSelector(selectMe)

  const isAuthorization = useMemo(() => {
    return accessToken !== "" ? true : false
  }, [accessToken])

  return isAuthorization ? <Outlet /> : <Navigate to="/login" />
}

export function PublicRoute() {
  const { accessToken } = useSelector(selectMe)

  const isAuthorization = useMemo(() => {
    return accessToken !== "" ? true : false
  }, [accessToken])

  return isAuthorization ? <Navigate to="/" /> : <Outlet />
}
