import MainButton from "./mainButton";
import Rocket from "./rocket";

export default function Invest() {
    return (
        <section className="invest section">
            <div className="container">
                <div className="section__wrapper">
                    <p className="section__tag">Invest</p>
                    <h3>Support the economics based on intellectual property</h3>
                    <div className="section__text">Use our quest builder to create stories easy and fast. Release your creative potential and get the reward.</div>
                </div>

                <div className="invest__animation">
                <Rocket />
                </div>
                <MainButton title="About WAYM Tokens" stroke="#3AA76D" href="/token" />
               
            </div>

        </section>
    )
}