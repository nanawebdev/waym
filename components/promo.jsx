import MainButton from "./mainButton";
import UiVideo from './uiVideo'
export default function Promo() {
    return (
        <section className="promo section">
            <div className="promo__wrapper">
                <div className="promo__title">Join the WayMaker</div>
                <div className="promo__title">Join the WayMaker</div>
            </div>
            <UiVideo src="./promo-video.mp4" />
            <div className="container">
                <div className="section__text">
                    Find your own way through
                    our interactive text metaverse
                    created by its users.</div>

                <MainButton stroke="#000B29" title="GET STARTED" href="https://web.waym.app/quest/181" />
            </div>
        </section>
    )
}