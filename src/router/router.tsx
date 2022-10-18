import { Route, Routes as Switch } from 'react-router-dom'

import { Error, Home, Login, NotFound } from 'pages'
import { PageLayout } from 'layouts'
import Routes from './routes'

const Router = () => (
  <Switch>
    <Route element={Login} index={true} />
    <Route path={Routes.LOGIN} element={Login} />
    <Route element={<PageLayout />}>
      <Route path={Routes.HOME} element={Home} />
    </Route>
    <Route path={Routes.ERROR} element={Error} />
    <Route path="*" element={NotFound} />
  </Switch>
)

export default Router
