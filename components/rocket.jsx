import { useRouter } from "next/router"

export default function Rocket() {
    const { basePath } = useRouter()
    
    return (
        <div className="rocket">
            <div className="rocket__image rocket__image--1">
                <img src={`${basePath}/rocket.png`} alt="rocket" />
            </div>
            <div className="rocket__image rocket__image--2">
                <img src={`${basePath}/heart.png`} alt="heart" />
            </div>

            <div className="rocket__image rocket__image--3">
                <img src={`${basePath}/heart.png`} alt="heart" />
            </div>

            <div className="rocket__image rocket__image--4">
                <img src={`${basePath}/heart.png`} alt="heart" />
            </div>

            <div className="rocket__image rocket__image--5">
                <img src={`${basePath}/heart.png`} alt="heart" />
            </div>

            <div className="rocket__image rocket__image--6">
                <img src={`${basePath}/heart.png`} alt="heart" />
            </div>
        </div>
    )
}