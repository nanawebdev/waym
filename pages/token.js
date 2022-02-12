import Layout from "../components/layout"
import MainButton from "../components/mainButton"

export default function Token() {
    return (
        <section className="section token">
            <div className="container">
                <h3>WAYM Token is a currency based on Binance Smart Chain Ecosystem.
                    It represents a piece of value in&nbsp;WayMaker metaverse
                    — players use it for playing quests, and creators get
                    is as reward for a good work</h3>

                <div className="section__text">
                    <p>We will start public sale on March 2022.</p>
                    <p>Register now for get a pre-sale bonus!</p>
                </div>
                <MainButton title="Register" color="" />
            </div>

        </section>
    )
}


Token.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}