import { Outlet } from '@remix-run/react';
import styles from './helper.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Helper() {
  return (
    <>
      <Outlet />
      <div className='helper'>
        <img src='/practice.jpg' alt='practice' />
        <h1>Is this working?</h1>
      </div>
    </>
  );
}
