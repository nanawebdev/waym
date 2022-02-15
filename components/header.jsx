import AppStore from "./../public/ios-circle.svg"
import GoogleStore from "./../public/gp-circle.svg"
import Logo from "./../public/logo.svg"
import MobileLogo from "./../public/logo-mobile.svg"
import OpenMMenu from './../public/open-menu-button.svg'
import { useRouter } from 'next/router'
import { useState } from "react"
import { useEffect } from "react"
import Navigation from "./navigation"
import Link from "next/link"

export default function Header({ mode, openMenuFunc }) {
    const router = useRouter()

    const cls = ['header']
    if (router.pathname === '/nfts' || router.pathname === '/token') {
        cls.push('header--relative')
    }

    const setClasses = () => {
        return cls.join(' ')
    }

    const [headerStyles, setHeaderStyles] = useState({})


    useEffect(() => {
        const boundary = window.innerHeight * 6
        const headerTop = 40

        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > boundary) {
                setHeaderStyles({
                    position: 'absolute',
                    top: `${boundary + headerTop}px`
                })
            } else {
                setHeaderStyles({})
            }
        })
    }, [])

    return (
        <header className={setClasses()} style={headerStyles}>
            <Link href="/">
                <a>
                    {mode === 'desktop'
                        ? <Logo className="header__logo" />
                        : <MobileLogo className="header__logo" />
                    }
                </a>
            </Link>
            <button type="button" className="header__open-menu" onClick={() => openMenuFunc()}>
                <OpenMMenu className="open-menu-icon" />
            </button>
            <Navigation additionalClass="header__nav" />

            <div className="header__links">
                <a href="https://apps.apple.com/ru/app/waym/id1584818031">
                    <AppStore width="64" height="64" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=ru.waymaker.app&hl=ru">
                    <GoogleStore width="64" height="64" />
                </a>
            </div>


        </header>
    )
}