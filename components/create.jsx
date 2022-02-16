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
        buttonTitle="Start <br> creating"
        mobileButtonTitle="Create"
        buttonColor="#FF375F"
        buttonHref="https://builder.waym.app"
        title="Write new stories to expand the metaverse"
        text="Use our quest builder  to create stories easy and fast. 
        Release your creative potential and get the reward."
        media={setMedia()}
       >
         
        </UiSection>
    )
}
