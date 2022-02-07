import MainButton from "./mainButton";
import Megaphone from "./megaphone";
import Section from "./Section";

export default function Create() {
    return (
      <Section
        sectionClass="create"
        tag="Create"
        buttonTitle="Start creating"
        buttonColor="#FF375F"
        buttonHref="https://builder.waym.app"
        title="Write new stories <br> to expand <br> the metaverse"
        text="Use our quest builder <br>  to create stories easy and fast. <br> 
        Release your creative potential <br> and get the reward."
       >
           <Megaphone />
        </Section>
    )
}
