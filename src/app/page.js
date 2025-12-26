import Features from '@/components/Features'
import Getstarted from '@/components/Getstarted'
import Organizations from '@/components/Organizations'
import Powerfullplatform from '@/components/Powerfullplatform'
import Revoluationhr from '@/components/Revolutionhr'
import Security from '@/components/Security'
import React from 'react'

const Home = () => {
  return (
    <section>
      <div style={{marginBlockStart:'5rem'}}></div>
      <Organizations/>
      <Revoluationhr/>
      <Features/>
      <Security/>
      <Getstarted/>
      <Powerfullplatform/>
    </section>
  )
}

export default Home