import { useEffect, useState } from "react"
import Link from "next/link"

export default function MainButton({ title, href, color, mobileTitle, isLocal = false }) {
    const [mode, setMode] = useState()

    let currentTitle = title

    useEffect(() => {
        window.innerWidth < 1440 ? setMode('mobile') : setMode('desktop')
    }, [])

    if (mode === 'desktop') {
        currentTitle = title
    }

    if (mode === 'mobile' && mobileTitle !== undefined) {
        currentTitle = mobileTitle
    }


    if (mode === 'mobile' && mobileTitle === undefined) {
        currentTitle = title
    }

    const renderLink = () => {
        if (isLocal) {
            return <Link href={href}>{<a dangerouslySetInnerHTML={{ __html: currentTitle }}></a>}</Link>
        }

        return <a href={href} dangerouslySetInnerHTML={{ __html: currentTitle }} target="_blank"></a>
    }


    return (
        <div className="main-button">
            { renderLink() }
            <svg className="main-button__bg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="160" height="160" rx="80" fill="#000B29" />
                <rect x="8" y="8" width="144" height="144" rx="72" stroke="url(#pattern-cta)" strokeOpacity="0.25" strokeWidth="16" />
                <g style={{ 'mixBlendMode': 'overlay' }}>
                    <rect x="8" y="8" width="144" height="144" rx="72" stroke={color} strokeWidth="16" />
                </g>
                <defs>
                    <pattern id="pattern-cta" patternContentUnits="objectBoundingBox" width="0.0625" height="0.0625">
                        <use xlinkHref="#image-cta" transform="scale(0.0015625)" />
                    </pattern>
                    <image id="image-cta" width="40" height="40" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEfSURBVHgB3dhbDoIwEEDRuiPc/150KZWHNQWh87omEyfxz9wetBTjrc5TMk/d5jm/pgIMdcGLZ3E14EQhCeDO04IUMgr8cvRBAhkBnq5/DEaRXuDlumfBCNIDHK53FfQirUBxnVHQg7QAVX0paEVqgequJmhB0j38iulvBN8z9J7G7zr6VMDPLfpcxU/+Cj+Z8Gdn3wvjjkEC2XoIrg8GGx9M3Qb7fYkAyx5ZMdw8Nwr4s8n+Cf7/Hkx9F6c+B1M/SWrmZ7G02FXPjbQANYuMei6kFqiNSz0zUgO0RI29u/h2+oqN38hDRNJ7xrGnx0j6rrMAVUj63LICRSR98nuAQ2QfjOKOPQTZggSu72HIuk3G/6hXZAMiuAIB350V+QKr2T2PNPxtzgAAAABJRU5ErkJggg==" />
                </defs>
            </svg>
            
        </div >
    )
}