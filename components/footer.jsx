import AppStore from '../public/appstore.svg'
import GooglePlay from '../public/gp.svg'
import Facebook from '../public/facebook.svg'
import Instagram from '../public/instagram.svg'
import Telegram from '../public/telegram.svg'
import { useState } from 'react'

export default function Footer() {
    // const [name, setName] = useState('')
    // const [question, setQuestion] = useState('')
    // const [email, setEmail] = useState('')

    // const [nameDirty, setNameDirty] = useState(false)
    // const [questionDirty, setQuestionDirty] = useState(false)
    // const [emailDirty, setEmailDirty] = useState(false)

    // const [nameError, setNameError] = useState('Заполните поле')
    // const [questionError, setQuestionError] = useState('Заполните поле')
    // const [emailError, setEmailError] = useState('Заполните поле')

// const validateForm = () => {

// }

// const onSubmitForm = (e) => {
//     e.preventDefault()
// }

    return (
        <footer className="footer section">
            <div className="container">
                <form method="POST" action="#">
                    <input type="text" placeholder="Name" minLength="1" maxLength="100" name="user-name"></input>
                    <input type="text" placeholder="Question" minLength="1" maxLength="500" name="user-question"></input>
                    <input type="email" placeholder="Email" minLength="1" maxLength="100" name="user-email"></input>
                    <button type="submit" onClick={(e) => {}}>Send</button>
                </form>
                <section>
                    <h3 className="visually-hidden">Links</h3>
                    <a href="https://web.waym.app/quests" target="_blank">Go to quests</a>
                    <a href="https://waym.app/terms.html" target="_blank">Agreements</a>
                    
                    <div className="footer__wrapper">
                        <span>download:</span>
                        <div className="footer__line"></div>
                        <a href="https://apps.apple.com/ru/app/waym/id1584818031" target="_blank">
                            <AppStore width="24" height="24" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=ru.waymaker.app&hl=ru" target="_blank">
                            <GooglePlay width="24" height="24" />
                        </a>
                    </div>
                    <div className="footer__wrapper">
                        <span>subscribe:</span>
                        <div className="footer__line"></div>
                        <a href="https://www.instagram.com/waymaker.official/" target="_blank">
                            <Instagram width="24" height="24" />
                        </a>
                        <a href="https://t.me/waymmaker" target="_blank">
                            <Telegram width="24" height="24" />
                        </a>
                        <a href="https://www.facebook.com/groups/waymaker.official" target="_blank">
                            <Facebook width="24" height="24" />
                        </a>

                    </div>
                    <div className='footer__copyright'>© 2021 WayMaker. Все права защищены</div>
                </section>
            </div>

        </footer>
    )
}