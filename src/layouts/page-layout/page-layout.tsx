import { Outlet } from 'react-router-dom'
import { PageLayoutContainer } from './page-layout.styles'

const PageLayout = () => {
  return (
    <PageLayoutContainer>
      <Outlet />
    </PageLayoutContainer>
  )
}

export default PageLayout
