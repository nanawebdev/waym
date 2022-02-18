import Layout from '../components/layout'
import About from '../components/about'
import Create from '../components/create'
import Explore from '../components/explore'
import Invest from '../components/invest'
import Promo from '../components/promo'
import Start from '../components/start'
import Team from '../components/team'
import React, { useEffect } from 'react'
import WheelIndicator from 'wheel-indicator'
import { useRouter } from 'next/router'

let indicator = null

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/waym') {
      indicator = new WheelIndicator({
        elem: document,
        callback: function (e) {
          if (e.direction === 'down' && window.scrollY < window.innerHeight) {
            indicator.setOptions({ preventMouse: true })
            window.scrollTo(0, window.innerHeight)
            return
          }

          if (e.direction === 'up' && window.scrollY <= window.innerHeight) {
            indicator.setOptions({ preventMouse: true })
            window.scrollTo(0, 0)
            return
          }

          indicator.setOptions({ preventMouse: false })
        },
        preventMouse: true
      })
    }
  }, [])


  return (
    <div className='home'>
      <Promo />
      <Explore />
      <Create />
      <Invest />
      <Start />
      <About />
      <Team />

    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
