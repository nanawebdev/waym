import { useRouter } from "next/router"

export default function Puzzle() {
    const { basePath } = useRouter()

    return (
        <div className="puzzle">
            <div className="puzzle__item puzzle__item--1">
                <img src={`${basePath}/puzzle-1.png`} alt="puzzle" />
            </div>

            <div className="puzzle__item puzzle__item--2">
                <img src={`${basePath}/puzzle-2.png`} alt="puzzle" />
            </div>

            <div className="puzzle__item puzzle__item--3">
                <img src={`${basePath}/puzzle-3.png`} alt="puzzle" />
            </div>

            <div className="puzzle__item puzzle__item--4">
                <img src={`${basePath}/puzzle-4.png`} alt="puzzle" />
            </div>

            <div className="puzzle__item puzzle__item--5">
                <img src={`${basePath}/puzzle-5.png`} alt="puzzle" />
            </div>
        </div>
    )
}