import MainButton from "./mainButton";
import Rocket from "./rocket";
import Section from "./Section";

export default function Invest() {
    const setMedia = () => {
        return <Rocket />
    }

    return (
        <Section
            sectionclassName="invest"
            tag="Invest"
            buttonTitle="About <br> WAYM <br> Tokens"
            buttonColor="#3AA76D"
            buttonHref="/token"
            title="Support the economics <br> based on intellectual <br> property"
            text="Use our quest builder <br> to create stories easy and fast. <br> Release your creative potential <br> and get the reward."
            media={setMedia()}
        >

        </Section>
    )
}
