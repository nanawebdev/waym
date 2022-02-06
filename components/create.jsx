import MainButton from "./mainButton";
import Megaphone from "./megaphone";

export default function Create() {
    return (
        <section className="section create">
            <div className="container">
                <div className="section__wrapper">

                <p className="section__tag">Create</p>
                <h3>Write new stories to expand  the&nbsp;metaverse</h3>
                <div className="section__text">
                    Use our quest builder to create stories easy and fast.
                    Release your creative potential and get the reward.</div>
                </div>
    
                <div className="create__animation">
                    <Megaphone />
                </div>

                <MainButton title="Start creating" stroke="#FF375F" href="https://builder.waym.app" /></div>

        </section>
    )
}