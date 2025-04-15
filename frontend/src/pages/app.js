import React from 'react'
import Layout from '../components/Layout';


const app = ({ Component,pageProps }) => {
  return (
    <div>
       <Component {...pageProps} />
    </div>
  )
}

export default app