import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <div style={{ backgroundColor: 'black', width: '100%', height: '100vh' }}>
      <Outlet />
    </div>
  )
}

export default PageLayout
