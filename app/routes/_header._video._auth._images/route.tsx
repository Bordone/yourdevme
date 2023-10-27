import { Outlet } from '@remix-run/react';
import styles from './images.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Images() {
  return (
    <>
      <Outlet />
      <picture className='image-container'>
         <img
           className='image'
           sizes="(max-width: 728px) 100vw, 728px"
           srcset="
          ./71104072_10156717633726172_3575362387596804096_o_esaxpt_c_scale,w_280.jpg 280w,
          ./71104072_10156717633726172_3575362387596804096_o_esaxpt_c_scale,w_405.jpg 405w,
          ./71104072_10156717633726172_3575362387596804096_o_esaxpt_c_scale,w_514.jpg 514w,
          ./71104072_10156717633726172_3575362387596804096_o_esaxpt_c_scale,w_603.jpg 603w,
          ./71104072_10156717633726172_3575362387596804096_o_esaxpt_c_scale,w_688.jpg 688w,
          ./71104072_10156717633726172_3575362387596804096_o_esaxpt_c_scale,w_725.jpg 725w,
          ./71104072_10156717633726172_3575362387596804096_o_esaxpt_c_scale,w_728.jpg 728w"
        src="./71104072_10156717633726172_3575362387596804096_o_esaxpt_c_scale,w_728.jpg"
        alt="stuff and things"/>
    </picture>
    <div className='image-button'>
      <h1>Button</h1>
    </div>
    </>
  );
}
