import { Link, Outlet } from '@remix-run/react';
import styles from './auth.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Auth() {
  return (
    <>
      <div className='auth'>
        <Link to='/quiz/blog'>Blog</Link>
        <Link to='/quiz/about'>About Us</Link>
        <Link to='/quiz/rebates'>Find Rebates</Link>
        <Link to='/quiz/savings'>Discover Savings</Link>
        <Link to='/quiz/stuff'>Other Stuff</Link>
      </div>
      <div className='auth-button'>
        <h1>button</h1>
      </div>
      <Outlet />
    </>
  );
}
