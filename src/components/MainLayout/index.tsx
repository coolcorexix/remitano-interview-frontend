import { ReactNode } from "react";

import { Header } from "../Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;