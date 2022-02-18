import Cross from "./../public/cross.svg"

export default function Modal({ videoSrc, closeModal }) {

    return (
        <div className="modal">
            <div class="modal__bg" onClick={closeModal}></div>
            <div className="modal__content">
                <button type="button" onClick={() => closeModal()}>
                    <Cross />
                </button>

                <iframe
                    style={{ width: "100%", height: "100%" }}
                    src={videoSrc}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>

            </div>

        </div>
    )
}