import { Outlet } from '@remix-run/react';
import styles from './helper.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Helper() {
  return (
    <>
      <div className='helper'>
        <img src='/practice.jpg' alt='practice'></img>
      </div>
      <Outlet />
    </>
  );
}
