import { History, createBrowserHistory } from 'history';
import { useLayoutEffect, useState, useEffect } from 'react';
import { Router } from 'react-router-dom';

import { authVerifySession } from '../../helpers/authVerifySession';

export const history = createBrowserHistory({ window });

interface BrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
  history: History;
}

export const BrowserRouter = ({
  basename,
  children,
  history,
}: BrowserRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  useEffect(() => {
    const unListen = history.listen(() => {
      authVerifySession();
    });

    return unListen;
  }, [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};
