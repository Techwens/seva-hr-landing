import React from 'react'
import Banner from '../components/Banner'
import Organizations from '../components/Organizations'
import Revolutionhr from '../components/Revolutionhr'
import Features from '../components/Features'
import Security from '../components/Security'
import Getstarted from '../components/Getstarted'
import Effortlessly from '../components/Effortlessly'
import Powerfullplatform from '../components/Powerfullplatform'
import Worktype from '../components/Worktype'
import Actionform from '../components/Actionform'

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <Organizations />
        <Revolutionhr />
        <div id='features-section'>
          <Features />
        </div>
        <div id='customization-section'>
          <Security />
        </div>
        <Getstarted />
        <Effortlessly />
        <div id='compliance-section'>
          <Powerfullplatform />
        </div>
        <Worktype />
        <div id='contact-section'>
          <Actionform />
        </div>
      </main>
    </>
  )
}

export default Home