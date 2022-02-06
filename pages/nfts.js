import Layout from "../components/layout"
import MainButton from "../components/mainButton"

export default function Nfts() {
  return (
    <div>ведутся работы</div>
  )
}


Nfts.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}