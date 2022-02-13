import AppStore from "./../public/ios-circle.svg"
import GoogleStore from "./../public/gp-circle.svg"
import Logo from "./../public/logo.svg"
import MobileLogo from "./../public/logo-mobile.svg"

import Link from "next/link"
import OpenMMenu from './../public/open-menu-button.svg'
import { useRouter } from 'next/router'
import { useState } from "react"
import { useEffect } from "react"

export default function Header() {
    const router = useRouter()

    const cls = ['header']
    if (router.pathname === '/nfts' || router.pathname === '/token') {
        cls.push('header--relative')
    }

    const setClasses = () => {
        return cls.join(' ')
    }

    const [headerStyles, setHeaderStyles] = useState({})
    const [mode, setMode] = useState()
    
    useEffect(() => {
        window.innerWidth < 1440 ? setMode('mobile') : setMode('desktop')

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
            { mode === 'desktop' 
            ? <Logo className="header__logo" />
            : <MobileLogo className="header__logo" />
            }
            <button type="button" className="header__open-menu">
                <OpenMMenu className="open-menu-icon" />
            </button>
            <nav className="header__nav">
                <ul>
                    <li>
                        <a href="#start">Quests</a>
                    </li>
                    <li>
                        <a href="https://builder.waym.app">Builder</a>
                    </li>
                    <li>
                        <a href="https://whitepaper.waym.app">White Paper</a>
                    </li>
                    <li>
                        <Link href="/nfts">
                            <a>NFTs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/token">
                            <a>WAYM Token</a>
                        </Link>
                    </li>
                </ul>
            </nav>

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