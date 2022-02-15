import Layout from '../components/layout'
import About from '../components/about'
import Create from '../components/create'
import Explore from '../components/explore'
import Invest from '../components/invest'
import Promo from '../components/promo'
import Start from '../components/start'
import Team from '../components/team'
// import ReactPageScroller from 'react-page-scroller'


export default function Home() {
  return (
    <div className='home'>
      {/* <ReactPageScroller containerWidth="100%"> */}
        <Promo />
        <Explore />
      {/* </ReactPageScroller> */}
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
