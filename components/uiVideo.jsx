import { useState, useEffect } from "react"

export default function UiVideo({ horizontal, vertical, src }) {

    const [currentVideo, setCurrentVideo] = useState()

    useEffect(() => {
        if (src) {
            setCurrentVideo(src)
        }

        if (horizontal && vertical) {
            window.innerWidth > 767
            ? setCurrentVideo(horizontal)
            : setCurrentVideo(vertical)
        }
    }, [])

    return (
        <div className="uiVideo">
            <video
                autoPlay
                src={currentVideo}
                alt="video"
                muted
                type="video/mp4"
                loop
                playsInline
            />
        </div>

    )
}
