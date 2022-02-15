import Puzzle from "./puzzle"
import UiSection from "./UiSection"

export default function About() {
    function setMedia() {
        return <Puzzle />
    }

    return (
        <UiSection
            sectionClass="about"
            buttonTitle="Learn <br> more"
            buttonColor="#ED6E33"
            buttonHref="https://whitepaper.waym.app/"
            title="About <br> WayMaker"
            text="<p>The continuously developing chain of interactive stories united  by the central plotline.</p>
                <p>Community members create their own content and vote for the best  WAYM quests, determining the future of the metaverse.</p>"
            media={setMedia()}
        >
        </UiSection>
    )
}
