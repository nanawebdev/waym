import Image from "next/image"
import Puzzle1 from "./../public/puzzle-1.png"
import Puzzle2 from "./../public/puzzle-2.png"
import Puzzle3 from "./../public/puzzle-3.png"
import Puzzle4 from "./../public/puzzle-4.png"
import Puzzle5 from "./../public/puzzle-5.png"

export default function Puzzle() {
    return (
        <div className="puzzle">
            <div className="puzzle__item puzzle__item--1">
                <Image src={Puzzle1} alt="puzzle" />
                {/* // <img src="./puzzle-1.png" alt="puzzle"  /> */}
            </div>

            <div className="puzzle__item puzzle__item--2">
                <Image src={Puzzle2} alt="puzzle" />
                {/* <img src="./puzzle-2.png" alt="puzzle" /> */}
            </div>

            <div className="puzzle__item puzzle__item--3">
                <Image src={Puzzle3} alt="puzzle" />
                {/* <img src="./puzzle-3.png" alt="puzzle" /> */}
            </div>

            <div className="puzzle__item puzzle__item--4">
                <Image src={Puzzle4} alt="puzzle" />
                {/* <img src="./puzzle-4.png" alt="puzzle" /> */}
            </div>

            <div className="puzzle__item puzzle__item--5">
                <Image src={Puzzle5} alt="puzzle" />
                {/* <img src="./puzzle-5.png" alt="puzzle" /> */}
            </div>
        </div>
    )
}