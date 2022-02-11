import Section from "./Section";
import UiVideo from "./uiVideo";

export default function Explore() {
  const setMedia = () => {
    return <UiVideo src="./hyperreality.m4v" />
  }
  
    return (
      <Section
        sectionclassName="explore"
        tag="Explore"
        buttonTitle="Start <br> exploring"
        buttonColor="#00D0FF"
        buttonHref="https://web.waym.app/quest/181"
        title="Use your imagination <br> to lose yourself <br> in an infinite variety <br> of text quests"
        text="Become the main character <br> of the WAYM interactive story <br> and make decisions to change <br> the plot."
        media={setMedia()}
   >
      
      </Section>
    )
}
