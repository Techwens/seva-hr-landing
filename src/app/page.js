import Actionform from '@/components/Actionform'
import Banner from '@/components/Banner'
import Effortlessly from '@/components/Effortlessly'
import Features from '@/components/Features'
import Getstarted from '@/components/Getstarted'
import Organizations from '@/components/Organizations'
import Powerfullplatform from '@/components/Powerfullplatform'
import Revoluationhr from '@/components/Revolutionhr'
import Security from '@/components/Security'
import Worktype from '@/components/Worktype'
import React from 'react'

const Home = () => {
  return (
    <section>
      <div style={{marginBlockStart:'5rem'}}></div>
      <Banner/>
      <Organizations/>
      <Revoluationhr/>
      <Features/>
      <Security/>
      <Getstarted/>
      <Effortlessly/>
      <Powerfullplatform/>
      <Worktype/>
      <Actionform/>
    </section>
  )
}

export default Home