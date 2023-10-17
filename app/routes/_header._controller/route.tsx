import { Link, Outlet} from '@remix-run/react';
import styles from './helper.css'

export function links(){
    return [{rel:'stylesheet', href: styles}]
}


export default function Controller() {
  return (
    <>
    <div className='controller'>
      <Link to='/quiz/blog'>Blog</Link>
      <Link to='/quiz/about'>About Us</Link>
      <Link to='/quiz/rebates'>Find Rebates</Link>
      <Link to='/quiz/savings'>Discover Savings</Link>
      <Link to='/quiz/stuff'>Other Stuff</Link>
    </div>
    <Outlet/>
    </>
  );
}
