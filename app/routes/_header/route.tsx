import {  Outlet } from '@remix-run/react';
import { HomeHeader } from './HomeHeader';
import styles from './homeheader.css'


export const links = () => {
  return[{rel: 'stylesheet', href: styles}]
}

export default function Test() {

  return (
    <>
     <HomeHeader/>
     <div className='body'>
     <Outlet />
     </div>
    </>
  );
}

