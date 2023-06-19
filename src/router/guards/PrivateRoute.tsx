import { Outlet, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import MainLayout from '../../components/MainLayout';
import { useStores } from '../../stores';

const PrivateRoute = observer(function PrivateRoute() {
  const { authStore} = useStores();

  if (!authStore.isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
});

export default PrivateRoute;
