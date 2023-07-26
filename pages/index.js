import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ScreenFadeWrapper from '../components/ScreenFadeWrapper'
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import Page5 from '../components/Page5';
import Page6 from '../components/Page6'
import Page7 from '../components/Page7'
import Page8 from '../components/Page8'

export default function Home() {
  const [curr, setCurr] = useState(0);
  const components = [
    <Page1 increment={()=>setCurr(curr+1)}/>,
    <Page2 increment={()=>setCurr(curr+1)}/>,
    <Page3 increment={()=>setCurr(curr+1)}/>,
    <Page4 increment={()=>setCurr(curr+1)}/>,
    <Page5 increment={()=>setCurr(curr+1)}/>,
    <Page6 increment={()=>setCurr(curr+1)}/>,
    <Page7 increment={()=>setCurr(curr+1)}/>,
    <Page8 increment={()=>setCurr(0)}/>,
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>What's this?</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className='relative h-screen w-screen bg-gray-100'>
        {
          components.map((comp, idx)=><ScreenFadeWrapper {...{visible: idx===curr, component: comp}}/>)
        }
      </div>
      
    </div>
  )
}
