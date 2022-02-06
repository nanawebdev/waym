export default function UiVideo({src}) {
    return (
        <video className="uiVideo"
            src={src}
            alt="video"
            // autoPlay
            muted
        >

        </video>
    )
}
