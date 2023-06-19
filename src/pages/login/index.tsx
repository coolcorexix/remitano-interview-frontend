import { Navigate } from 'react-router-dom';

import { LogInForm } from '../../components/LogInForm';
import { useStores } from '../../stores';

function LogIn() {
  const { authStore } = useStores();

  if(authStore.isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <LogInForm isPage={true} />
    </div>
  )
}

export default LogIn;