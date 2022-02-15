export default function UiVideo({ src }) {
    return (
        <div class="uiVideo">
            <video
                autoPlay
                src={src}
                alt="video"
                muted
                type="video/mp4"
                loop
                playsInline
            />
        </div>

    )
}
