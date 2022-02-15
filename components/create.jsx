import Megaphone from "./megaphone";
import UiSection from "./UiSection";

export default function Create() {
  const setMedia = () => {
    return <Megaphone />
  }

    return (
      <UiSection
        sectionClass="create"
        tag="Create"
        buttonTitle="Start creating"
        mobileButtonTitle="Create"
        buttonColor="#FF375F"
        buttonHref="https://builder.waym.app"
        title="Write new stories <br> to expand <br> the metaverse"
        text="Use our quest builder <br>  to create stories easy and fast. <br> 
        Release your creative potential <br> and get the reward."
        media={setMedia()}
       >
         
        </UiSection>
    )
}
