import { Button } from 'components'
import { useNavigate } from 'react-router-dom'

import { Routes } from 'router'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Button onClick={() => navigate(Routes.LOGIN)}>Go Login</Button>
    </div>
  )
}

export default Home
