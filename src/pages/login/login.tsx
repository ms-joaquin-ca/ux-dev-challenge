import { Button } from 'components'
import { useNavigate } from 'react-router-dom'

import { Routes } from 'router'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Button onClick={() => navigate(Routes.HOME)}>Go Home</Button>
    </div>
  )
}

export default Login
