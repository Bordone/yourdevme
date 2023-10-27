import type { MetaFunction } from '@remix-run/cloudflare';
import styles from '~/index.css';
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
        <div className='h1'>
          <h1>Hello</h1>
        </div>
        <div className='h2'>
        <h2>Remix</h2>
        </div>
        <div className='buttons'>
        <button>Navigate</button>
        <h3>Some description</h3>
        </div>
      </div>
      <div className='content-button'>
        <h1>Button</h1>
      </div>
    </>
  );
}
