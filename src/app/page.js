import Actionform from '@/components/Actionform'
import Banner from '@/components/Banner'
import Effortlessly from '@/components/Effortlessly'
import Features from '@/components/Features'
import Getstarted from '@/components/Getstarted'
import Organizations from '@/components/Organizations'
import Powerfullplatform from '@/components/Powerfullplatform'
import Revolutionhr from '@/components/Revolutionhr'
import Security from '@/components/Security'
import Worktype from '@/components/Worktype'

const Home = () => {
  return (
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
  )
}

export default Home