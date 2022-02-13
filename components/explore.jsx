import Section from "./Section";
import UiVideo from "./uiVideo";

export default function Explore() {
  const getChildrenOutOfContainer = () => {
    return <div className="section__bg">
      <UiVideo src="./hyperreality.m4v" />
    </div>

  }

  return (
    <Section
      sectionClass="explore"
      tag="Explore"
      buttonTitle="Start <br> exploring"
      mobileButtonTitle="Start"
      buttonColor="#00D0FF"
      buttonHref="https://web.waym.app/quest/181"
      title="Use your imagination <br> to lose yourself <br> in an infinite variety <br> of <br> text quests"
      text="Become the main character <br> of the WAYM interactive story <br> and make decisions <br> to change <br> the plot."
      childrenOutOfContainer={getChildrenOutOfContainer()}
    >

    </Section>
  )
}
