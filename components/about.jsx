import MainButton from "./mainButton";

export default function About() {
    return (
        <section className="section about">
            <div className="container">
                <div className="section__wrapper">
                    <h3> About WayMaker</h3>
                    <div className="section__text">The continuously developing chain of interactive stories united by the central plotline.</div>
                    <div className="section__text">Community members create their own content and vote for the best WAYM quests, determining the future of the metaverse.</div>
                </div>
            </div>

            <MainButton title="Learn more" stroke="#ED6E33" href="https://https://whitepaper.waym.app/" />
        </section>
    )
}