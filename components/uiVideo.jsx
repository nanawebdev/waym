export default function UiVideo({src}) {
    return (
        <video className="uiVideo"
            autoPlay
            src={src}
            alt="video"
            muted
            type="video/mp4"
            loop
        >

        </video>
    )
}
