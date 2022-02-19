import Layout from '../components/layout'
import MainPage from '../components/mainPage'


export default function Home() {

  return (
    <MainPage className='home' />
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
