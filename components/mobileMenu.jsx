import Navigation from "./navigation"
import Cross from "./../public/cross.svg"
import AppStore from "./../public/ios-circle.svg"
import GoogleStore from "./../public/gp-circle.svg"

export default function MobileMenu({ closeMenuFunc, cls }) {
   
    return (
        <div className={`mobile-menu ${cls}`}>
            <div className="mobile-menu__buttons">
                <div className="mobile-menu__socials">
                    <a href="https://apps.apple.com/ru/app/waym/id1584818031" target="_blank">
                        <AppStore />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=ru.waymaker.app&hl=ru" target="_blank">
                        <GoogleStore />
                    </a>
                </div>
                <button type="button" onClick={() => closeMenuFunc()}>
                    <Cross />
                </button>
            </div>

            <Navigation
                additionalClass="mobile-menu__navigation"
                closeMenuFunc={closeMenuFunc} />
        </div>
    )
}