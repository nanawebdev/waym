import AppStore from "./../public/ios-circle.svg"
import GoogleStore from "./../public/gp-circle.svg"
import Logo from "./../public/logo.svg"
import Link from "next/link"

export default function Header() {
    return (
        <header className="header">
            <Logo width="112" height="112" className="header__logo" />
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