import { useRouter } from "next/router"

export default function Megaphone() {
    const { basePath } = useRouter()

    return (
        <div className="megaphone">
            <div className="megaphone__img megaphone__img--1">
                <img src={`${basePath}/megaphone.png`} alt="Megaphone" />

            </div>
            <div className="megaphone__img megaphone__img--2">
                <img src={`${basePath}/bubble-1.png`} alt="bubble" />

            </div>
            <div className="megaphone__img megaphone__img--3">
                <img src={`${basePath}/bubble-2.png`} alt="bubble" />

            </div>
            <div className="megaphone__img megaphone__img--4">
                <img src={`${basePath}/bubble-3.png`} alt="bubble" />

            </div>
            <div className="megaphone__img megaphone__img--5">
                <img src={`${basePath}/bubble-4.png`} alt="bubble" />

            </div>
        </div>
    )
}