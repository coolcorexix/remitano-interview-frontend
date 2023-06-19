import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';

import { history } from '../../pages/app/BrowserRouter';
import { useStores } from '../../stores';
import imgHome from '../../assets/images/home.png'
import { Loading } from '../Loading';
import { LoggedIn } from './LoggedIn';

import { LogInForm } from '../LogInForm'
import * as Sc from './Header.styled';
import { Link } from 'react-router-dom';

export const Header = observer(function Header() {
  const { authStore, userStore } = useStores();
  const [errMsg, setErrMsg] = useState<string>('');
  const location = useLocation();
  const { pathname } = location;
  const { isLoading, isLogged, errorMsg } = authStore;
  const { userInfo } = userStore;

  useEffect(() =>{
    setErrMsg(authStore.errorMsg);
  }, [authStore, authStore.errorMsg?.length]);

  useEffect(() =>{
    userStore.getUserInfo();
  }, [userStore]);


  return (
    <>
      <Sc.HeaderWrapper >
        <div className="header-left">
          <Link to="/">
            <img src={imgHome} alt="Logo" />
            <span>
              Funny Movies
            </span>
          </Link>
        </div>
        <div>
          {pathname !== '/register' ? (
            isLoading ? <Loading /> : (
              <div className="header-right">
                {isLogged ? (
                  <LoggedIn />
                ) : (
                  <div style={{display: 'flex', alignItems: "center"}}>
                    <LogInForm />
                    <Link to="/register">Register</Link>
                  </div>
                )}
                {errorMsg && errMsg &&(
                  <p className="err-msg">
                    {errMsg}
                  </p>
                )}
              </div>
            )
          ) : null}
        </div>
        {isLogged ? (
          <div className='mobile-btn-group'>
            <span>Welcome {userInfo?.displayName || userInfo?.email || '' }</span>
            <button onClick={() => authStore.logout()} type="button">Logout</button>
          </div>
        ) : (
          <div className='mobile-btn-group'>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </Sc.HeaderWrapper>
      {isLogged && (
          <Sc.SharingBtnMobile className='mobile-btn-group'>
            <button onClick={() => history.push('/share')} type="button" >Share a movie</button>
          </Sc.SharingBtnMobile>
        )}
    </>
  );
});