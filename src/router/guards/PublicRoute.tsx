import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

import MainLayout from '../../components/MainLayout';

const PublicRoute = observer(function PublicRoute() {

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
});

export default PublicRoute;
