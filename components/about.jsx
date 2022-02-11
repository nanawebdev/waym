import Puzzle from "./puzzle"
import Section from "./Section"

export default function About() {
    function setMedia() {
        return <Puzzle />
    }

    return (
        <Section
            sectionclassName="about"
            buttonTitle="Learn more"
            buttonColor="#ED6E33"
            buttonHref="https://https://whitepaper.waym.app/"
            title="About <br> WayMaker"
            text="<p>The continuously developing chain <br> of interactive stories united <br>  by the central plotline.</p>
                <p>Community members create their <br> own content and vote for the best <br>  WAYM quests, determining <br> the future of the metaverse.</p>"
            media={setMedia()}
        >
            <div className="section__mobile-text">
                <p>The continuously developing chain <br /> of interactive stories united <br />  by the central plotline.</p>
                <p>Community members create their <br /> own content and vote for the best <br />  WAYM quests, determining <br /> the future of the metaverse.</p>
            </div>
        </Section>
    )
}
