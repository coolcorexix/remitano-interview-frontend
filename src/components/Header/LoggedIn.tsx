import { useEffect} from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../stores';
import { history } from '../../pages/app/BrowserRouter';

import styled from 'styled-components';

export const Wrapper = styled.div`
    button {
      margin-left: 10px;
    }
`;


export const LoggedIn = observer(function LoggedIn() {
  const { authStore, userStore } = useStores();
  const { userInfo } = userStore;

  useEffect(() =>{
    userStore.getUserInfo();
  }, [userStore]);

  return (
    <Wrapper>
      <span>Welcome {userInfo?.displayName || userInfo?.email || '' }</span>
      <button onClick={() => history.push('/share')} type="button" >Share a movie</button>
      <button onClick={() => authStore.logout()} type="button">Logout</button>
    </Wrapper>
  );
});