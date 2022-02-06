import AppStore from '../public/appstore.svg'
import GooglePlay from '../public/gp.svg'
import Facebook from '../public/facebook.svg'
import Instagram from '../public/instagram.svg'
import Telegram from '../public/telegram.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <form>
                    <label></label>
                    <input type="text" placeholder="Name" minLength="1" maxLength="100"></input>
                    <input type="text" placeholder="Question" minLength="1" maxLength="500"></input>
                    <input type="email" placeholder="Email" minLength="1" maxLength="100"></input>
                    <button type="submit">Send</button>
                </form>
                <section>
                    <h3 className="visually-hidden">Links</h3>
                    <a href="web.waym.app/quests">Go to quests</a>
                    <a href=" https://waym.app/terms.html">Agreements</a>
                    <div className="footer__wrapper">
                        <span>download:</span>
                        <div className="footer__line"></div>
                        <a href="https://apps.apple.com/ru/app/waym/id1584818031">
                            <AppStore width="24" height="24" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=ru.waymaker.app&hl=ru">
                            <GooglePlay width="24" height="24" />
                        </a>
                    </div>
                    <div className="footer__wrapper">
                        <span>subscribe:</span>
                        <div className="footer__line"></div>
                        <Instagram width="24" height="24" />
                        <Telegram width="24" height="24" />
                        <Facebook width="24" height="24" />
                    </div>
                    <div className='footer__copyright'>© 2021 WayMaker. Все права защищены</div>
                </section>
            </div>

        </footer>
    )
}