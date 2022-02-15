import Navigation from "./navigation"
import Cross from "./../public/cross.svg"

export default function MobileMenu({ closeMenuFunc }) {
    return (
        <div className="mobile-menu">
            <button type="button" onClick={() => closeMenuFunc()}>
                <Cross />
            </button>
            <Navigation
                additionalClass="mobile-menu__navigation"
                closeMenuFunc={closeMenuFunc} />
        </div>
    )
}