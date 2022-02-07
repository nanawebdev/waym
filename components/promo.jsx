import Section from "./Section";
import UiVideo from './uiVideo'

export default function Promo() {
   

    function getChildrenOutOfContainer() {
        return <div>
            <UiVideo src="./promo-video.mp4" />
            <div className="promo__wrapper">
                <div className="promo__title">Join the WayMaker</div>
                <div className="promo__title">Join the WayMaker</div>
            </div>
        </div>
    }

    return (
        <Section
            sectionClass="promo"
            tag=""
            buttonTitle="Get <br> started"
            buttonColor="#000B29"
            buttonHref="https://web.waym.app/quest/181"
            title=""
            text="Find your own way through <br>
                our interactive text metaverse <br>
                created by its users."
    
            childrenOutOfContainer={getChildrenOutOfContainer()}
        >
        </Section>
    )
}
