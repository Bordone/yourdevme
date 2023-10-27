import { Outlet } from '@remix-run/react';
import styles from './video.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Video() {
  return (
    <>
      <img className='video' src='./headshot.jpg' alt='some pictures' />
      <div className='body'>
        <Outlet />
      </div>
    </>
  );
}
