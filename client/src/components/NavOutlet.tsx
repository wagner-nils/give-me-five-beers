import { Outlet } from 'react-router-dom';

import Nav from './Nav';

type Props = {};
const NavOutlet = (props: Props) => {
  return (
    <>
      <Outlet />
      <Nav />
    </>
  );
};
export default NavOutlet;
