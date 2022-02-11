import About from '../components/about'
import Create from '../components/create'
import Explore from '../components/explore'
import Invest from '../components/invest'
import Layout from '../components/layout'
import Promo from '../components/promo'
import Section from '../components/Section'
import Start from '../components/start'
import Team from '../components/team'

export default function Home() {
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
