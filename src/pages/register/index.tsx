import { Navigate } from 'react-router-dom';

import { RegisterForm } from '../../components/RegisterForm';
import { useStores } from '../../stores';

function Register() {
  const { authStore } = useStores();

  if(authStore.isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <RegisterForm />
    </div>
  )
}

export default Register;