import UiVideo from "./uiVideo";
import Cross from "./../public/cross.svg"

export default function Modal({ videoSrc, closeModal }) {
    return (
        <div className="modal">
            <div className="modal__content">
            <button type="button" onClick={() => closeModal()}>
                    <Cross />
                </button>
                { videoSrc ? <UiVideo src={videoSrc} />: <p>Загрузка...</p> }
            </div>

        </div>
    )
}