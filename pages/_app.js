import { useState } from "react";
import "../styles/globals.css";
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
 
 
export default function MyApp({
  Component,
  pageProps,
  example,
}) {
    return (
        <div className="font-rubik font-medium">
          <Component {...pageProps} />
        </div >
    )
}
 
