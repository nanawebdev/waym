import AppStore from "./../public/ios-circle.svg"
import GoogleStore from "./../public/gp-circle.svg"
import Logo from "./../public/logo.svg"
import Link from "next/link"
import OpenMMenu from './../public/open-menu-button.svg'
import { useRouter } from 'next/router'
// import { useEffect, useRef } from "react"

export default function Header() {
    const router = useRouter()

    const cls = ['header']
    if (router.pathname === '/nfts' || router.pathname === '/token') {
        cls.push('header--relative')
    }

    const setClasses = () => {
        return cls.join(' ')
    }

    // const headerRef = useRef()
    // // document.elemFromPoint(x, y);

    // useEffect(() => {
    //     const headerHeight = headerRef.offsetHeight
    //     // console.log('headerHeight', headerHeight);

    //     window.addEventListener('scroll', () => {
    //         // console.log('headerRef', headerRef);
    //     })
    // }, [])

    return (
        <header className={setClasses()}>
            <Logo className="header__logo" />
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