import AppStore from '../public/appstore.svg'
import GooglePlay from '../public/gp.svg'
import Facebook from '../public/facebook.svg'
import Instagram from '../public/instagram.svg'
import Telegram from '../public/telegram.svg'
import { useEffect, useState } from 'react'
import jCaptcha from 'js-captcha'
import axios from "axios";

let captchaValid = false

export default function Footer() {
    const [name, setName] = useState('')
    const [question, setQuestion] = useState('')
    const [email, setEmail] = useState('')
    const [captcha, setCaptcha] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [questionDirty, setQuestionDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)

    const [nameError, setNameError] = useState('Заполните поле имя')
    const [questionError, setQuestionError] = useState('Напишите ваш вопрос')
    const [emailError, setEmailError] = useState('Заполните поле email')

    const [formValid, setFormValid] = useState(false)

    const [captchaObject, setCaptchaObject] = useState(null)
    const [captchaDirty, setCaptchaDirty] = useState(false)
    const [captchaError, setCaptchaError] = useState('Заполните поле капчи')

    useEffect(() => {
        if (nameError || questionError || emailError) {
            setFormValid(false)
        }

        if (!nameError && !questionError && !emailError) {
            setFormValid(true)
        }

    }, [nameError, questionError, emailError])

    useEffect(() => {
        setCaptchaObject(new jCaptcha({
            el: '.jCaptcha',
            canvasClass: 'jCaptchaCanvas',
            canvasStyle: {
                // required properties for captcha stylings:
                width: 100,
                height: 20,
                textBaseline: 'top',
                font: '20px Roboto',
                textAlign: 'left',
                fillStyle: '#000'
            },
            // set callback function for success and error messages:
            callback: function(response) {
                if (response === 'success') {
                    captchaValid = true
                    setCaptchaError('')
                }
                if (response === 'error') {
                    captchaValid = false
                    setCaptchaError('Неверная каптча')
                }
            }
        }))
    }, [])

    const nameHandler = (e) => {
        setName(e.target.value)

        if (e.target.value === '') {
            setNameError('Поле не должно быть пустым')
        } else {
            setNameError('')
        }
    }

    const captchaHandler = (e) => {
        setCaptcha(e.target.value)

        if (e.target.value === '') {
            setCaptchaError('Поле не должно быть пустым')
        } else {
            setCaptchaError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)

        if (e.target.value === '') {
            setEmailError('Поле не должно быть пустым')
        } else {
            setEmailError('')
        }
    }

    const questionHandler = (e) => {
        setQuestion(e.target.value)

        if (e.target.value === '') {
            setQuestionError('Поле не должно быть пустым')
        } else {
            setQuestionError('')
        }
    }

    const handlers = {
        userName: () => setNameDirty(true),
        userEmail: () => setEmailDirty(true),
        userQuestion: () => setQuestionDirty(true),
        userCaptcha: () => setCaptchaDirty(true),
    }

    const blurHandler = (e) => {
        const handler = handlers[e.target.name]
        return handler()
    }

    async function onSubmitHandler(e) {
        e.preventDefault()
        captchaObject.validate()

        if (formValid && captchaValid) {
            sendData()
        }
    }

    async function sendData() {
        try {
            await axios.get('https://data.waym.app/common/feedback', {
                params: {
                    name: name,
                    email: email,
                    offer: question,
                }
            })
            window.alert('Сообщение отправлено')
        } catch (error) {
            console.log(error);
            window.alert('Сообщение не отправлено')
        }
    }

    return (
        <footer className="footer section">
            <div className="container">
                <form method="get" onSubmit={onSubmitHandler}>

                    {(nameDirty && nameError) && <div className='footer__error'>{nameError}</div>}
                    <input
                        onChange={nameHandler}
                        onBlur={blurHandler}
                        type="text"
                        placeholder="Name"
                        minLength="1"
                        maxLength="100"
                        name="userName"
                        value={name}
                    />

                    {(questionDirty && questionError) && <div className='footer__error'>{questionError}</div>}
                    <input
                        onChange={questionHandler}
                        onBlur={blurHandler}
                        type="text"
                        placeholder="Question"
                        minLength="1"
                        maxLength="500"
                        name="userQuestion"
                        value={question}
                    />

                    {(emailDirty && emailError) && <div className='footer__error'>{emailError}</div>}
                    <input
                        onChange={emailHandler}
                        onBlur={blurHandler}
                        type="text"
                        placeholder="Email"
                        minLength="1"
                        maxLength="100"
                        name="userEmail"
                        value={email}
                    />

                    {(captchaDirty && captchaError) && <div className='footer__error'>{captchaError}</div>}
                    <input
                        onChange={captchaHandler}
                        onBlur={blurHandler}
                        className="jCaptcha"
                        type="text"
                        placeholder="Type in result please"
                        name="userCaptcha"
                    />

                    <button disabled={!formValid} type="submit">Send</button>
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