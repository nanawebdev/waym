import Layout from "../components/layout"
import MainButton from "../components/mainButton"
import Modal from "../components/modal"
import { useState } from "react"
import Play from "./../public/play.svg"
import Loader from "../components/loader"

const items = [
  { id: 1, imgSrc: './nft-3.jpg', title: 'Monica’s gun for jumping between simulations', waymItem: 'The Wave', price: 1000, videoSrc: "https://www.youtube.com/embed/eBc0MuQSIHw" },
  { id: 2, imgSrc: './nft-2.jpg', title: 'Simulation anomaly detector', waymItem: 'The Wave', price: 1000, videoSrc: "https://www.youtube.com/embed/FzCA9Lb8ZR4" },
  { id: 3, imgSrc: './nft-1.jpg', title: 'Monica’s gun for jumping between simulations', waymItem: 'The Wave', price: 1000, videoSrc: "https://www.youtube.com/embed/qvdV-Q_8ENI" },
]

export default function Nfts() {
  const [modalIOpen, setModalIsOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState()

  const closeModalFunc = () => {
    setModalIsOpen(false)
  }

  const openModalFunc = (videoSrc) => {
    setCurrentVideo(videoSrc)
    setModalIsOpen(true)
  }

  const renderNftsItems = () => {
    return items.map(v => {
      return <li key={v.id} onClick={() => {
        openModalFunc(v.videoSrc)
      }}>
        <div className="nfts__img">
          <div className="nhts__play">
            <Play width="16" height="20" />
          </div>
          <img src={v.imgSrc} alt={v.waymItem} />
        </div>

        <div className="nfts__wrapper">
          <h4>{v.title}</h4>
          <div>
            <div className="nfts__info">
              <span>Story</span>
              <span>{v.waymItem}</span>
            </div>
            <div className="nfts__info">
              <span>Price</span>
              <span>{v.price} $WAYM</span>
            </div>
          </div>

        </div>
      </li>
    })
  }

  return (
    <div className="nfts container">
      <h2>NFTs</h2>
      <ul>
        {
          items.length !== 0
            ? renderNftsItems()
            : <Loader />
        }
      </ul>

      <div className="nfts__go-register">
        <div>
          <h3>Public sale will coming soon</h3>
          <p>Register now and get a pre-sale bonus</p>
        </div>
        <MainButton title="Register" href="https://web.waym.app/login" />
      </div>

      {modalIOpen && <Modal videoSrc={currentVideo} closeModal={closeModalFunc} />}
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