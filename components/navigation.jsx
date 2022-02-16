import Link from "next/link"

export default function Navigation({additionalClass, closeMenuFunc}) {
    return (
        <nav className={`navigation ${additionalClass}`}>
        <ul onClick={() => {
            if(closeMenuFunc !== undefined) {closeMenuFunc()}
        }}>
            <li>
                <a href="/#start">Quests</a>
            </li>
            <li>
                <a href="https://builder.waym.app/" target="_blank">Builder</a>
            </li>
            <li>
                <a href="https://whitepaper.waym.app" target="_blank">White Paper</a>
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
    )
}