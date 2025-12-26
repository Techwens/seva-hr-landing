import Features from '@/components/Features'
import Organizations from '@/components/Organizations'
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
    </section>
  )
}

export default Home