import { useMatches, Outlet } from '@remix-run/react';
import { QuizHeader } from './QuizHeader';
import { HomeHeader } from './HomeHeader';


export default function Test() {
  
  const matches = useMatches();
  let result = matches.length;
  console.log( matches);

  return (
    <>
    {matches[result-1].pathname ==='/quiz' ? <QuizHeader /> : <HomeHeader />}
     <Outlet />
    </>
  );
}

