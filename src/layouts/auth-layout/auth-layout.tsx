import { Outlet } from 'react-router-dom'
import { AuthLayoutContainer } from './auth-layout.styles'

const AuthLayout = () => {
  return (
    <AuthLayoutContainer>
      <Outlet />
    </AuthLayoutContainer>
  )
}

export default AuthLayout
