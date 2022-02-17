import { useEffect, useState } from "react";
import UiSection from "./UiSection";
import UiVideo from './uiVideo'

export default function Promo() {
    const [video, setVideo] = useState()

    useEffect(() => {
        window.innerWidth > 320
            ? setVideo("https://ik.imagekit.io/9uamvjevwkkw/simona.mp4")
            : setVideo("https://ik.imagekit.io/9uamvjevwkkw/simona_portrait.mp4")

    }, [])


    function getChildrenOutOfContainer() {
        return <div className="ui-section__bg">
            <UiVideo src={video} />
            <div className="promo__wrapper">
                <div className="promo__title">Join the WayMaker</div>
                <div className="promo__title">Join the WayMaker</div>
            </div>
        </div>
    }

    const scrollToNextSection = () => {
       
    }

   
    return (
        <UiSection
            onScroll={scrollToNextSection}
            sectionClass="promo"
            buttonTitle="Get <br> started"
            buttonColor="#ffffff"
            buttonHref="https://web.waym.app/quest/181"
            text="Find your own way through
                our interactive text metaverse
                created by its users."
            childrenOutOfContainer={getChildrenOutOfContainer()}
        >
        </UiSection>
    )
}
