import Layout from "../components/layout"
import MainButton from "../components/mainButton"

const items = [
  { id: 1, imgSrc: './nfts-1.jpg', title: 'Monica’s gun for jumping between simulations', waymItem: 'The Wave', price: '1000' },
  { id: 2, imgSrc: './nfts-2.jpg', title: 'Simulation anomaly detector', waymItem: 'The Wave', price: '1000' },
  { id: 3, imgSrc: './nfts-1.jpg', title: 'Monica’s gun for jumping between simulations', waymItem: 'The Wave', price: '1000' },
  { id: 4, imgSrc: './nfts-1.jpg', title: 'Monica’s gun for jumping between simulations', waymItem: 'The Wave', price: '1000' },
  { id: 5, imgSrc: './nfts-2.jpg', title: 'Simulation anomaly detector', waymItem: 'The Wave', price: '1000' },
  { id: 6, imgSrc: './nfts-1.jpg', title: 'Monica’s gun for jumping between simulations', waymItem: 'The Wave', price: '1000' },
]

export default function Nfts() {
  const renderNftsItems = () => {
    return items.map(v => {
      return <li key={v.id}>
        <div className="nfts__img">
          <img src={v.imgSrc} alt={v.waymItem} />
        </div>

        <div className="nfts__wrapper">
          <h4>{v.title}</h4>
          <div>
            <div className="nfts__info">
              <span>WAYM</span>
              <span>{v.waymItem}</span>
            </div>
            <div className="nfts__info">
              <span>Price</span>
              <span>{v.price} W</span>
            </div>
          </div>

        </div>
      </li>
    })
  }

  return (
    <div className="nfts container">
      <ul>
        {renderNftsItems()}
      </ul>

      <div className="nfts__go-register">
        <div>
          <h3>Public sale will coming soon</h3>
          <p>Register now and get a pre-sale bonus</p>
        </div>
        <MainButton title="Register" />
      </div>

      <div className="nfts__big-image">
          <img src="./../big-nfts.png" alt="nfts" />
        </div>
    </div>
  )
}


Nfts.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}