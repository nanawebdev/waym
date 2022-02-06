import MainButton from "./mainButton";
import UiVideo from "./uiVideo";

export default function Explore() {
    return (
        <section className="explore section">
            <div className="container">
                <div className="section__wrapper">
                    <p className="section__tag">Explore</p>
                    <h3>Use your imagination to lose yourself in an infinite variety of text quests</h3>
                    <div className="section__text">Become the main character of the WAYM interactive story and make decisions to change the plot.</div>
                </div>
            </div>

            <UiVideo src="./hyperreality.m4v" />
            <MainButton title="Start exploring" href="https://web.waym.app/quest/181" stroke="#00D0FF" />
        </section>
    )
}