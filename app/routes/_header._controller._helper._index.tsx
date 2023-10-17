import type { MetaFunction } from '@remix-run/cloudflare';
import styles from './index.css';
export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Index() {
  return (
    <>
      <div className='content'>
        <h1>Hello</h1>
        <h2>Remix</h2>
        <button>Navigate</button>
        <h3>Some description</h3>
      </div>
    </>
  );
}
